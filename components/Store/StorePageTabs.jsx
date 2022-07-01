import { Card, Tabs } from "flowbite-react";
import React from "react";
import ProductsBox from "../Products/ProductsBox";

const StorePageTabs = ({ Products, about }) => {
    return (
        <div>
            <Card>
                <Tabs.Group aria-label="Pills" style="pills">
                    <Tabs.Item active={true} title="Products">
                        <ProductsBox products={Products} />
                    </Tabs.Item>
                    <Tabs.Item title="About">
                        <div className="mb-6">
                            <p className="text-lg font-bold text-gray-500">
                                {about}
                            </p>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Reviews">Reviews</Tabs.Item>
                </Tabs.Group>
            </Card>
        </div>
    );
};

export default StorePageTabs;
