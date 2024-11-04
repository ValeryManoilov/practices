import styled from "styled-components";
import ValueCard from "./ValueCard";
// import "./Values.css";

export const ValuesContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 6.3%;
`

export const TitleTextContainer = styled.section`
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.p`
    margin: 0;
    margin-bottom: 1.95%;
    font-size: 2.875em;
    color: #1E212C;
    font-weight: bold;
    line-height: 130%;
`

export const TitleText = styled.p`
    margin: 0;
    margin-bottom: 4.7%;
    font-size: 1.125em;
    color: #787A80;
    line-height: 130%;
`

export const AllCardsContainer = styled.section`
    width: 64%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 15%;
`



function Values()
{
    return(
        <ValuesContainer>
            <TitleTextContainer>
                <Title>Our core values</Title>
                <TitleText>
                    Our mission is to set the highest standards for construction sphere.
                </TitleText>
            </TitleTextContainer>
            <AllCardsContainer>
                <ValueCard title="Quality" text="Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."/>
                <ValueCard title="Safety" text="Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea."/>
                <ValueCard title="Comfort" text="Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad."/>
            </AllCardsContainer>
        </ValuesContainer>
    );
}

export default Values;