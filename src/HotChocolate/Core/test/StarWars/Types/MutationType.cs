﻿using HotChocolate.Types;

namespace HotChocolate.StarWars.Types
{
    public class MutationType : ObjectType<Mutation>
    {
        protected override void Configure(IObjectTypeDescriptor<Mutation> descriptor)
        {
            descriptor
                .Field(t => t.CreateReview(default, default, default, default))
                .Type<NonNullType<ReviewType>>()
                .Argument("episode", a => a.Type<NonNullType<EpisodeType>>())
                .Argument("review", a => a.Type<NonNullType<ReviewInputType>>());

            descriptor
                .Field(t => t.CreateReview2(default, default, default))
                .Type<NonNullType<ObjectType<CreateReviewPayload>>>()
                .Argument("input", a => a.Type<NonNullType<ObjectType<CreateReviewInput>>>());
        }
    }
}
