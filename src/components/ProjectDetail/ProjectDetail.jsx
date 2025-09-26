import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./ProjectDetail.css";

export default function ProjectDetail() {
    // recupero l'id
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/projects/${id}`)
            .then(res => setProject(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!project) return <p>Loading...</p>;

    return (
        <div className="project-detail">
            {/* link per tornare alla Home */}
            <Link to="/" className="back-button">← Torna indietro</Link>

            {/* SEZIONE TITOLO */}
            <h1>{project.title}</h1>



            {/* SEZIONE IMMAGINI */}
            {project.media && project.media.length > 0 && (
                <div className="carousel-container">
                    <motion.div
                        className="carousel-track"
                        drag="x"
                        dragConstraints={{ left: -((project.media.length - 1) * 220), right: 0 }}
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {project.media
                            .filter(m => m.type === "image")
                            .map((m, i) => (
                                <motion.img
                                    key={i}
                                    src={`http://localhost:3000/uploads/${m.url}`}
                                    alt={project.title || ""}
                                    className="carousel-image"
                                    whileHover={{ scale: 1.05 }}
                                />
                            ))}

                    </motion.div>
                </div>
            )}

            {/* SEZIONE GITHUB E VIDEO */}
            <div className="project-buttons">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="github-link"
                    >
                        🔗 GitHub
                    </a>
                )}
                {project.media && project.media.some(m => m.type === "video") && (
                    project.media.map((m, i) => (
                        m.type === "video" && (
                            <a
                                key={i}
                                href={`http://localhost:3000/uploads/${m.url}`}
                                target="_blank"
                                rel="noreferrer"
                                className="video-link"
                            >
                                ▶ Guarda il video
                            </a>
                        )
                    ))
                )}
            </div>

            {/* SEZIONE DETTAGLIO */}
            {/* <p>{project.details}</p> */}
            <div className="project-detail">
                <ul className="project-details-list">
                    {project.details.split("\n").map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>


        </div>
    );
}
