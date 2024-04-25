import { Outlet } from "react-router-dom";
import Header from "../../components/layouts/header";
import Footer from "../../components/layouts/footer";

const Layout = () => {
    return (
        <>
            <Header />

            <div className="container">
            <Outlet />
            </div>
            <Footer/>
        </>
    )
}

export default Layout;