import { Card, Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";
import StoreBoxIntro from "../Store/StoreBoxIntro";
import ProductBoxDescription from "./ProductBoxDescription";
import ProductBoxImages from "./ProductBoxImages";
import ProductBoxIntro from "./ProductBoxIntro";
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
                    {product.Market && (
                        <StoreBoxIntro
                            avatars={product.Market.avatars}
                            name={product.Market.name}
                            username={product.Market.username}
                            slug={product.Market.slug}
                        />
                    )}
                    <ProductBoxDescription description={product.description} />
                    <ProductBoxPrice price={product.price} />
                </div>
            </Card>
        </div>
    );
};

export default ProductBox;
