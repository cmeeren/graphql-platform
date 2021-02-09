﻿namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public enum Episode
    {
        NewHope,
        Empire,
        Jedi
    }
}
// TestFactory

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class TestFactory
        : global::StrawberryShake.IOperationResultDataFactory<Test>
    {
        private readonly global::StrawberryShake.IEntityStore _entityStore;

        public TestFactory(global::StrawberryShake.IEntityStore entityStore)
        {
            _entityStore = entityStore
                 ?? throw new global::System.ArgumentNullException(nameof(entityStore));
        }

        public Test Create(global::StrawberryShake.IOperationResultDataInfo dataInfo)
        {
            if (dataInfo is TestInfo info)
            {
                return new Test(info.Foo);
            }

            throw new global::System.ArgumentException("TestInfo expected.");
        }
    }
}


// TestInfo

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class TestInfo
        : global::StrawberryShake.IOperationResultDataInfo
    {
        private readonly global::System.Collections.Generic.IReadOnlyCollection<global::StrawberryShake.EntityId> _entityIds;
        private readonly ulong _version;

        public TestInfo(
            global::System.String? foo,
            global::System.Collections.Generic.IReadOnlyCollection<global::StrawberryShake.EntityId> entityIds,
            ulong version)
        {
            Foo = foo;
            _entityIds = entityIds
                 ?? throw new global::System.ArgumentNullException(nameof(entityIds));
            _version = version;
        }

        public global::System.String? Foo { get; }

        public global::System.Collections.Generic.IReadOnlyCollection<global::StrawberryShake.EntityId> EntityIds => _entityIds;

        public ulong Version => _version;

        public global::StrawberryShake.IOperationResultDataInfo WithVersion(ulong version)
        {
            return new TestInfo(
                Foo,
                _entityIds,
                _version
            );
        }
    }
}


// Test

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class Test
        : ITest
    {
        public Test(global::System.String? foo)
        {
            Foo = foo;
        }

        public global::System.String? Foo { get; }
    }
}


// ITest

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public interface ITest
    {
        public global::System.String? Foo { get; }
    }
}


// BarInputValueFormatter

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class BarInputValueFormatter
        : global::StrawberryShake.Serialization.IInputValueFormatter
    {
        private readonly global::StrawberryShake.Serialization.StringSerializer _stringSerializer;
        private readonly BarInputValueFormatter _barInputValueFormatter;

        public BarInputValueFormatter(global::StrawberryShake.Serialization.StringSerializer stringSerializer)
        {
            _stringSerializer = stringSerializer;
            _barInputValueFormatter = this;
        }

        public global::System.String TypeName => "Bar";

        public global::System.Object? Format(global::System.Object? runtimeValue)
        {

            if(!(runtimeValue is Bar d)) {
                throw new global::System.ArgumentException(nameof(runtimeValue));
            }

            return new global::System.Collections.Generic.KeyValuePair<global::System.String, global::System.Object?>[] {
                new global::System.Collections.Generic.KeyValuePair<global::System.String, global::System.Object?>(
                    "str", FormatStr(d.Str)),
                new global::System.Collections.Generic.KeyValuePair<global::System.String, global::System.Object?>(
                    "strNonNullable", FormatStrNonNullable(d.StrNonNullable)),
                new global::System.Collections.Generic.KeyValuePair<global::System.String, global::System.Object?>(
                    "nested", FormatNested(d.Nested)),
                new global::System.Collections.Generic.KeyValuePair<global::System.String, global::System.Object?>(
                    "nestedList", FormatNestedList(d.NestedList)),
                new global::System.Collections.Generic.KeyValuePair<global::System.String, global::System.Object?>(
                    "nestedMatrix", FormatNestedMatrix(d.NestedMatrix))};
        }

        private global::System.Object? FormatStr(global::System.String? value)
        {
            return _stringSerializer.Format(value);
        }

        private global::System.Object? FormatStrNonNullable(global::System.String value)
        {
            return _stringSerializer.Format(value);
        }

        private global::System.Object? FormatNested(Bar? value)
        {
            return _barInputValueFormatter.Format(value);
        }

        private global::System.Object? FormatNestedList(global::System.Collections.Generic.IReadOnlyList<Bar> value)
        {
            var value_list = new global::System.Collections.Generic.List<global::System.Object?>();

            foreach (var value_elm in value)
            {
                value_list.Add(_barInputValueFormatter.Format(value_elm));
            }
            return value_list;
        }

        private global::System.Object? FormatNestedMatrix(global::System.Collections.Generic.IReadOnlyList<global::System.Collections.Generic.IReadOnlyList<Bar?>?>? value)
        {
            var value_list = new global::System.Collections.Generic.List<global::System.Object?>();

            foreach (var value_elm in value)
            {
                var value_elm_list = new global::System.Collections.Generic.List<global::System.Object?>();

                foreach (var value_elm_elm in value_elm)
                {
                    value_elm_list.Add(_barInputValueFormatter.Format(value_elm_elm));
                }
                value_list.Add(value_elm_list);
            }
            return value_list;
        }
    }
}


