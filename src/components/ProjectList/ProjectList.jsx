import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../ProjectList/ProjectList.css";

export default function ProjectList() {
    // variabile di stato che contiene la lista dei progetti recuperati dal backend
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // chiamata GET per recuperare la lista dei progetti
        axios.get("http://localhost:3000/projects")
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="project-list">
            {projects.map((proj) => (

                <div key={proj.id} className="preview-card">

                    <div className="media-container">
                        {/* se è un video */}
                        {proj.type === "video" ? (
                            <video className="preview-media"

                                autoPlay   // parti appena si apre la pagina
                                loop      // ricomincia da capo quando finisce
                                muted     // audio no
                                playsInline // compatibile con dispositivi mobili
                            >
                                <source
                                    src={`http://localhost:3000/uploads/${proj.cover}`}
                                    type="video/mp4"
                                />
                                Il tuo browser non supporta i video.
                            </video>
                        ) : (
                            // altrimenti se è un'immagine
                            <img
                                src={`http://localhost:3000/uploads/${proj.cover}`}
                                alt={proj.title}
                                className="preview-media"
                            />
                        )}
                    </div>

                    {/* contenitore descrizione card */}
                    <div className="preview-content">
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                    </div>

                    {/* link del dettaglio del progetto */}
                    <div><Link to={`/projects/${proj.id}`} className="back-button"> Vai al dettaglio
                    </Link></div>

                </div>

            ))
            }
        </div >
    );
}
