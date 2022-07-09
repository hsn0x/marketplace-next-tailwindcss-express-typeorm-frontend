import { Card } from "flowbite-react";
import React from "react";
import ProductPageTabsBy from "./ProductPageTabsBy";

const ProductPageTabsComments = ({ comments }) => {
    return (
        <div className="flex flex-col gap-1">
            {comments &&
                comments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <Card>
                                <div className="text-xl font-bold">
                                    {comment.title}
                                </div>
                                <div>{comment.content}</div>
                                <ProductPageTabsBy user={comment.User} />
                            </Card>
                        </div>
                    );
                })}
        </div>
    );
};

export default ProductPageTabsComments;