// Bar

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class Bar
    {
        public global::System.String? Str { get; set; }

        public global::System.String StrNonNullable { get; set; }

        public Bar? Nested { get; set; }

        public global::System.Collections.Generic.IReadOnlyList<Bar> NestedList { get; set; }

        public global::System.Collections.Generic.IReadOnlyList<global::System.Collections.Generic.IReadOnlyList<Bar?>?>? NestedMatrix { get; set; }
    }
}


// TestQueryDocument

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class TestQueryDocument
        : global::StrawberryShake.IDocument
    {
        private const global::System.String _bodyString =
            @"query test($single: Bar!, $list: [Bar!]!, $nestedList: [[Bar!]]) {
  foo(single: $single, list: $list, nestedList: $nestedList)
}";
        private static readonly byte[] _body = global::System.Text.Encoding.UTF8.GetBytes(_bodyString);

        private TestQueryDocument()
        {
        }

        public static TestQueryDocument Instance { get; } = new TestQueryDocument();

        public global::StrawberryShake.OperationKind Kind => global::StrawberryShake.OperationKind.Query;

        public global::System.ReadOnlySpan<byte> Body => _body;

        public override string ToString()
        {
            return _bodyString;
        }
    }
}


// TestQuery

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class TestQuery
    {
        private readonly global::StrawberryShake.IOperationExecutor<ITest> _operationExecutor;
        private readonly BarInputValueFormatter _barInputValueFormatter;

        public TestQuery(
            global::StrawberryShake.IOperationExecutor<ITest> operationExecutor,
            BarInputValueFormatter barInputValueFormatter)
        {
            _operationExecutor = operationExecutor
                 ?? throw new global::System.ArgumentNullException(nameof(operationExecutor));
            _barInputValueFormatter = barInputValueFormatter;
        }

        public async global::System.Threading.Tasks.Task<global::StrawberryShake.IOperationResult<ITest>> Execute(
            Bar single,
            global::System.Collections.Generic.IReadOnlyList<Bar> list,
            global::System.Collections.Generic.IReadOnlyList<global::System.Collections.Generic.IReadOnlyList<Bar>?>? nestedList,
            global::System.Threading.CancellationToken cancellationToken = default)
        {
            var request = CreateRequest(
                single,
                list,
                nestedList
            );

            return await _operationExecutor
                .ExecuteAsync(
                    request,
                    cancellationToken
                )
                .ConfigureAwait(false);
        }

        public global::System.IObservable<global::StrawberryShake.IOperationResult<ITest>> Watch(
            Bar single,
            global::System.Collections.Generic.IReadOnlyList<Bar> list,
            global::System.Collections.Generic.IReadOnlyList<global::System.Collections.Generic.IReadOnlyList<Bar>?>? nestedList,
            global::StrawberryShake.ExecutionStrategy? strategy = null)
        {
            var request = CreateRequest(
                single,
                list,
                nestedList
            );
            return _operationExecutor.Watch(request, strategy);
        }

        private global::StrawberryShake.OperationRequest CreateRequest(
            Bar single,
            global::System.Collections.Generic.IReadOnlyList<Bar> list,
            global::System.Collections.Generic.IReadOnlyList<global::System.Collections.Generic.IReadOnlyList<Bar>?>? nestedList)
        {
            var arguments = new global::System.Collections.Generic.Dictionary<global::System.String, global::System.Object?>();
            arguments.Add("single", FormatSingle(single));
            arguments.Add("list", FormatList(list));
            arguments.Add("nestedList", FormatNestedList(nestedList));

            return new global::StrawberryShake.OperationRequest(
                "ITest",
                TestQueryDocument.Instance,
                arguments
            );
        }

        private global::System.Object? FormatSingle(Bar value)
        {
            return _barInputValueFormatter.Format(value);
        }

        private global::System.Object? FormatList(global::System.Collections.Generic.IReadOnlyList<Bar> value)
        {
            var value_list = new global::System.Collections.Generic.List<global::System.Object?>();

            foreach (var value_elm in value)
            {
                value_list.Add(_barInputValueFormatter.Format(value_elm));
            }
            return value_list;
        }

        private global::System.Object? FormatNestedList(global::System.Collections.Generic.IReadOnlyList<global::System.Collections.Generic.IReadOnlyList<Bar>?>? value)
        {
            var value_list = new global::System.Collections.Generic.List<global::System.Object?>();

            foreach (var value_elm in value)
            {
                var value_elm_list = new global::System.Collections.Generic.List<global::System.Object?>();

                foreach (var value_elm_elm in value_elm)
                {
                    value_elm_list.Add(_barInputValueFormatter.Format(value_elm_elm));
                }
                value_list.Add(value_elm_list);
            }
            return value_list;
        }
    }
}


