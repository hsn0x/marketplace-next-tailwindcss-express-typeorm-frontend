import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { notRequireAuthentication } from "../HOC/notRequireAuthentication";
import { updateAuth } from "../redux/actions/auth";
import { getUser } from "../redux/reducers/users";

const HomePage = ({ authUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateAuth(authUser));
    }, [authUser, dispatch]);

    return <div>HomePage</div>;
};

export const getServerSideProps = notRequireAuthentication((context) => {
    return {};
});

export default HomePage;
