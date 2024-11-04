import styled from "styled-components"



export const FooterContainer = styled.div`
    background-color: #1E212C;
    width: 100%;
`

export const FooterContent = styled.div`
    width: 64%;
    margin: auto;
    padding: 80px 0;
`


export const FirstContentLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
`

export const CreatexSocials = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 12.1%;
`

export const Links = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 12.1%;
`

export const Logo = styled.div`
`

export const Socials = styled.div`
    width: 37%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 8.4%;
`

export const MediaIcon = styled.div`
    width: 24px;
    height: 24px;
`

export const CreatexDescribe = styled.p`
    color: #FFFFFF;
    font-size: 0.875em;
    line-height: 150%;
    opacity: 0.5;
    margin: 0;
    margin-top: 3.125%;;
`


export const TouchContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const TouchTitle = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    color: #FFFFFF;
    margin: 0;
`

export const TouchInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-top: 4.9%;
`

export const EmailInput = styled.input`
    width: 73.6%;
    padding-left: 3.2%;
    padding-top: 2.2%;
    padding-bottom: 2.2%;
    background-color: #393c46;
    border: 1px solid #b0b1b5;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: none;
    color: #b0b1b5;
    &::placeholder{
        color: #b0b1b5;
    }

`

export const SubsButton = styled.button`
    padding: 2% 6.5% 2% 6.5%;
    background-color: #FF5A30;
    color: #FFFFFF;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    line-height: 24px;
    font-weight: bold;
`

export const TouchExp = styled.p`
    font-size: 0.75em;
    color: #FFFFFF;
    opacity: 0.5;
    line-height: 150%;
    margin-top: 3.2%;
`



export const SecondContentLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 10.1%;
    margin-top: 4%;
`

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const InfoTitle = styled.p`
    margin: 0;
    font-size: 1em;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 150%;
`

export const InfoAllArticles = styled.div`
    margin-top: 13px;
    gap: 4px;
`

export const InfoArticle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    color: #FFFFFF;
    line-height: 160%;
`

export const InfoOpasity = styled.p`
    margin: 0;
    color: #FFFFFF;
    opacity: 0.5;
`


export const ThirdContentLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    margin-top: 4%;
`

export const CopyRightContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 4px;
    color: #FFFFFF;
    margin: 0;
`

export const ToStartContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 10.4%;
    align-items: end;
    gap: 12.4%;
`

export const ToStartText = styled.div`
    color: #FFFFFF;
    line-height: 150%;
    margin: 0;
    font-size: 0.875em;
`

export const ToStartButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6.2%;
    background-color: #FF5A30;
    border-radius: 4px;
    cursor: pointer;
