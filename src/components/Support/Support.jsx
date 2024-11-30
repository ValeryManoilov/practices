import styled from "styled-components"
import support from "../../assets/images/support.jpg"

export const SupportContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
`

export const SupportContent = styled.div`
    width: 64%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.p`
    font-size: 2.875em;
    font-weight: bold;
`

export const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

function Support()
{
    const ArrLogo = [
        support,
        support,
        support,
        support,
        support,
        support
    ]
    return(
        <SupportContainer>
            <SupportContent>
                <Title>
                    Supported by 12+ partners
                </Title>
                <LogoContainer>
                    {ArrLogo.map((el, key) => 
                        (<img id={key} src={el}></img>))}
                </LogoContainer>
            </SupportContent>
        </SupportContainer>
    )
}

export default Support