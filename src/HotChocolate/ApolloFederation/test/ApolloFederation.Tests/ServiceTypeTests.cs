using System.Threading.Tasks;
using CookieCrumble;
using HotChocolate.ApolloFederation.Constants;
using HotChocolate.ApolloFederation.Types;
using HotChocolate.Execution;
using HotChocolate.Language;
using HotChocolate.Types;
using Microsoft.Extensions.DependencyInjection;
using static HotChocolate.ApolloFederation.FederationTypeNames;
using static HotChocolate.ApolloFederation.TestHelper;

namespace HotChocolate.ApolloFederation;

public class ServiceTypeTests
{
    [Fact]
    public async Task TestServiceTypeEmptyQueryTypePureCodeFirst()
    {
        // arrange
        var schema = await new ServiceCollection()
            .AddGraphQL()
            .AddApolloFederation()
            .AddQueryType<EmptyQuery>()
            .AddType<Address>()
            .BuildSchemaAsync();

        var entityType = schema.GetType<ObjectType>(ServiceType_Name);
        var sdlResolver = entityType.Fields[WellKnownFieldNames.Sdl].Resolver!;
        
        // act
        var value = await sdlResolver(CreateResolverContext(schema));

        // assert
        Utf8GraphQLParser
            .Parse((string)value!)
            .MatchInlineSnapshot(
                """
                schema {
                  query: EmptyQuery
                }
                
                type Address @key(fieldSet: "matchCode") {
                  matchCode: String
                }
                
                type EmptyQuery {
                  _service: _Service
                  _entities(representations: [_Any!]!): [_Entity]!
                }
                
                "This type provides a field named sdl: String! which exposes the SDL of the service's schema. This SDL (schema definition language) is a printed version of the service's schema including the annotations of federation directives. This SDL does not include the additions of the federation spec."
                type _Service {
                  sdl: String!
                }
                
                "Union of all types that key directive applied. This information is needed by the Apollo federation gateway."
                union _Entity = Address
                
                "Used to indicate a combination of fields that can be used to uniquely identify and fetch an object or interface."
                directive @key(fieldSet: FieldSet! resolvable: Boolean = true) repeatable on OBJECT | INTERFACE
                
                directive @tag(name: String!) repeatable on SCALAR | OBJECT | FIELD_DEFINITION | ARGUMENT_DEFINITION | INTERFACE | UNION | ENUM | ENUM_VALUE | INPUT_OBJECT | INPUT_FIELD_DEFINITION
                
                "Scalar representing a set of fields."
                scalar FieldSet
                
                "The _Any scalar is used to pass representations of entities from external services into the root _entities field for execution. Validation of the _Any scalar is done by matching the __typename and @external fields defined in the schema."
                scalar _Any
                """);
    }

    [Fact]
    public async Task TestServiceTypeTypePureCodeFirst()
    {
        // arrange
        var schema = SchemaBuilder.New()
            .AddApolloFederation()
            .AddQueryType<Query>()
            .Create();

        // act
        var entityType = schema.GetType<ObjectType>(ServiceType_Name);

        // assert
        var value = await entityType.Fields[WellKnownFieldNames.Sdl].Resolver!(
            CreateResolverContext(schema));
        value.MatchSnapshot();
    }

    public class EmptyQuery
    {
    }

    public class Query
    {
        public Address GetAddress(int id) => default!;
    }

    public class Address
    {
        [Key]
        public string? MatchCode { get; set; }
    }
}
