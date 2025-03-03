import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = ({ pageHandler, nextPage, prevPage, currentPage }) => {
  const goToHomePage = () => {
    window.location.href = "/"; // Redirect to home page
  };

  const pageNextHandler = () => {
    if (nextPage !== null) pageHandler(++currentPage);
  };

  const pagePrevHandler = () => {
    if (prevPage !== null) pageHandler(--currentPage);
  };

  return (
    <PaginationWrapper className="d-flex align-items-center justify-content-center">
      <button
        type="button"
        className={`home-btn fw-6 text-uppercase text-white ${
          currentPage === 1 ? "enabled" : ""
        }`}
        onClick={goToHomePage}
      >
        Home
      </button>

      <button
        type="button"
        className={`prev-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          prevPage == null ? "disabled" : ""
        }`}
        disabled={prevPage == null}
        onClick={pagePrevHandler}
      >
        <AiOutlineArrowLeft className="me-3" /> prev
      </button>

      <button
        type="button"
        className={`next-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          nextPage == null ? "disabled" : ""
        }`}
        disabled={nextPage == null}
        onClick={pageNextHandler}
      >
        Next <AiOutlineArrowRight className="me-3" />
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;

Pagination.propTypes = {
  pageHandler: PropTypes.func,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  currentPage: PropTypes.number,
};

const PaginationWrapper = styled.div`
  margin-top: 48px;

  button {
    margin: 0 16px;
    font-size: 18px;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
