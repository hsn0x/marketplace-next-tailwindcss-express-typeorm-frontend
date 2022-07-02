import React from "react";
import CategoryBox from "../../../../components/Category/CategoryBox";

const CategoryPage = ({ params }) => {
    const { slug } = params;

    return (
        <div>
            <CategoryBox name={slug} />
        </div>
    );
};

export async function getServerSideProps({ params }) {
    return {
        props: { params },
    };
}

export default CategoryPage;
