import "./ProjectCard.css"

function ProjectCard(props)
{
    return(
        <div className="projects-card__container">
            <img src={props.img} alt="" className="projects-card__img" />
            <div className="projects-card-text__container">
                <h3 className="projects-card__title">{props.title}</h3>
                <p className="projects-card__text">{props.text}</p>
                <button className="projects-card__button">
                    <p>
                        VIEW PROJECT
                    </p>
                </button>
            </div>
        </div>
    )
}
export default ProjectCard;