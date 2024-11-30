import styled from "styled-components"

import video from "../../assets/images/video.png";

export const VideoContainer = styled.div`

    width: 64%;
    margin: auto;
`

export const VideoContent = styled.div`
    margin-top: 6.25%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const VideoText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const VideoTitle = styled.p`
    font-weight: bold;
    font-size: 2.875em;
    margin: 0;
    `

export const VideoPrefix = styled.p`
    font-size: 1.125em; 
    margin: 0;
    margin-top: 2%;
    color: #787A80;
`

export const VideoImage = styled.div`
    margin-top: 5%;
    background-image: url("${video}");
    width: 100%;
    height: 500px;
    background-size: cover;
`

function Video()
{
    return(
        <VideoContainer>
            <VideoContent>
                <VideoText>
                    <VideoTitle>
                        We are Createx Construction Bureau 
                    </VideoTitle>
                    <VideoPrefix>
                        We are rightfully considered to be the best construction company in the USA.
                    </VideoPrefix>
                </VideoText>
                <VideoImage></VideoImage>
            </VideoContent>
        </VideoContainer>
    )
}

export default Video