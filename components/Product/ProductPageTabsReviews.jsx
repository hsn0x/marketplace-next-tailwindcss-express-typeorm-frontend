import { Card, Rating } from "flowbite-react";
import Link from "next/link";
import React from "react";
import ProductPageTabsBy from "./ProductPageTabsBy";
import ProductPageTabsReviewsRating from "./ProductPageTabsReviewsRating";

const ProductPageTabsReviews = ({ reviews }) => {
    return (
        <div className="flex flex-col gap-1">
            {reviews &&
                reviews.map((review, index) => {
                    return (
                        <div key={index}>
                            <Card>
                                <ProductPageTabsReviewsRating
                                    rate={review.rate}
                                />
                                <div className="text-xl font-bold underline">
                                    {review.title}
                                </div>
                                <div>{review.content}</div>
                                <ProductPageTabsBy user={review.User} />
                            </Card>
                        </div>
                    );
                })}
        </div>
    );
};

export default ProductPageTabsReviews;
