import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { selectSingleGame, selectSingleGameStatus } from "../../Redux/Store/gamesSlice";
import { useEffect } from "react";
import { fetchAsyncGamesDetails } from "../../Redux/Util/gameUtils";
import {game_details_image} from "../../Utils/images"
import {STATUS} from "../../Utils/status"
import { Breadcrumb ,Preloader} from "../../Components/common";
import { GameDetails } from "../../Components/game";

const GameDetailsPage = () => {
  const {gameId } =useParams();
  const dispatch=useDispatch();
  const singleGameData = useSelector(selectSingleGame)
  const singleGameStatus = useSelector(selectSingleGameStatus);

  useEffect(()=>{
    dispatch(fetchAsyncGamesDetails(gameId))
  },[gameId])
  console.log(singleGameData);

  const gameNameById = {
    [singleGameData.id] : singleGameData.name
  }
  console.log(gameNameById,'kkkk gameNameById');
  return (
    <GameDetailsPageWrapper>
       <div className='sc-details' style = {{
        background: `linear-gradient(0deg, rgba(16, 14, 43, 0.8), rgba(16, 14, 43, 0.8)), url(${game_details_image}) center/cover no-repeat`
      }}>
        <div className='container'>
          <Breadcrumb dataNameById = { gameNameById } />
          {
            singleGameStatus === STATUS.LOADING ? <Preloader /> : <GameDetails gameData = { singleGameData } />
          }
        </div>
      </div>
    </GameDetailsPageWrapper>
  )
}

export default GameDetailsPage;

const GameDetailsPageWrapper = styled.div`
  .sc-details{
    min-height: 100vh;
    padding-top: 65px;
    padding-bottom: 65px;
  }
`;