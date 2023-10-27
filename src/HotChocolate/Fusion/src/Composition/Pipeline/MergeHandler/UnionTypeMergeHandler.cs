using HotChocolate.Skimmed;

namespace HotChocolate.Fusion.Composition.Pipeline;

/// <summary>
/// Defines a type handler that is responsible for merging a group of union types into a
/// single distributed union type on the fusion graph.
/// </summary>
internal sealed class UnionTypeMergeHandler : ITypeMergeHandler
{
    /// <inheritdoc />
    public TypeKind Kind => TypeKind.Union;
    
    /// <inheritdoc />
    public MergeStatus Merge(CompositionContext context, TypeGroup typeGroup)
    {
        // If any type in the group is not a union type, skip merging
        if (typeGroup.Parts.Any(t => t.Type.Kind is not TypeKind.Union))
        {
            return MergeStatus.Skipped;
        }

        var target = MergeHelper.GetOrCreateType<UnionType>(context.FusionGraph, typeGroup.Name);

        foreach (var part in typeGroup.Parts)
        {
            var source = (UnionType)part.Type;
            MergeType(context, source, part.Schema, target, context.FusionGraph);
        }

        return MergeStatus.Completed;
    }

    private static void MergeType(
        CompositionContext context,
        UnionType source,
        Schema sourceSchema,
        UnionType target,
        Schema targetSchema)
    {
        context.TryApplySource(source, sourceSchema, target);

        target.MergeDescriptionWith(source);

        foreach (var sourceType in source.Types)
        {
            // Retrieve the target member type from the schema.
            var targetMemberType = MergeHelper.GetOrCreateType<ObjectType>(context.FusionGraph, sourceType.Name);

            // If the target union type does not contain the target member type, add it.
            if (!target.Types.Contains(targetMemberType))
            {
                target.Types.Add(targetMemberType);
            }
        }
    }
}
