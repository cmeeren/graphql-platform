﻿using System.Threading.Tasks;
using HotChocolate.Subscriptions;
using HotChocolate.StarWars.Data;
using HotChocolate.StarWars.Models;

namespace HotChocolate.StarWars
{
    public class Mutation
    {
        /// <summary>
        /// Creates a review for a given Star Wars episode.
        /// </summary>
        /// <param name="episode">The episode to review.</param>
        /// <param name="review">The review.</param>
        /// <param name="repository">The review repository.</param>
        /// <param name="eventSender">The event sending service.</param>
        /// <returns>The created review.</returns>
        public async Task<Review> CreateReview(
            Episode episode,
            Review review,
            [Service]ReviewRepository repository,
            [Service]ITopicEventSender eventSender)
        {
            repository.AddReview(episode, review);
            await eventSender.SendAsync(episode, review);
            return review;
        }

        /// <summary>
        /// Creates a review for a given Star Wars episode.
        /// </summary>
        public async Task<CreateReviewPayload> CreateReview2(
            CreateReviewInput input,
            [Service]ReviewRepository repository,
            [Service]ITopicEventSender eventSender)
        {
            repository.AddReview(input.Episode, input.Review);
            await eventSender.SendAsync(input.Episode, input.Review);
            return new CreateReviewPayload { Review = input.Review};
        }
    }

    public class CreateReviewInput
    {
        public Episode Episode { get; set; }

        public Review Review { get; set; }
    }

    public class CreateReviewPayload
    {
        public Review Review { get; set; }
    }
}
