using System.Text;
using HotChocolate.Types.Analyzers.Helpers;
using HotChocolate.Types.Analyzers.Inspectors;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Text;
using static HotChocolate.Types.Analyzers.StringConstants;
using static HotChocolate.Types.Analyzers.WellKnownFileNames;
using TypeInfo = HotChocolate.Types.Analyzers.Inspectors.TypeInfo;

namespace HotChocolate.Types.Analyzers.Generators;

public class ModuleGenerator : ISyntaxGenerator
{
    public void Initialize(IncrementalGeneratorPostInitializationContext context)
    {
    }

    public bool Consume(ISyntaxInfo syntaxInfo)
        => syntaxInfo is TypeInfo or TypeExtensionInfo or
            RegisterDataLoaderInfo or ModuleInfo or DataLoaderInfo;

    public void Generate(
        SourceProductionContext context,
        Compilation compilation,
        IReadOnlyCollection<ISyntaxInfo> syntaxInfos)
    {
        var module =
            syntaxInfos.OfType<ModuleInfo>().FirstOrDefault() ??
            new ModuleInfo(
                compilation.AssemblyName is null
                    ? "AssemblyTypes"
                    : compilation.AssemblyName?.Split('.').Last() + "Types",
                ModuleOptions.Default);

        var batch = new List<ISyntaxInfo>(syntaxInfos.Where(static t => t is not ModuleInfo));

        if (batch.Count == 0)
        {
            return;
        }

        var sourceText = StringBuilderPool.Get();
        sourceText.AppendLine("// <auto-generated/>");
        sourceText.AppendLine("#nullable enable");
        sourceText.AppendLine("using System;");
        sourceText.AppendLine("using HotChocolate.Execution.Configuration;");

        sourceText.AppendLine();
        sourceText.AppendLine("namespace Microsoft.Extensions.DependencyInjection");
        sourceText.AppendLine("{");

        sourceText.Append(Indent)
            .Append("public static partial class ")
            .Append(module.ModuleName)
            .AppendLine("RequestExecutorBuilderExtensions");

        sourceText.Append(Indent)
            .AppendLine("{");

        sourceText.Append(Indent)
            .Append(Indent)
            .Append("public static IRequestExecutorBuilder Add")
            .Append(module.ModuleName)
            .AppendLine("(this IRequestExecutorBuilder builder)");

        sourceText.Append(Indent).Append(Indent).AppendLine("{");

        sourceText
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .AppendLine("RegisterGeneratedDataLoader(builder);");
        sourceText.AppendLine();

        var operations = OperationType.No;

        foreach (var syntaxInfo in batch.Distinct())
        {
            switch (syntaxInfo)
            {
                case TypeInfo type:
                    if ((module.Options & ModuleOptions.RegisterTypes) ==
                        ModuleOptions.RegisterTypes)
                    {
                        sourceText.Append(Indent)
                            .Append(Indent)
                            .Append(Indent)
                            .Append("builder.AddType<")
                            .Append(type.Name)
                            .AppendLine(">();");
                    }
                    break;

                case TypeExtensionInfo extension:
                    if ((module.Options & ModuleOptions.RegisterTypes) ==
                        ModuleOptions.RegisterTypes)
                    {
                        if (extension.IsStatic)
                        {
                            sourceText.Append(Indent)
                                .Append(Indent)
                                .Append(Indent)
                                .Append("builder.AddTypeExtension(typeof(")
                                .Append(extension.Name)
                                .AppendLine("));");
                        }
                        else
                        {
                            sourceText.Append(Indent)
                                .Append(Indent)
                                .Append(Indent)
                                .Append("builder.AddTypeExtension<")
                                .Append(extension.Name)
                                .AppendLine(">();");
                        }

                        if (extension.Type is not OperationType.No &&
                            (operations & extension.Type) != extension.Type)
                        {
                            operations |= extension.Type;
                        }
                    }
                    break;

                case RegisterDataLoaderInfo dataLoader:
                    if ((module.Options & ModuleOptions.RegisterDataLoader) ==
                        ModuleOptions.RegisterDataLoader)
                    {
                        sourceText.Append(Indent)
                            .Append(Indent)
                            .Append(Indent)
                            .Append("builder.AddDataLoader<")
                            .Append(dataLoader.Name)
                            .AppendLine(">();");
                    }
                    break;
            }
        }

        if ((operations & OperationType.Query) == OperationType.Query)
        {
            WriteTryAddOperationType(sourceText, OperationType.Query);
        }

        if ((operations & OperationType.Mutation) == OperationType.Mutation)
        {
            WriteTryAddOperationType(sourceText, OperationType.Mutation);
        }

        if ((operations & OperationType.Subscription) == OperationType.Subscription)
        {
            WriteTryAddOperationType(sourceText, OperationType.Subscription);
        }

        sourceText.Append(Indent).Append(Indent).Append(Indent).AppendLine("return builder;");
        sourceText.Append(Indent).Append(Indent).AppendLine("}");

        sourceText.AppendLine();

        sourceText
            .Append(Indent)
            .Append(Indent)
            .Append("static partial void RegisterGeneratedDataLoader(")
            .AppendLine("IRequestExecutorBuilder builder);");

        sourceText.Append(Indent).AppendLine("}");

        sourceText.AppendLine("}");

        context.AddSource(TypeModuleFile, SourceText.From(sourceText.ToString(), Encoding.UTF8));
        StringBuilderPool.Return(sourceText);
    }

    private static void WriteTryAddOperationType(StringBuilder sourceText, OperationType type)
        => sourceText.Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .AppendLine("builder.ConfigureSchema(")
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .AppendLine("b => b.TryAddRootType(")
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .AppendLine("() => new global::HotChocolate.Types.ObjectType(")
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append("d => d.Name(global::HotChocolate.Types.OperationTypeNames.")
            .Append(type)
            .AppendLine(")),")
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append(Indent)
            .Append("HotChocolate.Language.OperationType.")
            .Append(type)
            .AppendLine("));");
}
