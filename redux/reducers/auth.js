import axios from "axios";
import { axiosClient, axiosServer } from "../../db/axios";
import { Notify } from "notiflix";
import { updateAuth, updateIsAuthenticated } from "../actions/auth";

const UPDATE_IS_AUTH = "UPDATE_IS_AUTH";
const UPDATE_AUTH = "UPDATE_AUTH";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";
const UPDATE_SIGN_IN = "UPDATE_SIGN_IN";
const UPDATE_SIGN_UP = "UPDATE_SIGN_UP";

const initialState = {
    isAuthenticated: false,
    user: null,
    email: "j@me.com",
    password: "qwe",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_IS_AUTH:
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        case UPDATE_AUTH:
            console.log(action.payload);
            return { ...state, user: action.payload };
        case UPDATE_EMAIL:
            return { ...state, email: action.payload };
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload };
        case UPDATE_SIGN_IN:
            return action.payload;
        case UPDATE_SIGN_UP:
            return action.payload;
        default:
            return state;
    }
};

export const signIn = () => async (dispatch, getState) => {
    const { email, password } = getState().auth;
    const data = { email, password };
    try {
        const { data: signInData } = await axiosServer.post(
            "/auth/login",
            data
        );
        Notify.success(signInData?.message || "Login Successful", {
            position: "right-bottom",
            width: "280px",
            distance: "10px",
            opacity: 1,
            timeout: 2000,
            pauseOnHover: true,
        });
        dispatch({
            type: "UPDATE_IS_AUTH",
            payload: signInData.isAuthenticated,
        });
        const { data: authUserData } = await axiosServer.get("/auth/me");
        const abcd = await axiosClient.post("/auth/signin", authUserData);
        console.log(abcd);
        return signInData;
    } catch (error) {
        Notify.failure(error.response?.data?.message || "Sign in error", {
            position: "center",
            timeout: 6000,
            pauseOnHover: true,
        });
        return null;
    }
};

export const fetchProfile = () => {
    return async (dispatch) => {
        try {
            const { data } = await axiosServer.get("/auth/me");

            dispatch({
                type: "UPDATE_AUTH",
                payload: data.user,
            });
            return data;
        } catch (error) {
            return null;
        }
    };
};

export const signUp = () => async (dispatch, getState) => {
    const { email, password } = getState().auth;
    const data = { email, password };
    try {
        const response = await axiosClient.post("/auth/signup", {
            email,
            password,
        });
        Notify.success("Sign Up Successful", {
            position: "center",
            timeout: 2000,
            pauseOnHover: true,
            keepOnHover: true,
        });
    } catch (error) {
        notifyMessage = error.response?.data?.message || "Sign Out Failed";
        Notify.failure(error.response?.data?.message, {
            position: "center",
            timeout: 6000,
            pauseOnHover: true,
        });
    }
};

export const signOut = (e) => {
    return async (dispatch, getState) => {
        try {
            await axiosServer.get("/auth/logout");
            await axiosClient.get("/auth/signout");
            dispatch(updateAuth(null));
            Notify.success("Logged out", {
                position: "center",
                timeout: 2000,
                pauseOnHover: true,
                keepOnHover: true,
            });
        } catch (error) {
            console.log(error);
            Notify.failure(error.response?.data?.message || "Sign Out Failed", {
                position: "center",
                timeout: 6000,
                pauseOnHover: true,
            });
            return null;
        }
    };
};

export default reducer;
