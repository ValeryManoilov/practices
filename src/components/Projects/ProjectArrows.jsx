import styled from "styled-components";
import Arrow from "../Arrows/Arrow"

export const ArrowsContainer = styled.div`
    width: 100px;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    left: 93.7%;
    top: 84px;
`

function ProjectArrows()
{
    return(
        <ArrowsContainer>
            <Arrow vector="left" backgroundColorActive="#FF5A30" fill="white" tabIndex={0}/>
            <Arrow vector="right" backgroundColorActive="#FF5A30" fill="white" tabIndex={0}/>
        </ArrowsContainer>
    );
}
export default ProjectArrows;