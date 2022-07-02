import { Card } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";

const CategoriesBox2 = ({ categories }) => {
    // const [categoriesTree, setCategoriesTree] = useState([]);
    // const [categoriesTreeNames, setCategoriesTreeNames] = useState([]);

    function handleCategoriesTree(categories) {
        const root = categories.filter((obj) => obj.parentId === 0);
        const addSubToRoot = root.map((r) => ({ ...r, sub: [] }));
        const categoriesWithSubCategories = addSubToRoot.map((r) => ({
            ...r,
            sub: [...r.sub, ...categories.filter((a) => a.parentId === r.id)],
        }));
        const addSubSubToSubRoot = categoriesWithSubCategories.map((r) => ({
            ...r,
            sub: r.sub.map((s) => ({ ...s, subSub: [] })),
        }));
        const categoriesWithSubSubCategories = addSubSubToSubRoot.map((r) => ({
            ...r,
            sub: r.sub.map((s) => ({
                ...s,
                subSub: categories.filter((a) => a.parentId === s.id),
            })),
        }));

        /* const categoriesWithSubSubCategories = categoriesWithSubCategories.map(r => (categories.)) */

        return categoriesWithSubSubCategories;
    }

    function handleCategoriesTreeName(categoriesTree) {
        return categoriesTree.map((r) => ({
            ...r,
            name: r.name,
            sub: r.sub.map((s) => ({
                ...s,
                name: r.name + " -> " + s.name,
                subSub: s.subSub.map((ss) => ({
                    ...ss,
                    name: r.name + " -> " + s.name + " -> " + ss.name,
                })),
            })),
        }));
    }

    function handlePrintCategoriesTreeName(categoriesTreeNames) {
        categoriesTreeNames.map((r) => {
            console.log(r.name);
            r.sub.map((s) => {
                console.log("  " + s.name);
                s.subSub.map((ss) => {
                    console.log("    " + ss.name);
                });
            });
        });
    }

    function PrintCategoriesTreeName({ categoriesTreeNames }) {
        return (
            <div className="grid gap-4">
                {categoriesTreeNames.map((r) => (
                    <div key={r.id} className="grid gap-4">
                        <div className="">
                            <span className="bg-gray-200 rounded-lg p-2">
                                {r.id} {r.name}
                            </span>
                        </div>
                        {r.sub.map((s) => (
                            <div key={s.id} className="grid gap-4">
                                <div>
                                    <span className="bg-gray-200 rounded-lg p-2">
                                        {s.id} {s.name}
                                    </span>
                                </div>
                                {s.subSub.map((ss) => (
                                    <div key={ss.id} className="grid gap-4">
                                        <div>
                                            <span className="bg-gray-200 rounded-lg p-2">
                                                {" "}
                                                {ss.id} {ss.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    function CategoriesTreeName({ categoriesTree }) {
        return (
            <div className="grid gap-4">
                {categoriesTree.map((r) => (
                    <div key={r.id} className="grid gap-4">
                        <div className="">
                            <span className="bg-gray-200 rounded-lg p-2">
                                {r.id} {r.name}
                            </span>
                        </div>
                        {r.sub.map((s) => (
                            <div key={s.id} className="grid gap-4">
                                <div>
                                    <span className="bg-gray-200 rounded-lg p-2">
                                        {r.id} {r.name}
                                    </span>
                                    {" -> "}
                                    <span className="bg-gray-200 rounded-lg p-2">
                                        {s.id} {s.name}
                                    </span>
                                </div>
                                {s.subSub.map((ss) => (
                                    <div key={ss.id} className="grid gap-4">
                                        <div>
                                            <span className="bg-gray-200 rounded-lg p-2">
                                                {r.id} {r.name}
                                            </span>
                                            {" -> "}
                                            <span className="bg-gray-200 rounded-lg p-2">
                                                {s.id} {s.name}
                                            </span>
                                            {" -> "}
                                            <span className="bg-gray-200 rounded-lg p-2">
                                                {ss.id} {ss.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    const categoriesTree = handleCategoriesTree(categories);

    const categoriesTreeNames = handleCategoriesTreeName(categoriesTree);

    useEffect(() => {}, []);

    return (
        <div className="">
            {/* {
                <PrintCategoriesTreeName
                    categoriesTreeNames={categoriesTreeNames}
                />
            } */}

            <Card>
                {<CategoriesTreeName categoriesTree={categoriesTree} />}
            </Card>
        </div>
    );
};

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}

export default CategoriesBox2;
