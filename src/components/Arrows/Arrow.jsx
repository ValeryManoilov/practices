import styled from "styled-components"

export const AbsArrow = styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    background-color: #FFFFFF;
    opacity: ${(props) => (props.bcolor === "#FF5A30" ? 1 : 0.5)};
    border-radius: 50%;
    &:focus{
        background-color: ${props => props.bcolor};
        width: 48px;
        height: 48px;
        border: none;
        opacity: 1;
    }
    &:focus > svg > path
    {
        fill: ${props => props.fill};
    }
`


function Arrow(props)
{
    let vector = (props.vector == "left");
    
    return(
        <div>
            {vector ?
            <AbsArrow bcolor={props.backgroundColorActive} fill={props.fill} tabIndex={0}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
            </svg>
            </AbsArrow>:
            <AbsArrow bcolor={props.backgroundColorActive} fill={props.fill} tabIndex={0}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="#424551"/>
            </svg>
            </AbsArrow>
        }
        </div>
    )
}
export default Arrow