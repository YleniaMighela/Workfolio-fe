import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectList.css";

export default function ProjectList() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/projects")
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="carousel-container">

            {/* motion permette di trascinare orizzontalmete il contenitore (in questo caso avendo 3 progetti il "carosello" non è ricco, ma i progetti possono comunque spostarsi tenendo premuto tra i due progetti)*/}
            <motion.div
                className="carousel-track"
                drag="x"      // attiva il drag solo sull'asse orizzontale
                dragConstraints={{ left: -1000, right: 0 }} // limita il massimo spostamento verso sinistra e destra
                whileHover={{ cursor: "grab" }} // cambia il cursore quando passa sopra le card
            >

                {/* PROGETTI */}
                {projects.map(proj => (
                    <Link
                        key={proj.id}
                        to={`/projects/${proj.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <motion.div
                            className="carousel-card"
                            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.3)" }}   // le card si ingradiscono al passaggio del mouse
                            transition={{ type: "spring", stiffness: 200 }} // effetto molla
                        >

                            {/* SEZIONE VIDEO */}
                            <div className="carousel-media-container">
                                <video
                                    className="carousel-preview-media"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source
                                        src={`http://localhost:3000/uploads/${proj.cover}`}
                                        type="video/mp4"
                                    />
                                </video>
                            </div>

                            {/* SEZIONE TESTO */}
                            <div className="carousel-preview-content">
                                <h3>{proj.title}</h3>
                                <p>{proj.description}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}
