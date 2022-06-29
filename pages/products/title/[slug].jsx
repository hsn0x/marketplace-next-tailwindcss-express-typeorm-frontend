import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { axiosServer } from "../../../db/axios";
import { productActions } from "../../../redux/actions";
import { getError } from "../../../utils/error";

const ProductPage = ({ params }) => {
    const { slug } = params;

    const dispatch = useDispatch();

    const { productFetchFail, productFetchRequest, productFetchSuccess } =
        bindActionCreators(productActions, dispatch);

    useEffect(() => {
        const fetchProduct = async () => {
            productFetchRequest();
            try {
                const { data } = await axiosServer.get(
                    `/products/title/${slug}`
                );
                console.log({ data });
                productFetchSuccess(data.product);
            } catch (error) {
                productFetchFail(getError(error));
                console.log(error);
            }
        };
        fetchProduct();
    }, []);

    return <div>ProductPage</div>;
};

export async function getServerSideProps({ params }) {
    return {
        props: { params },
    };
}

export default ProductPage;
