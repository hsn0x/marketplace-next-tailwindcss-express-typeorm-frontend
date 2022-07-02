import React from "react";
import AdminCategoryBoxTree from "../Category/AdminCategoryBoxTree";
import { Card } from "flowbite-react";
import AdminCategoryBoxTreeAddNew from "../Category/AdminCategoryBoxTreeAddNew";

const AdminCategoriesBoxTreeName = ({ oldCategoriesTree, categoriesTree }) => {
    return (
        <div>
            <div className="grid gap-4">
                {categoriesTree.map((r) => (
                    <div key={r.id} className="grid gap-4">
                        <Card>
                            <div className="flex ">
                                {oldCategoriesTree.length > 0 &&
                                    oldCategoriesTree.map((oct) => (
                                        <span key={oct.id}>
                                            <span key={oct.id}>
                                                <AdminCategoryBoxTree
                                                    category={oct}
                                                />
                                            </span>
                                        </span>
                                    ))}

                                <AdminCategoryBoxTree category={r} />
                                <AdminCategoryBoxTreeAddNew />
                            </div>
                            {r.sub?.length > 0 && (
                                <AdminCategoriesBoxTreeName
                                    oldCategoriesTree={[
                                        ...oldCategoriesTree,
                                        r,
                                    ]}
                                    categoriesTree={r.sub}
                                />
                            )}
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminCategoriesBoxTreeName;
