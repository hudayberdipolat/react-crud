import { Outlet } from "react-router-dom";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";

const Layout = () => {
    return (
        <>
            <Header />

       
            <Outlet />
    
            <Footer/>
        </>
    )
}

export default Layout;