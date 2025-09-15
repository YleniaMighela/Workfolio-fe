import { useEffect, useState } from "react";
import axios from "axios";
import "../components/ProjectList.css";


export default function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/projects")
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="project-list">
            {projects.map((proj) => (
                <div key={proj.id} className="preview-card">
                    <img src={proj.cover} alt={proj.title} className="preview-image" />
                    <div className="preview-content">
                        <h3>{proj.title}</h3>
                        <p>{proj.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}