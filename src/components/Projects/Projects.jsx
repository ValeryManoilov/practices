import "./Projects.css"
import townscraper1 from "../../assets/images/skyscraper1.jpg";
import townscraper2 from "../../assets/images/skyscraper2.jpg";
import townscraper3 from "../../assets/images/skyscraper3.jpg";
import Arrow from "../Arrow/Arrow"
import ProjectCard from "../ProjectCard/ProjectCard"
function Projects()
{
    return (
        <section className="projects__container">
            <Arrow/>
            <h2 className="projects__title">
            Browse our selected projects 
            and learn more about our work
            </h2>
            <section className="projects-all-cards__container">
                <ProjectCard title="Red Finger Building" text="Business Centers" img={townscraper1}/>
                <ProjectCard title="Cubes Building" text="Business Centers" img={townscraper2}/>
                <ProjectCard title="The Pencil Building" text="Stores & Malls" img={townscraper3}/>
            </section>
        </section>
    );
}

export default Projects;