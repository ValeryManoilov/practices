import styled from "styled-components"

export const SecondFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const SecondFormContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 64%;
    margin-top: 8.75%;
`

export const SecondFormTitle = styled.p`
    margin: auto;
    color: #1E212C;
    font-size: 1.75em;
    font-weight: bold;
`

export const SecondFormInputContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
    align-items: end;
    margin-top: 1.6%;
`

export const SecondFormLabel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const SecondFormLabelName = styled.p`
    color: #424551;
    font-size: 0.875em;
`

export const SecondFormInput = styled.input`
    padding: 11px 0 11px 16px;
    border-radius: 4px;
    border: 1px solid #9A9CA5;
    &::placeholder{
        color: #9A9CA5;
    }
`

export const SecondFormSendButton = styled.button`
    padding: 0 32px 0 32px;
    background-color: #FF5A30;
    font-size: 0.875em;
    color: #FFFFFF;
    font-weight: bold;
    border: none;
    border-radius: 4px;
`

function SecondForm()
{
    return(
        <SecondFormContainer>
            <SecondFormContent>
                <SecondFormTitle>
                    Want to know more? Ask us a question:
                </SecondFormTitle>
                <SecondFormInputContent>
                    <SecondFormLabel>
                        <SecondFormLabelName>Name</SecondFormLabelName>
                        <SecondFormInput placeholder="Your name"></SecondFormInput>
                    </SecondFormLabel>
                    <SecondFormLabel>
                        <SecondFormLabelName>Phone</SecondFormLabelName>
                        <SecondFormInput placeholder="Your phone"></SecondFormInput>
                    </SecondFormLabel>
                    <SecondFormLabel>
                        <SecondFormLabelName>Message</SecondFormLabelName>
                        <SecondFormInput placeholder="Your message"></SecondFormInput>
                    </SecondFormLabel>
                    <SecondFormSendButton><p>SEND</p></SecondFormSendButton>
                </SecondFormInputContent>
            </SecondFormContent>
        </SecondFormContainer>
    )
}

export default SecondForm