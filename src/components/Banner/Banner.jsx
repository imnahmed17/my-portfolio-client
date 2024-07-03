import Data from "./Data";
import "./Banner.css";
import sr from "../../ScrollReveal";

const Banner = () => {
    const config = {
        origin: "bottom",
        duration: 2500,
        delay: 400,
        distance: "60px",
        reset: true,
    };

    sr.reveal('.banner__img', config);

    return (
        <section className="banner section" id="home">
            <div className="banner__container container grid">
                <div className="banner__content grid">
                    <div className="banner__img"></div>
                    <Data />
                </div>
            </div>
        </section>
    );
};

export default Banner;