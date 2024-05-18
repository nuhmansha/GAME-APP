import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Api/axios";
import { apiURL } from "../../Constants";
import { API_KEY } from "../../Api/api_key";

export const fetchAsyncStores = createAsyncThunk('stores/fetch', async() => {
    const { data } = await axios.get(`${apiURL.storesURL}?${API_KEY}`);
    return data;
});
export const fetchAsyncStoresDetails = createAsyncThunk('stores/details/fetch', async(id) => {
    const { data } = await axios.get(`${apiURL.storesURL}/${id}?${API_KEY}`);
    return data;
})