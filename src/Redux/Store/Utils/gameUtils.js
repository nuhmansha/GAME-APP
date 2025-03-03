import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../Api/axios";
import {apiURL} from '../../Constants';
import { API_KEY } from "../../Api/api_key";

export const fetchAsyncGames = createAsyncThunk('games/fetch', async(page = 1) => {
    const { data } = await axios.get(`${apiURL.gamesURL}?${API_KEY}&page=${page}`);
    return data;
});

export const fetchAsyncGameDetails = createAsyncThunk('game/details/fetch', async(id) => {
    const { data } = await axios.get(`${apiURL.gamesURL}/${id}?${API_KEY}`);
    return data;
})