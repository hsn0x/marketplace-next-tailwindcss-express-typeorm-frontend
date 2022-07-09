import { Card, Rating } from "flowbite-react";
import React from "react";

const ProductPageTabsReviews = ({ reviews }) => {
    return (
        <div className="flex flex-col gap-1">
            {reviews &&
                reviews.map((review, index) => {
                    return (
                        <div key={index}>
                            <Card>
                                <div className="rating">
                                    <Rating>
                                        {review.rate &&
                                            Array.from({
                                                length: 5,
                                            }).map((rate, index) => {
                                                return (
                                                    <Rating.Star
                                                        filled={
                                                            index < review.rate
                                                                ? true
                                                                : false
                                                        }
                                                        key={index}
                                                    />
                                                );
                                            })}

                                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                            4.95 out of 5
                                        </p>
                                    </Rating>
                                </div>
                                <div className="text-xl font-bold">
                                    {review.title}
                                </div>
                                <div>{review.content}</div>
                            </Card>
                        </div>
                    );
                })}
        </div>
    );
};

export default ProductPageTabsReviews;