import React, { useEffect } from "react";
import MediasPageTabs from "../../components/Medias/MediasPageTabs";
import MediasPageTitle from "../../components/Medias/MediasPageTitle";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { updateAuth } from "../../redux/actions/auth";
import { axiosServer } from "../../db/axios";
import { fetchProfile, signIn } from "../../redux/reducers/auth";
import { useSelector, useDispatch } from "react-redux";

const MediaPage = ({ authUser }) => {
    const dispatch = useDispatch();

    const profile = useSelector(({ auth }) => auth.profile);

    useEffect(() => {
        dispatch(updateAuth(authUser));
        dispatch(fetchProfile());
    }, [authUser, dispatch]);

    return (
        <div>
            <MediasPageTitle title="Your Medias" />
            <MediasPageTabs />
        </div>
    );
};

export const getServerSideProps = requireAuthentication((context) => {
    return {};
});

export default MediaPage;
