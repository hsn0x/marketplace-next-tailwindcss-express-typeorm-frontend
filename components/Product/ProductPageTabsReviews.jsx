import React from "react";
import ProductPageTabsReviewsBox from "./ProductPageTabsReviewsBox";
import ProductPageTabsReviewsInsert from "./ProductPageTabsReviewsInsert";

const ProductPageTabsReviews = ({ reviews }) => {
    return (
        <div>
            <div>
                <ProductPageTabsReviewsInsert />
            </div>
            <div>
                <ProductPageTabsReviewsBox reviews={reviews} />
            </div>
        </div>
    );
};

export default ProductPageTabsReviews;
