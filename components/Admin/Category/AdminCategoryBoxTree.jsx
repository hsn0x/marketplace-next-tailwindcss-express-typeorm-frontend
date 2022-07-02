import Link from "next/link";
import React from "react";
import { Button } from "flowbite-react";
import { FaTrash, FaPen } from "react-icons/fa";
// import { AiFillDelete,AiFillEdit } from "@react-icons/all-files/fa/FaBeer";

const AdminCategoryBoxTree = ({ category }) => {
    return (
        <span className="">
            <div className="flex items-center hover:bg-gray-300 bg-gray-200 rounded-lg gap-2 mr-2">
                <Link href={`/admin/categories/name/${category.slug}`}>
                    <span className="text-lg font-bold cursor-pointer rounded-lg hover:bg-gray-400 p-2">
                        {category.name}
                    </span>
                </Link>

                <span className="flex mr-3 gap-1">
                    <Button size="xs" color="info">
                        <FaPen />
                    </Button>
                    <span className=" ">
                        <Button size="xs" color="failure">
                            <FaTrash />
                        </Button>
                    </span>
                </span>
            </div>
        </span>
    );
};

export default AdminCategoryBoxTree;
