import { Tabs } from "flowbite-react";
import React from "react";
import ProductPageTabsComments from "./ProductPageTabsComments";
import ProductPageTabsReviews from "./ProductPageTabsReviews";

const ProductPageTabs = ({ reviews, comments }) => {
    return (
        <div>
            <Tabs.Group aria-label="Pills" style="pills">
                <Tabs.Item title="Comments">
                    <ProductPageTabsComments comments={comments} />
                </Tabs.Item>
                <Tabs.Item title="Reviews">
                    <ProductPageTabsReviews reviews={reviews} />
                </Tabs.Item>
            </Tabs.Group>
        </div>
    );
};

export default ProductPageTabs;
