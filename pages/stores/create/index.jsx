import React, { useEffect } from "react";
import StoreCreatePage from "../../../components/Store/create/StoreCreatePage";
import { useDispatch } from "react-redux";
import { requireAuthentication } from "../../../HOC/requireAuthentication";
import { updateAuth, updateIsAuthenticated } from "../../../redux/actions/auth";

const CreateStorePage = ({ authUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateAuth(authUser));
        dispatch(updateIsAuthenticated(!!authUser));
    }, [authUser, dispatch]);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="my-20">
                <StoreCreatePage />
            </div>
        </div>
    );
};

export const getServerSideProps = requireAuthentication((context) => {
    return {};
});

export default CreateStorePage;
