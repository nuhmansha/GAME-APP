import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { selectSingleStore, selectSingleStoreStatus } from "../../Redux/Store/storeSlice";
import { useEffect } from "react";
import { fetchAsyncStoresDetails } from "../../Redux/Util/storeUtils";
import {StoreDetails} from "../../Components/store";
import { Breadcrumb,Preloader } from "../../Components/common";
import {STATUS} from "../../Utils/status"

const StoreDetailsPage = () => {
    const {storeId}=useParams();
    const dispatch = useDispatch();
    const singleStoreData= useSelector(selectSingleStore);
    const singleStoreStatus = useSelector(selectSingleStoreStatus);
    console.log(singleStoreData,singleStoreStatus);


    useEffect(()=>{
        dispatch(fetchAsyncStoresDetails(storeId));

    },[storeId])
    console.log(singleStoreData,"dingle");

    const storeNameById ={
        [singleStoreData.id] :singleStoreData.name
    }
    return (
        <StoreDetailsPageWrapper>
            <div className='sc-details'>
                <div className='container'>
                    <Breadcrumb dataNameById = { storeNameById } />
                    {
                        singleStoreStatus === STATUS.LOADING ? <Preloader /> : <StoreDetails storeData = { singleStoreData } />
                    }
                </div>
            </div>
        </StoreDetailsPageWrapper>
    )
}

export default StoreDetailsPage;

const StoreDetailsPageWrapper = styled.div`
    background: var(--clr-violet-dark-active);
    
    .sc-details{
        min-height: 100vh;
        padding-top: 65px;
        padding-bottom: 65px;
    }
`;