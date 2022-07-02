import {
    categoriesFetchFail,
    categoriesFetchSuccess,
} from "../redux/actions/categories";

export const fetchCategories = async () => {
    categoriesFetchRequest();
    try {
        const { data } = await axiosServer.get("/categories");
        categoriesFetchSuccess(data.categories);
    } catch (error) {
        categoriesFetchFail(getError(error));
    }
};
fetchCategories();
