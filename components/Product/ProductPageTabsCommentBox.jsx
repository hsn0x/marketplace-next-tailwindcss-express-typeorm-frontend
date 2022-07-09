import { Card } from "flowbite-react";
import React from "react";
import ProductPageTabsBy from "./ProductPageTabsBy";

const ProductPageTabsCommentBox = ({ comment }) => {
    return (
        <Card>
            <div className="text-xl font-bold underline">{comment.title}</div>
            <div>{comment.content}</div>
            <ProductPageTabsBy user={comment.User} />
        </Card>
    );
};

export default ProductPageTabsCommentBox;
