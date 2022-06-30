import { Card, Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const ProductBox = ({ product }) => {
    return (
        <Card style={{ height: "100%" }}>
            <div className="text-2xl font-bold underline cursor-pointer">
                <Link href={`/products/title/${product.slug}`}>
                    <h2 className="">{product.title}</h2>
                </Link>
            </div>
            <div className="h-56">
                {product.images && (
                    <Carousel className="h-screen">
                        {product.images.map((image) => (
                            <img src={image.url} alt="" key={image.public_id} />
                        ))}
                    </Carousel>
                )}
            </div>
            <p>{product.description}</p>
            <h5>{product.price}</h5>
        </Card>
    );
};

export default ProductBox;
