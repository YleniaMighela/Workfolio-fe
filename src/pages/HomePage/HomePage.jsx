
import ProjectList from "../../components/ProjectList/ProjectList";
import AboutMe from "../AboutMe/AboutMe";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="homepage-container">
            <h1>Ciao! 👋 Sono Ylenia Mighela</h1>

            <p>
                Benvenuti nel mio portfolio! Qui puoi scoprire i miei progetti più recenti,
                le competenze acquisite e il mio percorso nel mondo dello sviluppo web.
            </p>

            <div className="container-hero">
                <AboutMe />
                <ProjectList />
            </div>

        </div>
    );
}
