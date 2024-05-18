import styled from "styled-components";
import PropTypes from "prop-types";
import CreatorItem from "./CreatorItem";


const CreatorList = ({creators}) => {
    console.log(creators,"creators");
    return (
        <CreatorListWrapper>
             <div className='card-list'>
                {
                    creators?.map(item => (
                        <CreatorItem key = { item.id } creatorItem = { item } />
                    ))
                }
            </div>
        </CreatorListWrapper>
    )
}

export default CreatorList;
CreatorList.prototype = {
    creators:PropTypes.array

}

const CreatorListWrapper = styled.div`
    margin-top: 140px;
`;