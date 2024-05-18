import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../Api/axios";
import { apiURL } from "../../Constants";
import { API_KEY } from "../../Api/api_key";

export const fetchAsyncGenres = createAsyncThunk('genres/fetch',async(page = 1)=>{
    const {data} = await axios.get(`${apiURL.genresURL}?${API_KEY}&page=${page}`);
    return data;
})