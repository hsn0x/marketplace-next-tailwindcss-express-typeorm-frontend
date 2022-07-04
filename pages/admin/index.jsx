import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { updateAuth, updateIsAuthenticated } from "../../redux/actions/auth";

const AdminPage = ({ authUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateAuth(authUser));
        dispatch(updateIsAuthenticated(!!authUser));
    }, [authUser, dispatch]);

    return <div>AdminPage</div>;
};

export const getServerSideProps = requireAuthentication((context) => {
    return {};
});

export default AdminPage;
