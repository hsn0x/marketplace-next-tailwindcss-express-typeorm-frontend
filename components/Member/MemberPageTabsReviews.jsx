import { Tabs } from "flowbite-react";
import React from "react";
import ProductPageTabsReviewsBox from "../Product/ProductPageTabsReviewsBox";

const MemberPageTabsReviews = ({ reviews }) => {
    return (
        <div>
            <Tabs.Group aria-label="Pills" style="pills">
                <Tabs.Item title="Member Reviews"></Tabs.Item>
                <Tabs.Item title="Product Reviews">
                    <ProductPageTabsReviewsBox reviews={reviews} />
                </Tabs.Item>
                <Tabs.Item title="Store Reviews"></Tabs.Item>
            </Tabs.Group>
        </div>
    );
};

export default MemberPageTabsReviews;
