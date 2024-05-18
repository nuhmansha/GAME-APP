import { createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../../Utils/status"
import { fetchAsyncGames, fetchAsyncGamesDetails } from "../Util/gameUtils";
const initialState={
    games:[],
    gamesStatus:STATUS.IDLE,
    gamesSingle:{},
    gamesSingleStatus:STATUS.IDLE,
    // gamesDetails:[]


}

const gameSlice = createSlice({
    name: "game",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncGames.pending, (state) => {
                state.gamesStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncGames.fulfilled, (state, action) => {
                state.games = action.payload;
                state.gamesStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchAsyncGames.rejected, (state) => {
                state.gamesStatus = STATUS.FAILED;
            })
            .addCase(fetchAsyncGamesDetails.pending, (state) => {
                state.gamesSingleStatus = STATUS.LOADING;
            })
            .addCase(fetchAsyncGamesDetails.fulfilled, (state, action) => {
                state.gamesSingle = action.payload;
                state.gamesSingleStatus = STATUS.SUCCEEDED;
            })
            .addCase(fetchAsyncGamesDetails.rejected, (state) => {
                state.gamesSingleStatus = STATUS.FAILED;
            });
    },
    reducers: {}
});

export const selectAllGames = (state) => state.game.games.results;
export const selectAllGamesStatus = (state) => state.game.gamesStatus;
export const selectAllGamesNextPage = (state) => state.game.games.next;
export const selectAllGamesPrevPage = (state) => state.game.games.previous;
export const selectSingleGame = (state) => state.game.gamesSingle;
export const selectSingleGameStatus = (state) => state.game.gamesSingleStatus;
// export const selectGameDetails = (state) => state.games.gamesDetails;

export default gameSlice.reducer;