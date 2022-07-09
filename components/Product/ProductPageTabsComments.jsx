import { Card } from "flowbite-react";
import React from "react";
import ProductPageTabsBy from "./ProductPageTabsBy";
import ProductPageTabsCommentBox from "./ProductPageTabsCommentBox";
import ProductPageTabsCommentsBox from "./ProductPageTabsCommentsBox";
import ProductPageTabsCommentsInsert from "./ProductPageTabsCommentsInsert";

const ProductPageTabsComments = ({ comments }) => {
    return (
        <div className="flex flex-col gap-1">
            <div>
                <ProductPageTabsCommentsInsert />
            </div>
            <div>
                <ProductPageTabsCommentsBox comments={comments} />
            </div>
        </div>
    );
};

export default ProductPageTabsComments;
