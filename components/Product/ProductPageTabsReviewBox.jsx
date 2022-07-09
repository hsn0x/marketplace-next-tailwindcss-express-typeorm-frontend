import { Card } from "flowbite-react";
import React from "react";
import ProductPageTabsBy from "./ProductPageTabsBy";
import ProductPageTabsReviewsRating from "./ProductPageTabsReviewsRating";

const ProductPageTabsReviewBox = ({ review }) => {
    return (
        <Card>
            <ProductPageTabsReviewsRating rate={review.rate} />
            <div className="text-xl font-bold underline">{review.title}</div>
            <div>{review.content}</div>
            <ProductPageTabsBy user={review.User} />
        </Card>
    );
};

export default ProductPageTabsReviewBox;
