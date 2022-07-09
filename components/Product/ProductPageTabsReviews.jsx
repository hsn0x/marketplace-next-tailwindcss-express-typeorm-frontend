import React from "react";
import ProductPageTabsReviewsBox from "./ProductPageTabsReviewsBox";

const ProductPageTabsReviews = ({ reviews }) => {
    return (
        <div>
            <ProductPageTabsReviewsBox reviews={reviews} />
        </div>
    );
};

export default ProductPageTabsReviews;
