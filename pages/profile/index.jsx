import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { updateAuth } from "../../redux/actions/auth";

const ProfilePage = ({ authUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateAuth(authUser));
    }, [authUser, dispatch]);

    return <div>ProfilePage</div>;
};

export const getServerSideProps = requireAuthentication((context) => {
    return {};
});

export default ProfilePage;
