import React from "react";
import { requireAuthentication } from "../HOC/requireAuthentication";
import { withIronSessionSsr } from "iron-session/next";
import { withSessionSsr } from "../lib/withSession";
import { useDispatch } from "react-redux";
import { updateAuth } from "../redux/actions/auth";

const DashboarPage = ({ authUser }) => {
    const dispatch = useDispatch();
    if (authUser) {
        dispatch(updateAuth(authUser));
    }
    return <div>Dashboard</div>;
};

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
        const authUser = req.session.user;
        return {
            props: {
                authUser: authUser ? authUser : null,
            },
        };
    }
);

export default DashboarPage;
