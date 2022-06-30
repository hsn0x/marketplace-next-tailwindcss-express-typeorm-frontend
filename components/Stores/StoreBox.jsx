import { Card, Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const StoreBox = ({ market }) => {
    return (
        <Card style={{ height: "100%" }}>
            <div className="text-2xl font-bold underline cursor-pointer">
                <Link href={`/stores/name/${market.slug}`}>
                    <h2 className="">{market.title}</h2>
                </Link>
            </div>
            <div className="h-56">
                <Carousel className="h-screen">
                    {market.images.map((image) => (
                        <img src={image.url} alt="" key={image.public_id} />
                    ))}
                </Carousel>
            </div>
            <div>
                <h2>
                    <span className="text-xl">{market.name}</span>{" "}
                    <span className="font-bold text-sm">
                        @{market.username}
                    </span>
                </h2>
            </div>
            <p>{market.description}</p>
            <h5>{market.price}</h5>
        </Card>
    );
};

export default StoreBox;
