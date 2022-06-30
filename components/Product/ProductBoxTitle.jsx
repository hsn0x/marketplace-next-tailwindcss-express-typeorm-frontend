import Link from "next/link";
import React from "react";

const ProductBoxTitle = ({ slug, title }) => {
    return (
        <div className="text-2xl font-bold underline cursor-pointer">
            <Link href={`/products/title/${slug}`}>
                <h2 className="">{title}</h2>
            </Link>
        </div>
    );
};

export default ProductBoxTitle;
