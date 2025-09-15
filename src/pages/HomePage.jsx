
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h1>Ciao! 👋 Sono Ylenia Mighela</h1>
            <p>Benvenuti nel mio portfolio di progetti .</p>
            <Link to="/projects" style={{ marginTop: "20px", display: "inline-block", color: "#1e90ff", fontWeight: "bold" }}>
                Vai ai progetti →
            </Link>


        </div>
    );
}
