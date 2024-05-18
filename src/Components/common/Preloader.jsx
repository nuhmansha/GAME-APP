import styled from "styled-components";
import { loader } from "../../Utils/images";
const Preloader = () => {
  return (
    <PreloaderWrapper className="d-flex align-items-center justify-content-center">
      <img src={loader} alt="preloader" />
    </PreloaderWrapper>
  )
}

export default Preloader;

const PreloaderWrapper = styled.div`
  img{
    max-width: 120px;
  }
`;