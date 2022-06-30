import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import StoreCreate from "../../components/Store/StoreCreate";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { updateAuth } from "../../redux/actions/auth";

const CreateMarket = ({ authUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateAuth(authUser));
    }, [authUser, dispatch]);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="my-20">
                <StoreCreate />
            </div>
        </div>
    );
};

export const getServerSideProps = requireAuthentication((context) => {
    return {};
});

export default CreateMarket;
