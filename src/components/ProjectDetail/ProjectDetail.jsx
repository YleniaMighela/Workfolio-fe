import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProjectDetail.css";
import { Link } from "react-router-dom";

export default function ProjectDetail() {
    // recupero l'id del progetto
    const { id } = useParams();
    // variabile di stato che conterrà i dati del singolo progetto
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/projects/${id}`)
            .then(res => setProject(res.data))
            .catch(err => console.error(err));
    }, [id]);

    // se i dati ancora non arrivano, mostro un messaggio
    if (!project) return <p>Loading...</p>;

    return (
        <div className="project-detail">
            {/* link per tornare alla lista dei progetti */}
            <Link to="/projects" className="back-button">← Torna alla lista</Link>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <div className="media-list">
                {project.media.map((m, i) => (
                    <img
                        key={i}
                        src={`http://localhost:3000/uploads/${m.url}`}
                        alt=""
                        width="500"
                        className="mb-4"
                    />
                ))}

                {/* contenitore con dettagli e progilo github */}
                <div >
                    <p>{project.details}</p>
                    <a href={project.github} target="_blank" rel="noreferrer" className="github-link">
                        🔗 GitHub
                    </a>
                </div>

            </div>
        </div>
    );
}