// TestBuilder

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class TestBuilder
        : global::StrawberryShake.IOperationResultBuilder<global::System.Text.Json.JsonDocument, ITest>
    {
        private readonly global::StrawberryShake.IEntityStore _entityStore;
        private readonly global::System.Func<global::System.Text.Json.JsonElement, global::StrawberryShake.EntityId> _extractId;
        private readonly global::StrawberryShake.IOperationResultDataFactory<ITest> _resultDataFactory;
        private global::StrawberryShake.Serialization.ILeafValueParser<global::System.String, global::System.String> _stringParser;

        public TestBuilder(
            global::StrawberryShake.IEntityStore entityStore,
            global::System.Func<global::System.Text.Json.JsonElement, global::StrawberryShake.EntityId> extractId,
            global::StrawberryShake.IOperationResultDataFactory<ITest> resultDataFactory,
            global::StrawberryShake.Serialization.ISerializerResolver serializerResolver)
        {
            _entityStore = entityStore
                 ?? throw new global::System.ArgumentNullException(nameof(entityStore));
            _extractId = extractId
                 ?? throw new global::System.ArgumentNullException(nameof(extractId));
            _resultDataFactory = resultDataFactory
                 ?? throw new global::System.ArgumentNullException(nameof(resultDataFactory));
            _stringParser = serializerResolver.GetLeafValueParser<global::System.String, global::System.String>("String")
                 ?? throw new global::System.ArgumentNullException(nameof(_stringParser));
        }

        public global::StrawberryShake.IOperationResult<ITest> Build(global::StrawberryShake.Response<global::System.Text.Json.JsonDocument> response)
        {
            (ITest Result, TestInfo Info)? data = null;

            if (response.Body is not null
                && response.Body.RootElement.TryGetProperty("data", out global::System.Text.Json.JsonElement obj))
            {
                data = BuildData(obj);
            }

            return new global::StrawberryShake.OperationResult<ITest>(
                data?.Result,
                data?.Info,
                _resultDataFactory,
                null
            );
        }

        private (ITest, TestInfo) BuildData(global::System.Text.Json.JsonElement obj)
        {
            using global::StrawberryShake.IEntityUpdateSession session = _entityStore.BeginUpdate();
            var entityIds = new global::System.Collections.Generic.HashSet<global::StrawberryShake.EntityId>();


            var resultInfo = new TestInfo(
                DeserializeString(global::StrawberryShake.Transport.Http.JsonElementExtensions.GetPropertyOrNull(obj, "foo")),
                entityIds,
                session.Version
            );

            return (_resultDataFactory.Create(resultInfo), resultInfo);
        }

        private global::System.String? DeserializeString(global::System.Text.Json.JsonElement? obj)
        {
            if (!obj.HasValue)
            {
                return null;
            }

            return _stringParser.Parse(obj.Value.GetString()!);
        }
    }
}


// FooClient

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public partial class FooClient
    {
        private readonly TestQuery _testQuery;

        public FooClient(TestQuery testQuery)
        {
            _testQuery = testQuery
                 ?? throw new global::System.ArgumentNullException(nameof(testQuery));
        }

        public TestQuery TestQuery => _testQuery;
    }
}


// EntityIdFactory

namespace Foo
{
    [global::System.CodeDom.Compiler.GeneratedCode("StrawberryShake", "11.0.0")]
    public static partial class EntityIdFactory
    {
        public static global::StrawberryShake.EntityId CreateEntityId(global::System.Text.Json.JsonElement obj)
        {
            global::System.String typeName = obj.GetProperty("__typename").GetString()!;

            return typeName switch
            {
                _ => throw new global::System.NotSupportedException()
            };
        }
    }
}
