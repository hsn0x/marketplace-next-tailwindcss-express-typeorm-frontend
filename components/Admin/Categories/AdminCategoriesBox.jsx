import { Card } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { handleCategoriesTree } from "../../../lib/handleCategoriesTree";
import AdminCategoryBoxTree from "../Category/AdminCategoryBoxTree";
import AdminCategoriesBoxTreeName from "./AdminCategoriesBoxTreeName";

const CategoriesBox = ({ categories }) => {
    const categoriesTree = handleCategoriesTree(categories);

    useEffect(() => {}, []);

    return (
        <div className="">
            <Card>
                {
                    <AdminCategoriesBoxTreeName
                        oldCategoriesTree={[]}
                        categoriesTree={categoriesTree}
                    />
                }
            </Card>
        </div>
    );
};

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

export default CategoriesBox;
