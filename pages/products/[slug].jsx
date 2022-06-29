import { useRouter } from "next/router";
import React from "react";

const ProductPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug);

    return <div>ProductPage</div>;
};

export default ProductPage;
