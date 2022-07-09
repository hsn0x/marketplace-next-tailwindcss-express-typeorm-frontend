import { Rating } from "flowbite-react";
import React from "react";

const ProductPageTabsReviewsRating = ({ rate }) => {
    return (
        <div className="rating">
            <Rating>
                {rate &&
                    Array.from({
                        length: 5,
                    }).map((r, index) => {
                        return (
                            <Rating.Star
                                filled={index < rate ? true : false}
                                key={index}
                            />
                        );
                    })}

                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {rate} out of 5
                </p>
            </Rating>
        </div>
    );
};

export default ProductPageTabsReviewsRating;
