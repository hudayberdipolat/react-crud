const Footer = () => {

    const  year = new Date().getFullYear()
    return (
        <>
            <footer className="container-fluid bg-dark  p-3 mt-5 footer">
                <p className="text-center text-white m-0"> &copy; copyright. Hudayberdi Polatov. {year} </p>
            </footer>
        </>
    )
}
export default Footer;