import Data from "./Data";
import "./Home.css";
import sr from "../../ScrollReveal";

const Home = () => {
    const config = {
        origin: "bottom",
        duration: 2500,
        delay: 400,
        distance: "60px",
        reset: true,
    };

    sr.reveal('.home__img', config);

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__img"></div>
                    <Data />
                </div>
            </div>
        </section>
    );
};

export default Home;