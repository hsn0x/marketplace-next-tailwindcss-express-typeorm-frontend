import Link from "next/link";
import React from "react";

const StoreBoxTitle = ({ slug, title }) => {
    return (
        <div className="text-2xl font-bold underline cursor-pointer">
            <Link href={`/stores/name/${slug}`}>
                <h2 className="">{title}</h2>
            </Link>
        </div>
    );
};

export default StoreBoxTitle;
