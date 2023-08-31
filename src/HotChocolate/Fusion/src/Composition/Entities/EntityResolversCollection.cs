using System.Collections;
using System.Text;
using HotChocolate.Language;

namespace HotChocolate.Fusion.Composition;

internal class EntityResolversCollection : ICollection<EntityResolver>
{
    private readonly List<EntityResolver> _resolvers = new();
    private readonly Dictionary<ResolverKey, EntityResolver> _map = new();

    public int Count => _resolvers.Count;

    public bool IsReadOnly => false;

    public bool Contains(EntityResolver item)
        => _map.ContainsKey(item);
    
    public void Add(EntityResolver item)
    {
        _map.Add(item, item);
        _resolvers.Add(item);
    }
    
    public bool TryAdd(EntityResolver item)
    {
        if (_map.TryAdd(item, item))
        {
            _resolvers.Add(item);
            return true;
        }

        return false;
    }
    
    public bool Remove(EntityResolver item)
    {
        if(_map.TryGetValue(item, out var resolver))
        {
            _map.Remove(item);
            _resolvers.Remove(resolver);
            return true;
        }

        return false;
    }

    public void Clear()
    {
        _resolvers.Clear();
        _map.Clear();
    }

    public void CopyTo(EntityResolver[] array, int arrayIndex)
        => _resolvers.CopyTo(array, arrayIndex);

    public IEnumerator<EntityResolver> GetEnumerator()
        => _resolvers.GetEnumerator();

    IEnumerator IEnumerable.GetEnumerator()
        => GetEnumerator();

    private readonly record struct ResolverKey(string SubgraphName, SelectionSetNode SelectionSet)
    {
        public bool Equals(ResolverKey? other)
        {
            if (other is null)
            {
                return false;
            }

            return string.Equals(SubgraphName, other.Value.SubgraphName) &&
                SyntaxComparer.BySyntax.Equals(SelectionSet, other.Value.SelectionSet);
        }
        
        public override int GetHashCode()
            => HashCode.Combine(SubgraphName, SyntaxComparer.BySyntax.GetHashCode(SelectionSet));

        private bool PrintMembers(StringBuilder builder)
        {
            builder.AppendLine(SubgraphName);
            builder.AppendLine(SelectionSet.ToString());
            return true;
        }

        public override string ToString()
        {
            var builder = new StringBuilder();
            PrintMembers(builder);
            return builder.ToString();
        }
        
        public static implicit operator ResolverKey(EntityResolver value)
            => new(value.SubgraphName, value.SelectionSet); 
    }
}