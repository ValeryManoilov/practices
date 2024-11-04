import townscraper1 from "../../assets/images/skyscraper1.jpg";
import townscraper2 from "../../assets/images/skyscraper2.jpg";
import townscraper3 from "../../assets/images/skyscraper3.jpg";
import Arrows from "./ProjectArrows"
import ProjectCard from "./ProjectCard"
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
`

export const ProjectsContainer = styled.section`
    width: 64%;
    display: flex;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: auto;
    margin-top: 11.3%;
`

export const ProjectsTitle = styled.p`
    margin-top: 0;
    width: 60%;
    font-size: 2.875em;
    font-weight: bold;
`

export const ProjectsAllCards = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    margin: auto;
    gap: 2.4%;
    width: 100%;
`

function Projects()
{
    return (
        <ProjectsContainer>
            <Arrows/>
            <ProjectsTitle>
            Browse our selected projects 
            and learn more about our work
            </ProjectsTitle>
            <ProjectsAllCards>
                <ProjectCard title="Red Finger Building" text="Business Centers" img={townscraper1}/>
                <ProjectCard title="Cubes Building" text="Business Centers" img={townscraper2}/>
                <ProjectCard title="The Pencil Building" text="Stores & Malls" img={townscraper3}/>
            </ProjectsAllCards>
        </ProjectsContainer>
    );
}

export default Projects;