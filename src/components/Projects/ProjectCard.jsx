import styled from "styled-components";
// import "./ProjectCard.css"


export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const CardButton = styled.button`
    border: 1px solid #FF5A30;
    padding: 0 8.2%;
    border-radius: 4px;
    cursor: pointer;
    margin: auto;
    margin-top: 24px;
    display: none;
    opacity: 0;
    & > p{
        font-size: 0.875em;
        font-weight: bold;
        color: #FF5A30;
    }
`

export const TextContainer = styled.div`
    position: absolute;
    top: 100%;
    left: auto;
    text-align: center;
    width: 100%;
    height: auto;
    background-color: white;
    padding: 16px 0 24px 0;
    transition: all 0.3s;
    z-index: 0;
    &:hover{
        top: 80.2%;
        padding: 16px 0 16px 0;
        box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.2);
        ${CardButton}{
            display: block;
            opacity: 1;
        }
    }
`
export const CardTitle = styled.p`
    font-size: 1.25em;
    font-weight: bold;
    line-height: 30px;
    margin: 0;
`

export const CardText = styled.p`
    font-size: 0.875em;
    line-height: 21px;
`

export const CardImg = styled.img`
    cursor: pointer;
    width: 100%;
    &:hover ~ ${TextContainer}{
        top: 80.2%;
        padding: 16px 0 16px 0;
        box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.2);
        cursor: pointer;
    }
    &:hover ~ ${TextContainer} > ${CardButton}{
        display: block;
        opacity: 1;
    }

`




function ProjectCard(props)
{
    return(
        <ProjectsContainer>
            <CardImg src={props.img}/>
            <TextContainer>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.text}</CardText>
                <CardButton>
                    <p>
                        VIEW PROJECT
                    </p>
                </CardButton>
            </TextContainer>
        </ProjectsContainer>
    )
}
export default ProjectCard;