import { configureStore } from "@reduxjs/toolkit";
import reducers from "./state/reducers";

const store = configureStore(
    {
        reducer: reducers,
    },
    {}
);

export { store };
