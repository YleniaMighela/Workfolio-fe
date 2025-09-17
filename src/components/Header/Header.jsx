import { Link } from "react-router-dom"
import "../Header/Header.css"


export default function Header() {

    return (
        <>
            <div className="container_header">
                <Link to="/" className="link" >Ylenia M.</Link>
                <div className="navbar" >
                    <Link to="/projects" className="nav-link" > I miei progetti</Link>
                    <Link to="aboutme" className="nav-link"> Mi presento</Link>
                </div>


            </div>
        </>
    );
}