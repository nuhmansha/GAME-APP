import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectAllGames, selectAllGamesNextPage, selectAllGamesPrevPage, selectAllGamesStatus } from "../../Redux/Store/gamesSlice";
import { useEffect, useState } from "react";
import { fetchAsyncGames } from "../../Redux/Util/gameUtils";
import { Pagination, Preloader, Title } from "../../Components/common";
import { GameList } from "../../Components/game";
import {STATUS } from "../../Utils/status"

const GameAllPage = () => {
  const dispatch = useDispatch();
  const games = useSelector(selectAllGames);
  const gameStatus = useSelector(selectAllGamesStatus);
  const nextPage = useSelector(selectAllGamesNextPage);
  const prevPage = useSelector(selectAllGamesPrevPage);
  console.log(games,gameStatus,nextPage,prevPage);
  const [page,setPage] = useState(1);

  useEffect(()=>{
    dispatch(fetchAsyncGames(page))
  },[page]);
  const pageHandler = (pageValue) =>setPage(pageValue)

  return (
    <GameAllPageWrapper>
      <div className="sc-games section">
        <div className="container">
          <Title titleName={{
            firstText:"all",
            secondText:"games"
          }} />

          {
            gameStatus == STATUS.LOADING ? <Preloader /> : games?. length > 0 ? <>
            <GameList games = {games} />
            <Pagination pageHandler = {pageHandler} nextPage = {nextPage} prevPage ={prevPage} 
            currentPage = {page} 
            />
            </>:"No games found!"
          }

        </div>

      </div>
    </GameAllPageWrapper>
  )
}

export default GameAllPage;

const GameAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);

  .sc-games{
    min-height: 100vh;
    padding-top: 65px;
  }
`;