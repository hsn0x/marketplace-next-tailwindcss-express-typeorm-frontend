import { useDispatch } from "react-redux";
import { axiosServer } from "../db/axios";
import { getTokenCookie } from "../lib/auth-cookie";
import { withSessionSsr } from "../lib/withSession";

export const requireAuthentication = (gssp) => {
    return async (context) => {
        const { req, res } = context;
        const authToken = getTokenCookie(req);

        return await gssp(context); // Continue on to call `getServerSideProps` logic
    };
};
