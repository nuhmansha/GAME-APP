import styled from "styled-components";
import {
  Banner,
  ImageSlider,
  Preloader,
  Tabs,
  Title,
} from "../../Components/common/index";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllGames,
  selectAllGamesStatus,
} from "../../Redux/Store/gamesSlice";
import { useEffect } from "react";
import { fetchAsyncGames } from "../../Redux/Util/gameUtils";
import { STATUS } from "../../Utils/status";
import { GameList } from "../../Components/game/index";
import { Link } from "react-router-dom";
import { join_image, store_image } from "../../Utils/images";
import {
  selectAllGenres,
  selectAllGenresStatus,
} from "../../Redux/Store/genreSlice";
import { fetchAsyncGenres } from "../../Redux/Util/genreUtils";
import {StoreList} from "../../Components/store/index"
import { fetchAsyncStores } from "../../Redux/Util/storeUtils";
import { selectAllStores,selectAllStoresStatus } from "../../Redux/Store/storeSlice";


const HomePage = () => {
  const dispatch = useDispatch();

  const games = useSelector(selectAllGames);
  const gamesStatus = useSelector(selectAllGamesStatus);

  const genres = useSelector(selectAllGenres);
  const genresStatus = useSelector(selectAllGenresStatus);

  const stores = useSelector(selectAllStores);
  const storesStatus = useSelector(selectAllStoresStatus);

  // console.log(storesStatus);

  useEffect(() => {
    dispatch(fetchAsyncGames());
    dispatch(fetchAsyncGenres());
    dispatch(fetchAsyncStores())
  }, []);

  const renderedPopularGames = (
    <>
      <GameList sliceValue={9} games={games} />
      <div className="d-flex justify-content-center">
        <Link to="/games" className="section-btn">
          see more games
        </Link>
      </div>
    </>
  );

  return (
    <HomeWrapper>
      <Banner />
      <section className="section sc-popular">
        <div className="container">
          <Title
            titleName={{ firstText: "top popular", secondText: "games" }}
          />
          {gamesStatus == STATUS.LOADING ? (
            <Preloader />
          ) : games?.length > 0 ? (
            renderedPopularGames
          ) : (
            "No Games found!"
          )}
        </div>
      </section>

      <ImageSlider />
      <section
        className="section sc-join d-flex align-items-center"
        style={{
          background: `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),
        url(${join_image}) center/cover no-repeat`,
        }}
      >
        <div className="container w-100">
          <div className="join-content text-white mx-auto text-center">
            <h2 className="join-title mb-3">
              JOIN THE <span>COMMUNITY</span>
            </h2>
            <p className="lead-text">
              Join our Discord community which is in the making and made by
              gamers for gamers. All are welcome to join no matter the game you
              play, we&apos;re here to have a good.
            </p>
            <button type="button" className="section-btn mt-4">
              join discord
            </button>
          </div>
        </div>
      </section>
      <section className="section sc-genres">
        <div className="container">
          <Title
            titleName={{
              firstText: "top",
              secondText: "genres",
            }}
          />
        </div>
        {genresStatus == STATUS.LOADING ? (
          <Preloader />
        ) : genres?.length > 0 ? (
          <Tabs sliceValue={9} data={genres} />
        ) : (
          "No genres found!"
        )}
      </section>
      <section
        className="section sc-stores "
        style={{
          background: `linear-gradient(180deg, rgba(12, 10, 36, 0.73) 0%, rgba(0, 0, 0, 0.73) 72.92%), url(${store_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <Title
            titleName={{
              firstText: "our",
              secondText: "game stores",
            }}
          />
          {storesStatus === STATUS.LOADING ? (
            <Preloader />
          ) : stores?.length > 0 ? (
            <StoreList stores={stores} />
          ) : (
            "No stores found!"
          )}
        </div>
      </section>
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.div`
  .sc-popular {
    background-color: var(--clr-violet-dark-active);
    .section-btn {
      margin-top: 60px;
    }
  }

  .sc-join {
    min-height: 640px;

    .join-content {
      max-width: 600px;
    }

    .join-title {
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 44px;
      letter-spacing: 0.09em;

      span {
        color: var(--clr-green-normal);
        font-family: var(--font-family-right);
      }
    }
  }

  .sc-genres {
    background-color: var(--clr-violet-dark-active);
  }

  .sc-stores {
    min-height: 841px;
  }
`;
