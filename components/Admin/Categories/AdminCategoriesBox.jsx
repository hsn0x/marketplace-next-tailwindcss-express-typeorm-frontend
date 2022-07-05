import { Card } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { handleCategoriesTree } from "../../../lib/handleCategoriesTree";
import AdminCategoryBoxTree from "../Category/AdminCategoryBoxTree";
import AdminCategoryBoxTreeAddNew from "../Category/AdminCategoryBoxTreeAddNew";
import AdminCategoriesBoxTreeName from "./AdminCategoriesBoxTreeName";

const CategoriesBox = ({ categories, categoryType }) => {
    const categoriesTree = handleCategoriesTree(categories);

    useEffect(() => {}, []);

    return (
        <div className="">
            <Card>
                <>
                    {/* <AdminCategoryBoxTreeAddNew
                        category={{ id: 0 }}
                        categoryType={categoryType}
                    /> */}
                    <AdminCategoriesBoxTreeName
                        oldCategoriesTree={[]}
                        categoriesTree={categoriesTree}
                        categoryType={categoryType}
                    />
                    {/* <AdminCategoryBoxTreeAddNew
                        category={{ id: 0 }}
                        categoryType={categoryType}
                    /> */}
                </>
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
