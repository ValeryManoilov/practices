import styled from "styled-components";
import descImg1 from "../../assets/images/descImg1.jpg";
import descImg2 from "../../assets/images/descImg2.jpg";
import descImg3 from "../../assets/images/descImg3.jpg";
import descImg4 from "../../assets/images/descImg4.jpg";
import Arrow from "../Arrows/Arrow";
import { useState } from "react";

export const DescribingContainer = styled.div`
    background-image: url("${props => props.back}");
    width: 1920px;
    height: 988px;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: center;
    transition: all 0.5s;
`

export const Content = styled.div`
    width: 96.6%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const LeftArrow = styled.div`
    position: absolute;
    left: 0px;
`

export const RightArrow = styled.div`
    position: absolute;
    right: 0px;
`

export const LeadElements = styled.div`
    width: 66.2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Information = styled.div`
    width: 48.3%;
    display: flex;
    flex-direction: column;
    margin-top: 8.1%;
`


export const Logo = styled.p`
    font-size: 4.5em;
    color: #FFFFFF;
    font-weight: bold;
    margin: 0;
`

export const Text = styled.p`
    font-size: 1.25em;
    color: #FFFFFF;
    margin: 0;
    margin-top: 4%;
`


export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4%;
    margin-top: 10.25%;
`

export const Button = styled.button`
    font-size: 1em;
    font-weight: bold;
    padding: 1.68% 6.7%;
    border: 1px solid;
    border-radius: 4px;
    line-height: 32px;
`

export const LearnMoreButton = styled(Button)`
    background-color: transparent;
    color: #FFFFFF;
    border-color: #FFFFFF;
`

export const RequestButton = styled(Button)`
    background-color: #FF5A30;
    color: #FFFFFF;
    border: none;
`


export const SlidersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 58.8%;
    margin-top: 14.6%;
`

export const SliderElement = styled.div`
    color: #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    border-radius: 2px;
    font-size: 1.75em;
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding-bottom: 1.65%;
    width: 24.6%;
    line-height: 150%;
    opacity: ${(props) => (props.num == props.backnum ? 1 : 0.5)};
    cursor: pointer;
    transition: all 0.4s;
    &:focus
    {
        opacity: 1;
    }
`


function CompanyDescribing()
{
    const [back, setBack] = useState(0)

    let photos = [
        descImg1,
        descImg2,
        descImg3,
        descImg4
    ]

    function settingBack(slideVector)
    {
        switch(slideVector)
        {
            case("left"):
                if ( back == 0 ) { setBack(3) } else { setBack(back-1) }
                break
            case("right"):
                if ( back == 3 ) { setBack(0) } else { setBack(back+1) }
                break
            default:
                break
        }
    }
    return(
        <DescribingContainer back={photos[back]}>
            <Content>
                <LeftArrow onClick={() => settingBack("left")}>
                    <Arrow vector="left" backgroundColorActive="#FFFFFF"/>
                </LeftArrow>
                <LeadElements>
                    <Information>
                        <Logo>
                            CREATE<span style={{color: "#FF5A30"}}>X</span><br/>CONSTRUCTION
                        </Logo>
                        <Text>
                            Cras ultrices leo vitae non viverra. Fringilla nisi 
                            quisque consequat, dignissim vitae proin ipsum sed. 
                            Pellentesque nec turpis purus eget pellentesque integer 
                            ipsum elementum felis. 
                        </Text>
                        <ButtonsContainer>
                            <LearnMoreButton>
                                LEARN MORE ABOUT US
                            </LearnMoreButton>
                            <RequestButton>
                                SUBMIT REQUEST
                            </RequestButton>
                        </ButtonsContainer>
                    </Information>
                    <SlidersContainer>
                        <SliderElement tabIndex={0} num={1} backnum={back + 1}>01</SliderElement>
                        <SliderElement tabIndex={0} num={2} backnum={back + 1}>02</SliderElement>
                        <SliderElement tabIndex={0} num={3} backnum={back + 1}>03</SliderElement>
                        <SliderElement tabIndex={0} num={4} backnum={back + 1}>04</SliderElement>
                    </SlidersContainer>
                </LeadElements>
                <RightArrow onClick={() => settingBack("right")}>
                    <Arrow vector="right" backgroundColorActive="#FFFFFF"/>
                </RightArrow>
            </Content>
        </DescribingContainer>
    )
}

export default CompanyDescribing