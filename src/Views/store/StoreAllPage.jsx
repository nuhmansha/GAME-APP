import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectAllStores, selectAllStoresStatus } from "../../Redux/Store/storeSlice";
import { useEffect } from "react";
import { fetchAsyncStores } from "../../Redux/Util/storeUtils";
import { StoreList } from "../../Components/store";
import {STATUS} from "../../Utils/status";
import { Preloader,Title } from "../../Components/common";

const StoreAllPage = () => {
  const dispatch = useDispatch();
  const stores = useSelector(selectAllStores);
  const storesStatus =useSelector(selectAllStoresStatus);

  useEffect(()=>{
    dispatch(fetchAsyncStores());

  },[])
  return (
    <StoreAllPageWrapper>
       <div className='sc-stores section'>
        <div className='container'>
          <Title titleName={{
            firstText: "all",
            secondText: "stores"
          }} />
          {
            storesStatus === STATUS.LOADING ? <Preloader /> : stores?.length > 0 ? <>
              <StoreList stores = { stores } />
            </> : "No stores found!"
          }
        </div>
      </div>
    </StoreAllPageWrapper>
  )
}

export default StoreAllPage;

const StoreAllPageWrapper = styled.div`
  background-color: var(--clr-violet-dark-active);
  .sc-stores{
    min-height: 100vh;
    padding-top: 65px;
  }
`;