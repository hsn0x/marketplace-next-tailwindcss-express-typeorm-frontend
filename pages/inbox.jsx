import React from "react";
import { withSessionSsr } from "../lib/withSession";

const InboxPage = ({ user }) => {
    console.log({ inboxpage: user });
    return <div>InboxPage</div>;
};

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
        const user = req.session.user;
        return {
            props: {
                user: user ? user : null,
            },
        };
    }
);

export default InboxPage;