`



function Footer()
{
    function scrollToTop()
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return(
        <FooterContainer>
            <FooterContent>
                <FirstContentLine>
                    <CreatexSocials>
                        <Links>
                            <Logo>
                                <svg width="130" height="22" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_131992_116)">
                                <path d="M0 11.0998C0 4.9998 3.3 1.2998 8.7 1.2998C12.8 1.2998 16.1 3.7998 16.7 7.4998C16.8 7.8998 16.5 8.1998 16.1 8.1998H13.5C13.2 8.1998 13 7.9998 12.9 7.6998C12.4 5.7998 10.8 4.5998 8.7 4.5998C5.8 4.5998 4 7.0998 4 11.0998C4 15.0998 5.8 17.5998 8.8 17.5998C10.9 17.5998 12.4 16.4998 13 14.6998C13.1 14.3998 13.3 14.1998 13.6 14.1998H16.2C16.6 14.1998 16.9 14.5998 16.8 14.8998C16.2 18.4998 13 20.8998 8.8 20.8998C3.3 20.8998 0 17.0998 0 11.0998Z" fill="white"/>
                                <path d="M24.2997 20.4001H21.3997C21.0997 20.4001 20.8997 20.2001 20.8997 19.9001V2.60006C20.8997 2.20006 21.2997 1.80006 21.6997 1.80006H28.6997C32.7997 1.80006 35.2997 4.10006 35.2997 7.70006C35.2997 9.80006 34.2997 11.7001 32.5997 12.7001C32.1997 12.9001 32.0997 13.4001 32.2997 13.7001L35.3997 19.6001C35.5997 19.9001 35.2997 20.3001 34.9997 20.3001H31.6997C31.4997 20.3001 31.2997 20.2001 31.1997 20.0001L28.2997 14.0001C28.1997 13.7001 27.8997 13.6001 27.5997 13.6001H25.2997C24.9997 13.6001 24.7997 13.8001 24.7997 14.1001V20.0001C24.8997 20.2001 24.5997 20.4001 24.2997 20.4001ZM24.8997 10.2001C24.8997 10.5001 25.0997 10.7001 25.3997 10.7001H28.3997C30.3997 10.7001 31.4997 9.60006 31.4997 7.80006C31.4997 6.00006 30.2997 4.90006 28.3997 4.90006H25.4997C25.1997 4.90006 24.9997 5.10006 24.9997 5.40006V10.2001H24.8997Z" fill="white"/>
                                <path d="M51.4998 20.4001H40.4998C40.0998 20.4001 39.7998 20.1001 39.7998 19.7001V2.50006C39.7998 2.10006 40.0998 1.80006 40.4998 1.80006H51.4998C51.8998 1.80006 52.1998 2.10006 52.1998 2.50006V4.40006C52.1998 4.80006 51.8998 5.10006 51.4998 5.10006H44.1998C43.8998 5.10006 43.6998 5.30006 43.6998 5.60006V9.00006C43.6998 9.30006 43.8998 9.50006 44.1998 9.50006H50.9998C51.3998 9.50006 51.6998 9.80006 51.6998 10.2001V11.9001C51.6998 12.3001 51.3998 12.6001 50.9998 12.6001H44.1998C43.8998 12.6001 43.6998 12.8001 43.6998 13.1001V16.9001C43.6998 17.2001 43.8998 17.4001 44.1998 17.4001H51.4998C51.8998 17.4001 52.1998 17.7001 52.1998 18.1001V20.0001C52.1998 20.1001 51.8998 20.4001 51.4998 20.4001Z" fill="white"/>
                                <path d="M66.9999 15.9001H61.2999C60.9999 15.9001 60.7999 16.1001 60.6999 16.3001L59.5999 20.0001C59.4999 20.3001 59.2999 20.4001 58.9999 20.4001H56.3999C55.9999 20.4001 55.6999 20.0001 55.7999 19.6001L61.7999 2.20006C61.8999 2.00006 62.0999 1.80006 62.3999 1.80006H66.0999C66.3999 1.80006 66.5999 2.00006 66.6999 2.20006L72.6999 19.6001C72.7999 20.0001 72.4999 20.4001 72.0999 20.4001H69.1999C68.8999 20.4001 68.6999 20.2001 68.5999 20.0001L67.4999 16.3001C67.4999 16.1001 67.1999 15.9001 66.9999 15.9001ZM62.0999 13.0001H66.1999C66.3999 13.0001 66.4999 12.8001 66.4999 12.6001L64.2999 5.60006H64.0999L61.8999 12.6001C61.7999 12.8001 61.8999 13.0001 62.0999 13.0001Z" fill="white"/>
                                <path d="M79.0001 19.7005V5.50045C79.0001 5.20045 78.8001 5.00045 78.5001 5.00045H74.1001C73.7001 5.00045 73.3001 4.70045 73.3001 4.20045V2.50045C73.3001 2.10045 73.6001 1.70045 74.1001 1.70045H87.7001C88.1001 1.70045 88.5001 2.00045 88.5001 2.50045V4.20045C88.5001 4.60045 88.2001 5.00045 87.7001 5.00045H83.3001C83.0001 5.00045 82.8001 5.20045 82.8001 5.50045V19.8004C82.8001 20.2004 82.5001 20.5005 82.1001 20.5005H79.6001C79.3001 20.4004 79.0001 20.1005 79.0001 19.7005Z" fill="white"/>
                                <path d="M103.8 20.4001H92.7999C92.3999 20.4001 92.0999 20.1001 92.0999 19.7001V2.50006C92.0999 2.10006 92.3999 1.80006 92.7999 1.80006H103.8C104.2 1.80006 104.5 2.10006 104.5 2.50006V4.40006C104.5 4.80006 104.2 5.10006 103.8 5.10006H96.4999C96.1999 5.10006 95.9999 5.30006 95.9999 5.60006V9.00006C95.9999 9.30006 96.1999 9.50006 96.4999 9.50006H103.3C103.7 9.50006 104 9.80006 104 10.2001V11.9001C104 12.3001 103.7 12.6001 103.3 12.6001H96.4999C96.1999 12.6001 95.9999 12.8001 95.9999 13.1001V16.9001C95.9999 17.2001 96.1999 17.4001 96.4999 17.4001H103.8C104.2 17.4001 104.5 17.7001 104.5 18.1001V20.0001C104.5 20.1001 104.2 20.4001 103.8 20.4001Z" fill="white"/>
                                <path d="M117.7 9.7L111.5 1.6C111.1 1.2 110.6 1 110.1 1C109.6 1 109.1 1.2 108.7 1.6C108 2.4 108 3.6 108.7 4.4L113.6 11L108.7 17.6C108 18.4 108 19.6 108.7 20.4C109.1 20.8 109.6 21 110.1 21C110.6 21 111.1 20.8 111.5 20.4L117.7 12.3C118.4 11.7 118.4 10.5 117.7 9.7Z" fill="#FF5A30"/>
                                <path d="M120.343 9.7L126.543 1.6C126.943 1.2 127.443 1 127.943 1C128.443 1 128.943 1.2 129.343 1.6C130.043 2.4 130.043 3.6 129.343 4.4L124.443 11L129.343 17.6C130.043 18.4 130.043 19.6 129.343 20.4C128.943 20.8 128.443 21 127.943 21C127.443 21 126.943 20.8 126.543 20.4L120.343 12.3C119.643 11.7 119.643 10.5 120.343 9.7Z" fill="#FF5A30"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_131992_116">
                                <rect width="130" height="22" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </Logo>
                            <Socials>
                                <MediaIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                    <path d="M22 11.7424C22 17.1231 17.6047 21.4849 12.1818 21.4849C10.4602 21.4849 8.84289 21.0449 7.43578 20.2727L2 22L3.77222 16.7729C2.87822 15.3049 2.36333 13.5831 2.36333 11.7424C2.36333 6.36178 6.75911 2 12.1818 2C17.6051 2 22 6.36178 22 11.7424ZM12.1818 3.55156C7.62978 3.55156 3.92711 7.226 3.92711 11.7424C3.92711 13.5347 4.51133 15.1944 5.49956 16.5447L4.46822 19.5867L7.64044 18.5784C8.94378 19.4342 10.5051 19.9333 12.182 19.9333C16.7333 19.9333 20.4367 16.2593 20.4367 11.7429C20.4367 7.22644 16.7336 3.55156 12.1818 3.55156ZM17.1398 13.9862C17.0791 13.8869 16.9189 13.8269 16.6784 13.7076C16.4376 13.5882 15.254 13.0102 15.034 12.9309C14.8133 12.8513 14.6524 12.8113 14.4922 13.0502C14.332 13.2893 13.8707 13.8269 13.73 13.9862C13.5896 14.146 13.4493 14.166 13.2084 14.0464C12.968 13.9271 12.1927 13.6747 11.2733 12.8613C10.558 12.2284 10.0749 11.4471 9.93444 11.2078C9.79422 10.9689 9.91978 10.8398 10.04 10.7209C10.1484 10.6138 10.2809 10.442 10.4011 10.3027C10.5218 10.1631 10.5618 10.0638 10.6416 9.90422C10.7222 9.74489 10.682 9.60556 10.6216 9.48578C10.5616 9.36644 10.0798 8.19133 9.87933 7.71311C9.67889 7.23533 9.47867 7.31489 9.338 7.31489C9.19778 7.31489 9.03711 7.29489 8.87667 7.29489C8.71622 7.29489 8.45533 7.35467 8.23467 7.59356C8.01422 7.83267 7.39267 8.41044 7.39267 9.58533C7.39267 10.7604 8.25467 11.8958 8.37533 12.0549C8.49556 12.214 10.0398 14.7038 12.4864 15.66C14.9333 16.6158 14.9333 16.2969 15.3747 16.2569C15.8156 16.2171 16.7982 15.6793 16.9996 15.122C17.1996 14.5638 17.1996 14.0858 17.1398 13.9862Z" fill="white"/>
                                    </g>
                                    </svg>
                                </MediaIcon>
                                <MediaIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                    <path d="M12 2C6.4775 2 2 6.145 2 11.2587C2 14.1725 3.45375 16.7712 5.72625 18.4688V22L9.13125 20.1313C10.04 20.3825 11.0025 20.5187 12 20.5187C17.5225 20.5187 22 16.3737 22 11.26C22 6.14625 17.5225 2 12 2ZM12.9937 14.4688L10.4475 11.7525L5.47875 14.4688L10.945 8.66625L13.5538 11.3825L18.46 8.66625L12.9937 14.4688Z" fill="white"/>
                                    </g>
                                    </svg>
                                </MediaIcon>
                                <MediaIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                    <path d="M17.5628 1.00458L14.7856 1C11.6654 1 9.64903 3.12509 9.64903 6.41423V8.91055H6.85662C6.61532 8.91055 6.41992 9.1115 6.41992 9.35937V12.9763C6.41992 13.2241 6.61554 13.4249 6.85662 13.4249H9.64903V22.5514C9.64903 22.7993 9.84443 23 10.0857 23H13.729C13.9703 23 14.1657 22.799 14.1657 22.5514V13.4249H17.4307C17.672 13.4249 17.8674 13.2241 17.8674 12.9763L17.8688 9.35937C17.8688 9.24036 17.8226 9.12638 17.7409 9.04215C17.6591 8.95793 17.5477 8.91055 17.4318 8.91055H14.1657V6.79439C14.1657 5.77728 14.4017 5.26094 15.6915 5.26094L17.5624 5.26025C17.8035 5.26025 17.9989 5.0593 17.9989 4.81166V1.45317C17.9989 1.20576 17.8037 1.00504 17.5628 1.00458Z" fill="white"/>
                                    </g>
                                    </svg>
                                </MediaIcon>
                                <MediaIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                    <path d="M22.5 5.77233C21.7271 6.10027 20.8978 6.32267 20.0264 6.42196C20.9161 5.91181 21.5972 5.10263 21.92 4.1414C21.0854 4.61383 20.1642 4.95688 19.1826 5.14285C18.3966 4.33994 17.2785 3.83984 16.0384 3.83984C13.6593 3.83984 11.7303 5.68691 11.7303 7.9637C11.7303 8.2866 11.7683 8.60199 11.8418 8.90357C8.26201 8.73141 5.08768 7.08917 2.96314 4.59372C2.59176 5.20189 2.38049 5.91053 2.38049 6.66697C2.38049 8.09814 3.14161 9.36093 4.2964 10.0997C3.5904 10.0771 2.92639 9.89116 2.34508 9.58205V9.63357C2.34508 11.6314 3.83056 13.2988 5.80024 13.6783C5.43936 13.7713 5.05882 13.8228 4.66514 13.8228C4.38696 13.8228 4.11794 13.7964 3.85417 13.7461C4.40267 15.3859 5.99315 16.5783 7.87756 16.611C6.40388 17.7167 4.54573 18.3739 2.52749 18.3739C2.17976 18.3739 1.83724 18.3537 1.5 18.3173C3.40671 19.4896 5.67036 20.1732 8.10327 20.1732C16.028 20.1732 20.3597 13.8881 20.3597 8.43741L20.3453 7.90341C21.1917 7.32537 21.9239 6.59912 22.5 5.77233Z" fill="white"/>
                                    </g>
                                    </svg>
                                </MediaIcon>
                                <MediaIcon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3903 4.11358C22.4182 4.39044 23.2288 5.20086 23.5055 6.22899C24.0197 8.10691 23.9999 12.0213 23.9999 12.0213C23.9999 12.0213 23.9999 15.9158 23.5057 17.7939C23.2288 18.8218 22.4184 19.6324 21.3903 19.9091C19.5122 20.4035 12 20.4035 12 20.4035C12 20.4035 4.50731 20.4035 2.60961 19.8895C1.58148 19.6127 0.771054 18.802 0.4942 17.7741C0 15.9158 0 12.0015 0 12.0015C0 12.0015 0 8.10691 0.4942 6.22899C0.770871 5.20104 1.60125 4.37066 2.60943 4.09399C4.48753 3.59961 11.9998 3.59961 11.9998 3.59961C11.9998 3.59961 19.5122 3.59961 21.3903 4.11358ZM15.8549 12.0016L9.60788 15.5996V8.40355L15.8549 12.0016Z" fill="white"/>
                                    </g>
                                    </svg>
                                </MediaIcon>
                            </Socials>
                        </Links>
                        <CreatexDescribe>
                            Createx Construction Bureau has been successfully 
                            operating in the USA construction market since 2000. 
                            We are proud to offer you quality construction and 
                            exemplary service. Our mission is to set the highest 
                            standards for construction sphere.
                        </CreatexDescribe>
                    </CreatexSocials>
                    <TouchContainer>
                        <TouchTitle>
                            Let’s stay in touch
                        </TouchTitle>
                        <TouchInput>
                            <EmailInput placeholder="Your email address"></EmailInput>
                            <SubsButton>SUBSCRIBE</SubsButton>
                        </TouchInput>
                        <TouchExp>
                            *Subscribe to our newsletter to receive 
                            communications and early updates from 
                            Createx Construction Bureau.
                        </TouchExp>
                    </TouchContainer>
                </FirstContentLine>
                <SecondContentLine>
                    <InfoSection>
                        <InfoTitle>HEAD OFFICE</InfoTitle>
                        <InfoAllArticles>
                            <InfoArticle>
                                Address: <InfoOpasity style={{marginLeft: "4px"}}>8502 Preston Rd. Inglewood, New York</InfoOpasity>
                            </InfoArticle>
                            <InfoArticle>
                                Call: <InfoOpasity style={{marginLeft: "4px"}}>(405) 555-0128</InfoOpasity>
                            </InfoArticle>
                            <InfoArticle>
                                Email: <InfoOpasity style={{marginLeft: "4px"}}>hello@createx.com</InfoOpasity>
                            </InfoArticle>
                        </InfoAllArticles>
                    </InfoSection>
                    <InfoSection>
                        <InfoTitle>WHO WE ARE</InfoTitle>
                        <InfoAllArticles>
                            <InfoArticle>
                                <InfoOpasity>About Us</InfoOpasity>
                            </InfoArticle>
                            <InfoArticle>
                                <InfoOpasity>Available Positions</InfoOpasity>
                            </InfoArticle>
                            <InfoArticle>
                                <InfoOpasity>Contacts</InfoOpasity>
                            </InfoArticle>
                        </InfoAllArticles>
                    </InfoSection>
                    <InfoSection>
                        <InfoTitle>OUR EXPERIENCE</InfoTitle>
                        <InfoAllArticles>
                            <InfoArticle>
                                <InfoOpasity>Services</InfoOpasity>
                            </InfoArticle>
                            <InfoArticle>
                                <InfoOpasity>Work</InfoOpasity>
                            </InfoArticle>
                            <InfoArticle>
                                <InfoOpasity>News</InfoOpasity>
                            </InfoArticle>
                        </InfoAllArticles>
                    </InfoSection>
                </SecondContentLine>
                <ThirdContentLine>
                    <CopyRightContainer>
                        <p>© All rights reserved. Made with</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99925 13.2715C4.93321 11.5252 3.22318 9.78955 2.39626 8.28361C1.54992 6.74228 1.62377 5.4441 2.0934 4.52273C3.05872 2.62892 5.80378 2.02333 7.4763 4.13865L7.99921 4.80001L8.52217 4.13868C10.195 2.02327 12.9402 2.62896 13.9055 4.52273C14.3751 5.44409 14.4489 6.74226 13.6025 8.28359C12.7756 9.78954 11.0654 11.5252 7.99925 13.2715ZM7.99928 2.73726C5.64647 0.501518 2.17555 1.42555 0.905488 3.91723C0.20846 5.2847 0.198939 7.05212 1.22753 8.92536C2.247 10.782 4.2796 12.7417 7.67675 14.6194L7.99924 14.7976L8.32173 14.6194C11.719 12.7417 13.7517 10.782 14.7712 8.92537C15.7999 7.05214 15.7904 5.28472 15.0934 3.91723C13.8233 1.4255 10.3523 0.501552 7.99928 2.73726Z" fill="#FF5A30"/>
                        </svg>
                        <p>by Createx Studio</p>
                    </CopyRightContainer>
                    <ToStartContainer>
                        <ToStartText>GO TO TOP</ToStartText>
                        <ToStartButton onClick={scrollToTop}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071Z" fill="white"/>
                            </svg>
                        </ToStartButton>
                    </ToStartContainer>
                </ThirdContentLine>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer