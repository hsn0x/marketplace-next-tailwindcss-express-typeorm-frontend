import { Card, Tabs } from "flowbite-react";
import React from "react";
import MembersBox from "../Members/MembersBox";
import ProductBox from "../Product/ProductBox";
import ProductsBox from "../Products/ProductsBox";
import StoreBox from "../Store/StoreBox";
import StoresBox from "../Stores/StoresBox";

const MemberPageTabs = ({ markets, products, about }) => {
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
                    <div className="mb-6">
                        <p className="text-lg font-bold text-gray-500">
                            {about}
                        </p>
                    </div>
                </Tabs.Item>
            </Tabs.Group>
        </Card>
    );
};

export default MemberPageTabs;
