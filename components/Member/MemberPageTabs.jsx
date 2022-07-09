import { Card, Tabs } from "flowbite-react";
import React from "react";
import MembersBox from "../Members/MembersBox";
import ProductBox from "../Product/ProductBox";
import ProductsBox from "../Products/ProductsBox";
import StoreBox from "../Store/StoreBox";
import StoresBox from "../Stores/StoresBox";
import MemberPageTabsAbout from "./MemberPageTabsAbout";
import MemberPageTabsComments from "./MemberPageTabsComments";
import MemberPageTabsReviews from "./MemberPageTabsReviews";

const MemberPageTabs = ({ markets, products, about, comments, reviews }) => {
    return (
        <Card>
            <Tabs.Group aria-label="Pills" style="pills">
                <Tabs.Item active={true} title="Products">
                    <ProductsBox products={products} />
                </Tabs.Item>
                <Tabs.Item active={true} title="Stores">
                    <StoresBox markets={markets} />
                </Tabs.Item>
                <Tabs.Item title="About">
                    <MemberPageTabsAbout about={about} />
                </Tabs.Item>
                <Tabs.Item title="Comments">
                    <MemberPageTabsComments comments={comments} />
                </Tabs.Item>
                <Tabs.Item title="Reviews">
                    <MemberPageTabsReviews reviews={reviews} />
                </Tabs.Item>
            </Tabs.Group>
        </Card>
    );
};

export default MemberPageTabs;
