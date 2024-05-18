import { Outlet } from "react-router-dom"
import{Navbar,Footer} from "../Components/common/index";
// import HomePage from "../Views/home/HomePage";
const BaseLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <HomePage/> */}
    <Footer/>

    </>
  )
}

export default BaseLayout