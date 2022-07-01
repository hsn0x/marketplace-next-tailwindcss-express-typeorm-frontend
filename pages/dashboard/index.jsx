import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requireAuthentication } from "../../HOC/requireAuthentication";
import { updateAuth } from "../../redux/actions/auth";

const DashboarPage = ({ authUser }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateAuth(authUser));
    }, [authUser, dispatch]);
    return <div>Dashboard</div>;
};

// export const getServerSideProps = withSessionSsr(
//     async function getServerSideProps({ req }) {
//         const authUser = req.session.user;
//         console.log("from dashboard", { authUser });

//         if (!authUser) {
//             return {
//                 redirect: {
//                     destination: "/auth/login",
//                     permanent: false,
//                 },
//             };
//         }
//         return {
//             props: {
//                 authUser: authUser ? authUser : null,
//             },
//         };
//     }
// );

export const getServerSideProps = requireAuthentication((context) => {
    return {};
});

export default DashboarPage;
