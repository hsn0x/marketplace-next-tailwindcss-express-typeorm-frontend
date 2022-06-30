import { Card, Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";
import ProductBoxDescription from "./ProductBoxDescription";
import ProductBoxImages from "./ProductBoxImages";
import ProductBoxPrice from "./ProductBoxPrice";
import ProductBoxTitle from "./ProductBoxTitle";

const ProductBox = ({ product }) => {
    return (
        <div className="hover:scale-105 transition duration-300">
            <Card style={{ height: "100%" }}>
                <div className="h-full flex flex-col gap-3">
                    <ProductBoxTitle
                        slug={product.slug}
                        title={product.title}
                    />
                    <ProductBoxImages images={product.images} />
                    <ProductBoxDescription description={product.description} />
                    <ProductBoxPrice price={product.price} />
                </div>
            </Card>
        </div>
    );
};

export default ProductBox;
