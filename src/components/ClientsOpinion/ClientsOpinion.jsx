import styled from "styled-components"
import Arrow from "../Arrows/Arrow";
import profile from "../../assets/images/profile-image.jpg";
import twomans from "../../assets/images/twomans.jpg";

export const FeedBackContainer = styled.div`
    width: 64%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    margin-top: 10%;
`

export const FeedBackContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const FeedBackTextContainer = styled.div`
    width: 48.8%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10%;
`

export const Title = styled.h2`
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 2.875em;
`

export const ClientFeedBackContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px
`

export const ProfileImg = styled.img`
`

export const ClientText = styled.div`
    margin: 0;
    font-size: 1em;
    font-weight: 400;
    line-height: 25.6px;
`

export const SwapClientLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ClientInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const ClientName = styled.div`
    font-size: 1em;
    font-weight: bold;
    color: #1E212C;
    line-height: 25.6px;
`

export const ClientPosition = styled.div`
    font-size: 0.875em;
    font-weight: 400;
    color:#787A80;
    line-height: 25.6px;
`

export const SwapClientArrows = styled.div`
    display: flex;
    flex-direction: row;
`

export const LeadImg = styled.img`
`



function ClientFeedBack()
{
    return(
        <FeedBackContainer>
            <FeedBackContent>
                <FeedBackTextContainer>
                    <Title>What our clients are saying</Title>
                    <ClientFeedBackContainer>
                        <ProfileImg src={profile}></ProfileImg>
                        <ClientText>
                            Ipsum aute sunt aliquip aute et occaecat. 
                            Anim minim do cillum eiusmod enim. Consectetur 
                            magna cillum consequat minim  laboris cillum 
                            laboris voluptate minim proident exercitation ullamco. 
                        </ClientText>
                        <SwapClientLine>
                            <ClientInfo>
                                <ClientName>Shawn Edwards</ClientName>
                                <ClientPosition>Position, Company name</ClientPosition>
                            </ClientInfo>
                            <SwapClientArrows>
                                <Arrow vector="left" backgroundColorActive="#FF5A30"></Arrow>
                                <Arrow vector="right" backgroundColorActive="#FF5A30"></Arrow>
                            </SwapClientArrows>
                        </SwapClientLine>
                    </ClientFeedBackContainer>
                </FeedBackTextContainer>
                <LeadImg src={twomans}></LeadImg>
            </FeedBackContent>
        </FeedBackContainer>
    )
}

export default ClientFeedBack