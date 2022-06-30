import { Avatar, Card, Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StoreBoxDescription from "./StoreBoxDescription";
import StoreBoxImages from "./StoreBoxImages";
import StoreBoxIntro from "./StoreBoxIntro";
import StoreBoxTitle from "./StoreBoxTitle";

const StoreBox = ({ market }) => {
    return (
        <div className="hover:scale-105 transition duration-300">
            <Card style={{ height: "100%" }}>
                <div className="h-full flex flex-col gap-3">
                    <StoreBoxTitle
                        className="mb-10"
                        title={market.title}
                        slug={market.slug}
                    />
                    <StoreBoxImages images={market.images} />
                    <StoreBoxIntro
                        avatars={market.avatars}
                        name={market.name}
                        username={market.username}
                        slug={market.slug}
                    />
                    <StoreBoxDescription description={market.description} />
                </div>
            </Card>
        </div>
    );
};

export default StoreBox;
