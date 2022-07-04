import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsMyPageContent from "../../components/Products/My/ProductsMyPageContent";
import ProductsMyContent from "../../components/Products/My/ProductsMyPageContent";
import ProductsMyPageTitle from "../../components/Products/My/ProductsMyPageTitle";
import ProductsBox from "../../components/Products/ProductsBox";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { updateAuth, updateIsAuthenticated } from "../../redux/actions/auth";
import { fetchProfile } from "../../redux/reducers/auth";

const ProductsMyPage = ({ authUser }) => {
    const { profile } = useSelector(({ auth }) => auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateAuth(authUser));
        dispatch(updateIsAuthenticated(!!authUser));
        // dispatch(fetchProfile());
    }, []);
    return (
        <div>
            <ProductsMyPageTitle title="My Products" />
            {profile && <ProductsMyPageContent products={profile.Products} />}
        </div>
    );
};

export const getServerSideProps = requireAuthentication((context) => {
    return {};
});

export default ProductsMyPage;
