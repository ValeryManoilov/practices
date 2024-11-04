import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 64%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    padding: 20px;
`

export const LeftPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 51%;
`

export const LogoImg = styled.header`
    display: flex;
`

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: space-between;
    gap: 9%;
    width: 70%;
`

export const NavLink = styled.a`
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
    color: #424551;
    cursor: pointer;
`

export const ContactsPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 34%;
`

export const Contact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
` 

export const ContactTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`


export const ContactImg = styled.div`
    padding: 5px 0;
`

export const ContactTitle = styled.h3`
    color: #424551;
    font-size: 0.875em;
    margin: 0;
    font-weight: bold;
    line-height: 150%;
`

export const ContactText = styled.p`
    color: #1E212C;
    font-size: 1.125em;
    margin: 0;
    line-height: 150%;
`

function Header()
{
    return(
        <HeaderContainer>
            <LeftPart>
                <LogoImg>
                    <svg width="130" height="22" viewBox="0 0 130 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_131992_116)">
                    <path d="M0 11.0998C0 4.9998 3.3 1.2998 8.7 1.2998C12.8 1.2998 16.1 3.7998 16.7 7.4998C16.8 7.8998 16.5 8.1998 16.1 8.1998H13.5C13.2 8.1998 13 7.9998 12.9 7.6998C12.4 5.7998 10.8 4.5998 8.7 4.5998C5.8 4.5998 4 7.0998 4 11.0998C4 15.0998 5.8 17.5998 8.8 17.5998C10.9 17.5998 12.4 16.4998 13 14.6998C13.1 14.3998 13.3 14.1998 13.6 14.1998H16.2C16.6 14.1998 16.9 14.5998 16.8 14.8998C16.2 18.4998 13 20.8998 8.8 20.8998C3.3 20.8998 0 17.0998 0 11.0998Z" fill="#1E212C"/>
                    <path d="M24.2997 20.4001H21.3997C21.0997 20.4001 20.8997 20.2001 20.8997 19.9001V2.60006C20.8997 2.20006 21.2997 1.80006 21.6997 1.80006H28.6997C32.7997 1.80006 35.2997 4.10006 35.2997 7.70006C35.2997 9.80006 34.2997 11.7001 32.5997 12.7001C32.1997 12.9001 32.0997 13.4001 32.2997 13.7001L35.3997 19.6001C35.5997 19.9001 35.2997 20.3001 34.9997 20.3001H31.6997C31.4997 20.3001 31.2997 20.2001 31.1997 20.0001L28.2997 14.0001C28.1997 13.7001 27.8997 13.6001 27.5997 13.6001H25.2997C24.9997 13.6001 24.7997 13.8001 24.7997 14.1001V20.0001C24.8997 20.2001 24.5997 20.4001 24.2997 20.4001ZM24.8997 10.2001C24.8997 10.5001 25.0997 10.7001 25.3997 10.7001H28.3997C30.3997 10.7001 31.4997 9.60006 31.4997 7.80006C31.4997 6.00006 30.2997 4.90006 28.3997 4.90006H25.4997C25.1997 4.90006 24.9997 5.10006 24.9997 5.40006V10.2001H24.8997Z" fill="#1E212C"/>
                    <path d="M51.4998 20.4001H40.4998C40.0998 20.4001 39.7998 20.1001 39.7998 19.7001V2.50006C39.7998 2.10006 40.0998 1.80006 40.4998 1.80006H51.4998C51.8998 1.80006 52.1998 2.10006 52.1998 2.50006V4.40006C52.1998 4.80006 51.8998 5.10006 51.4998 5.10006H44.1998C43.8998 5.10006 43.6998 5.30006 43.6998 5.60006V9.00006C43.6998 9.30006 43.8998 9.50006 44.1998 9.50006H50.9998C51.3998 9.50006 51.6998 9.80006 51.6998 10.2001V11.9001C51.6998 12.3001 51.3998 12.6001 50.9998 12.6001H44.1998C43.8998 12.6001 43.6998 12.8001 43.6998 13.1001V16.9001C43.6998 17.2001 43.8998 17.4001 44.1998 17.4001H51.4998C51.8998 17.4001 52.1998 17.7001 52.1998 18.1001V20.0001C52.1998 20.1001 51.8998 20.4001 51.4998 20.4001Z" fill="#1E212C"/>
                    <path d="M66.9999 15.9001H61.2999C60.9999 15.9001 60.7999 16.1001 60.6999 16.3001L59.5999 20.0001C59.4999 20.3001 59.2999 20.4001 58.9999 20.4001H56.3999C55.9999 20.4001 55.6999 20.0001 55.7999 19.6001L61.7999 2.20006C61.8999 2.00006 62.0999 1.80006 62.3999 1.80006H66.0999C66.3999 1.80006 66.5999 2.00006 66.6999 2.20006L72.6999 19.6001C72.7999 20.0001 72.4999 20.4001 72.0999 20.4001H69.1999C68.8999 20.4001 68.6999 20.2001 68.5999 20.0001L67.4999 16.3001C67.4999 16.1001 67.1999 15.9001 66.9999 15.9001ZM62.0999 13.0001H66.1999C66.3999 13.0001 66.4999 12.8001 66.4999 12.6001L64.2999 5.60006H64.0999L61.8999 12.6001C61.7999 12.8001 61.8999 13.0001 62.0999 13.0001Z" fill="#1E212C"/>
                    <path d="M79.0001 19.7005V5.50045C79.0001 5.20045 78.8001 5.00045 78.5001 5.00045H74.1001C73.7001 5.00045 73.3001 4.70045 73.3001 4.20045V2.50045C73.3001 2.10045 73.6001 1.70045 74.1001 1.70045H87.7001C88.1001 1.70045 88.5001 2.00045 88.5001 2.50045V4.20045C88.5001 4.60045 88.2001 5.00045 87.7001 5.00045H83.3001C83.0001 5.00045 82.8001 5.20045 82.8001 5.50045V19.8004C82.8001 20.2004 82.5001 20.5005 82.1001 20.5005H79.6001C79.3001 20.4004 79.0001 20.1005 79.0001 19.7005Z" fill="#1E212C"/>
                    <path d="M103.8 20.4001H92.7999C92.3999 20.4001 92.0999 20.1001 92.0999 19.7001V2.50006C92.0999 2.10006 92.3999 1.80006 92.7999 1.80006H103.8C104.2 1.80006 104.5 2.10006 104.5 2.50006V4.40006C104.5 4.80006 104.2 5.10006 103.8 5.10006H96.4999C96.1999 5.10006 95.9999 5.30006 95.9999 5.60006V9.00006C95.9999 9.30006 96.1999 9.50006 96.4999 9.50006H103.3C103.7 9.50006 104 9.80006 104 10.2001V11.9001C104 12.3001 103.7 12.6001 103.3 12.6001H96.4999C96.1999 12.6001 95.9999 12.8001 95.9999 13.1001V16.9001C95.9999 17.2001 96.1999 17.4001 96.4999 17.4001H103.8C104.2 17.4001 104.5 17.7001 104.5 18.1001V20.0001C104.5 20.1001 104.2 20.4001 103.8 20.4001Z" fill="#1E212C"/>
                    <path d="M117.7 9.7L111.5 1.6C111.1 1.2 110.6 1 110.1 1C109.6 1 109.1 1.2 108.7 1.6C108 2.4 108 3.6 108.7 4.4L113.6 11L108.7 17.6C108 18.4 108 19.6 108.7 20.4C109.1 20.8 109.6 21 110.1 21C110.6 21 111.1 20.8 111.5 20.4L117.7 12.3C118.4 11.7 118.4 10.5 117.7 9.7Z" fill="#FF5A30"/>
                    <path d="M120.343 9.7L126.543 1.6C126.943 1.2 127.443 1 127.943 1C128.443 1 128.943 1.2 129.343 1.6C130.043 2.4 130.043 3.6 129.343 4.4L124.443 11L129.343 17.6C130.043 18.4 130.043 19.6 129.343 20.4C128.943 20.8 128.443 21 127.943 21C127.443 21 126.943 20.8 126.543 20.4L120.343 12.3C119.643 11.7 119.643 10.5 120.343 9.7Z" fill="#FF5A30"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_131992_116">
                    <rect width="130" height="22" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </LogoImg>
                <NavContainer>
                    <NavLink>About Us</NavLink>
                    <NavLink>Services</NavLink>
                    <NavLink>Work</NavLink>
                    <NavLink>News</NavLink>
                    <NavLink>Contacts</NavLink>
                </NavContainer>
            </LeftPart>
            <ContactsPart>
                <Contact>
                    <ContactImg>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1663 4.86947C12.7856 4.86947 11.6663 5.98875 11.6663 7.36947V32.6299C11.6663 34.0106 12.7856 35.1299 14.1663 35.1299H25.833C27.2137 35.1299 28.333 34.0106 28.333 32.6299V7.36947C28.333 5.98875 27.2137 4.86947 25.833 4.86947H25.694L25.2881 5.84355C25.0293 6.46458 24.4225 6.86909 23.7497 6.86909H16.2497C15.5769 6.86909 14.9701 6.46458 14.7113 5.84355L14.3053 4.86947H14.1663ZM8.33301 7.36947C8.33301 4.1478 10.9447 1.53613 14.1663 1.53613H25.833C29.0547 1.53613 31.6663 4.1478 31.6663 7.36947V32.6299C31.6663 35.8515 29.0547 38.4632 25.833 38.4632H14.1663C10.9447 38.4632 8.33301 35.8515 8.33301 32.6299V7.36947Z" fill="#FF5A30"/>
                        </svg>
                    </ContactImg>
                    <ContactTextContainer>
                        <ContactTitle>Call us</ContactTitle>
                        <ContactText>(405) 555-0128</ContactText>
                    </ContactTextContainer>
                </Contact>
                <Contact>
                    <ContactImg>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5387 17.6113C36.3013 19.2559 35.7387 20.8189 34.905 22.2563C34.9675 22.6121 34.9996 22.9719 34.9996 23.3331C34.9996 24.5878 34.636 25.7886 33.9626 26.8796C33.6264 27.4242 33.5399 28.0623 33.5067 28.4839C33.4685 28.9671 33.4814 29.4958 33.5159 30.0037C33.5546 30.5735 33.6246 31.1717 33.7048 31.736C33.0543 31.5463 32.3492 31.3558 31.6763 31.204C31.1166 31.0777 30.5439 30.9701 30.0252 30.9165C29.5727 30.8698 28.9188 30.8336 28.3341 31.0226C27.0556 31.4359 25.6488 31.6665 24.1662 31.6665C22.403 31.6665 20.7837 31.3535 19.3643 30.8098C19.0229 30.8253 18.679 30.8331 18.3328 30.8331C16.3252 30.8331 14.3929 30.5691 12.585 30.0811C15.2132 33.1209 19.546 34.9998 24.1662 34.9998C25.9711 34.9998 27.7034 34.7227 29.2999 34.2135C29.3027 34.2136 29.3078 34.2135 29.3153 34.2133C29.3563 34.2125 29.4701 34.2103 29.6827 34.2322C30.017 34.2667 30.4469 34.3437 30.9428 34.4556C31.9301 34.6783 33.0395 35.007 33.9041 35.2814C35.7377 35.8635 37.5143 34.2634 37.1866 32.4027C37.0456 31.6019 36.899 30.6245 36.8415 29.7778C36.8126 29.3521 36.8094 29.0026 36.8297 28.7462C36.8381 28.6399 36.8488 28.5733 36.8556 28.5379C37.7933 26.9846 38.3329 25.216 38.3329 23.3331C38.3329 21.2105 37.6736 19.2723 36.5387 17.6113Z" fill="#FF5A30"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.3287 9.49661C7.08211 11.2146 5.83363 13.4698 5.83363 15.833C5.83363 17.0114 6.1404 18.1463 6.71594 19.2017C6.93515 19.6037 6.99734 20.0183 7.01957 20.299C7.04382 20.6051 7.03173 20.9197 7.00512 21.2139C6.95182 21.8028 6.8247 22.4701 6.67221 23.1274C6.49384 23.8962 6.26529 24.7162 6.03337 25.486C6.91379 25.166 7.87606 24.8381 8.78831 24.5719C9.52559 24.3568 10.2702 24.1702 10.9328 24.0654C11.5037 23.9751 12.332 23.8864 13.0452 24.1332C14.6458 24.6869 16.4363 24.9997 18.3336 24.9997C21.9122 24.9997 25.0904 23.8886 27.3386 22.1694C29.5852 20.4514 30.8336 18.1962 30.8336 15.833C30.8336 13.4698 29.5852 11.2146 27.3386 9.49661C25.0904 7.77745 21.9122 6.66634 18.3336 6.66634C14.755 6.66634 11.5768 7.77745 9.3287 9.49661ZM7.30387 6.84875C10.1831 4.64702 14.0882 3.33301 18.3336 3.33301C22.5791 3.33301 26.4842 4.64702 29.3634 6.84875C32.2441 9.05167 34.167 12.2131 34.167 15.833C34.167 19.4529 32.2441 22.6143 29.3634 24.8173C26.4842 27.019 22.5791 28.333 18.3336 28.333C16.0952 28.333 13.9571 27.9681 12.0157 27.3041C12.0138 27.3095 11.8563 27.2941 11.4534 27.3578C10.989 27.4313 10.3962 27.5751 9.72187 27.7719C8.37942 28.1635 6.87184 28.7176 5.72353 29.1645C3.73415 29.9387 1.70756 28.0281 2.37783 25.9929C2.73308 24.9142 3.15205 23.5511 3.42512 22.3741C3.56268 21.7812 3.65194 21.2827 3.68535 20.9135C3.69694 20.7853 3.69994 20.6919 3.69927 20.6288C2.93213 19.1629 2.5003 17.5417 2.5003 15.833C2.5003 12.2131 4.42314 9.05167 7.30387 6.84875ZM3.69378 20.5379C3.69394 20.5377 3.69475 20.5422 3.69572 20.5518C3.6941 20.5429 3.69362 20.5381 3.69378 20.5379Z" fill="#FF5A30"/>
                        </svg>
                    </ContactImg>
                    <ContactTextContainer>
                        <ContactTitle>Talk to us</ContactTitle>
                        <ContactText>hello@createx.com</ContactText>
                    </ContactTextContainer>
                </Contact>
            </ContactsPart>
        </HeaderContainer>
    )
}

export default Header;