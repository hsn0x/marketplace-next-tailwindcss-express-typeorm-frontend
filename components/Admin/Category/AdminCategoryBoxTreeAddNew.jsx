import Link from "next/link";
import React, { useState } from "react";
import { Button, TextInput } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import AdminCategoryBoxTreeAddNewModal from "./AdminCategoryBoxTreeAddNewModal";
import { axiosServer } from "../../../db/axios";
// import { AiFillDelete,AiFillEdit } from "@react-icons/all-files/fa/FaBeer";

const AdminCategoryBoxTreeAddNew = () => {
    const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
    const [newCategoryInput, setNewCategoryInput] = useState(false);
    function handleNewCategory() {
        setShowNewCategoryInput(true);
    }
    function handleCancelNewCategory() {}
    function handleSaveNewCategory() {
        setShowNewCategoryInput(false);
        try {
            axiosServer.post("/categories", newCategoryInput);
        } catch (error) {}
    }
    return (
        <div className="flex">
            <div className="mr-2">
                {showNewCategoryInput && (
                    <TextInput
                        id="newCategory"
                        type="text"
                        placeholder="Category Name"
                        required={true}
                        onChange={(e) => setNewCategoryInput(e.target.value)}
                    />
                )}
            </div>
            <div className="mr-2">
                {!showNewCategoryInput && (
                    <>
                        {" "}
                        <Button
                            color="info"
                            onClick={() => handleNewCategory()}
                        >
                            Add new Category
                            <FaPlus />
                        </Button>
                    </>
                )}
            </div>
            <div className="mr-2 flex gap-1">
                {showNewCategoryInput && (
                    <>
                        <Button
                            color="info"
                            onClick={() => handleCancelNewCategory()}
                        >
                            Save
                            <FaPlus />
                        </Button>
                        <Button
                            color="info"
                            onClick={() => handleSaveNewCategory()}
                        >
                            Cancel
                            <FaPlus />
                        </Button>
                    </>
                )}
            </div>

            {/* <AdminCategoryBoxTreeAddNewModal /> */}
        </div>
    );
};

export default AdminCategoryBoxTreeAddNew;
