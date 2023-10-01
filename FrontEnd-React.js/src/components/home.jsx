import Header from "../components/header/header";
import Home from "../components/home/home";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Navbar from "../components/nav/nav";
import Experience from "../components/experience/experience";
import Footer from "../components/footer/footer";

function Main() {
    return (
        <>
            <div className="bg-circle1"></div>
            <div className="bg-circle2"></div>
            <Header />
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Contact />
            <Footer />
        </>
    )
}

export default Main;