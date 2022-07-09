import { Tabs } from "flowbite-react";
import React from "react";
import ProductPageTabsCommentsBox from "../Product/ProductPageTabsCommentsBox";
import ProductPageTabsReviewsBox from "../Product/ProductPageTabsReviewsBox";

const MemberPageTabsComments = ({ comments }) => {
    return (
        <div>
            <Tabs.Group aria-label="Pills" style="pills">
                <Tabs.Item title="Member Comments">Member Comments</Tabs.Item>
                <Tabs.Item title="Product Comments">
                    <ProductPageTabsCommentsBox comments={comments} />
                </Tabs.Item>
                <Tabs.Item title="Store Comments">Store Comments</Tabs.Item>
            </Tabs.Group>
        </div>
    );
};

export default MemberPageTabsComments;
