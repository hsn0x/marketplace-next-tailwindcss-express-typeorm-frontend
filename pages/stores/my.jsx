import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoresMyPageContent from "../../components/Stores/My/ProductsMyPageContent";
import StoresMyPageTitle from "../../components/Stores/My/ProductsMyPageTitle";
import StoresBox from "../../components/Stores/StoresBox";
import StoresPagination from "../../components/Stores/StoresPagination";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { updateAuth, updateIsAuthenticated } from "../../redux/actions/auth";
import { fetchProfile } from "../../redux/reducers/auth";

const StoresMyPage = ({ authUser }) => {
    const auth = useSelector(({ auth }) => auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateAuth(authUser));
        dispatch(updateIsAuthenticated(!!authUser));
        dispatch(fetchProfile());
    }, []);
    return (
        <div>
            <StoresMyPageTitle title="My Stores" />
            <div>
                {/* <StoresPagination
                    totalItems={markets.totalItems}
                    totalPages={markets.totalPages}
                    currentPage={markets.currentPage}
                /> */}
            </div>
            {auth.profile && (
                <StoresMyPageContent markets={auth.profile.Markets} />
            )}
            <div>
                {/* <StoresPagination
                    totalItems={markets.totalItems}
                    totalPages={markets.totalPages}
                    currentPage={markets.currentPage}
                /> */}
            </div>
        </div>
    );
};

export const getServerSideProps = requireAuthentication((context) => {
    return {};
});

export default StoresMyPage;
