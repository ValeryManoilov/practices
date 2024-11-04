import styled from "styled-components"
import { useState } from "react";
import { Formik, Form, Field} from 'formik';
import * as Yup from "yup"
import formimg from "../../assets/images/formimg.jpg"


export const FormContainer = styled.div`
    margin-top: 15.1%;
    background-image: url("${formimg}");
    width: 100%;
    height: 826px;
    background-size: cover;
    position: relative;
`
export const FormContent = styled.div`
    width: 21.6%;
    position: absolute;
    top: 4.2%;
    right: 18%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 24px;
    background-color: #FFFFFF;
    padding: 2.5% 2.1% 2.5% 2.1%;
    border-radius: 4px;
`

export const FormTitle = styled.p`
    font-size: 1.75em;
    font-weight: bold;
    margin: auto;
    color: #1E212C;
`

export const Fields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Input = styled.input`
    width: 100%;
    border: 1px solid #D7DADD;
    padding: 2.89% 0 2.89% 0;
    border-radius: 4px;
    &::placeholder{
        color: #9A9CA5;
        padding-left: 16px;
        font-size: 0.875em;
    }
`

export const CreatexField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const TextLabel = styled.p`
    font-size: 0.875em;
    color: #424551;
    margin: 0;
`

export const CheckBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 2.4%;
    & > p{
        color: #424551;
        font-size: 0.875em;
    }
    cursor: pointer
`

export const SendButton = styled.button`
    font-size: 0.875em;
    font-weight: bold;
    background-color: #FF5A30;
    color: #FFFFFF;
    margin: auto;
    padding: 14px 32px 14px 32px;
    border: none;
    border-radius: 4px;
    cursor: pointer
`


export const ErrorMessage = styled.div`
`

export const CheckBoxContent = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 3px;
    background-color: #FF5A30;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
`


export const ConfirmMark = styled.div`
`

function CreatexForm()
{
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const validations = Yup.object().shape({
        name: Yup.string().min(4, 'Very short name').max(50, 'Very long name').required("Required"),
        email: Yup.string().email("Invalid email required"),
        phone: Yup.number().integer("Only digits").required("Required"),
        text: Yup.string().max(200, 'Very long message').required("Required")
    })

    const [dataConfirm, setDataConfirm] = useState(false)

    function settingDataConfirm(e)
    {
        e.preventDefault();
        setDataConfirm(!dataConfirm)
    }
    function isValid(errors)
    {
        if (!errors.text && !errors.name && !errors.email && !errors.phone && dataConfirm)
        {
            return true
        }
        return false
    }
    function setData(values)
    {
        setName(values.name)
        setPhone(values.phone)
        setEmail(values.email)
        setText(values.text)
    }
    return(
        <FormContainer>
            <Formik 
            validationSchema={validations}
            initialValues={{
                name: '',
                email: '',
                phone: '',
                text: ''
              }}
            onSubmit={values => {
            console.log(values);
            }}
            >
            {({errors, touched, values, isSubmitting}) => (
                <Form>
                    <FormContent>
                        <FormTitle>A quick way to discuss details</FormTitle>
                        <Fields>
                            <CreatexField>
                                <TextLabel>Name*</TextLabel>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    id="name__field"
                                    values={values.name}
                                    component={Input}
                                />
                                {errors.name && touched.name ? (<ErrorMessage>{errors.name}</ErrorMessage>) : null}
                            </CreatexField>
                            <CreatexField>
                                <TextLabel>Phone*</TextLabel>
                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="Your phone number"
                                    id="phone__field"
                                    values={values.phone}
                                    component={Input}
                                />
                                {errors.phone && touched.phone ? (<ErrorMessage>{errors.phone}</ErrorMessage>) : null}
                            </CreatexField>
                            <CreatexField>
                                <TextLabel>Email</TextLabel>
                                <Field
                                    type="text"
                                    name="email"
                                    placeholder="Your working email"
                                    id="email__field"
                                    values={values.email}
                                    component={Input}
                                />
                                {errors.email && touched.email ? (<ErrorMessage>{errors.email}</ErrorMessage>) : null}
                            </CreatexField>
                            <CreatexField>
                                <TextLabel>Message*</TextLabel>
                                <Field
                                    type="text"
                                    name="text"
                                    placeholder="Your message"
                                    id="textarea__field"
                                    values={values.text}
                                    component={Input}
                                />
                                {errors.text && touched.text ? (<ErrorMessage>{errors.text}</ErrorMessage>) : null}
                            </CreatexField>
                        </Fields>
                        <CheckBox>
                            <CheckBoxContent onClick={(event) => settingDataConfirm(event)}>
                                <ConfirmMark>
                                    {
                                        dataConfirm ? 
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.82771 0.195262C10.0574 0.455612 10.0574 0.877722 9.82771 1.13807L3.94536 7.80474C3.71564 8.06509 3.34319 8.06509 3.11347 7.80474L0.17229 4.4714C-0.05743 4.21105 -0.05743 3.78894 0.17229 3.5286C0.40201 3.26825 0.77446 3.26825 1.00418 3.5286L3.52941 6.39052L8.99582 0.195262C9.22554 -0.0650874 9.59799 -0.0650874 9.82771 0.195262Z" fill="white"/>
                                        </svg>
                                        : <></>
                                    }
                                </ConfirmMark>
                            </CheckBoxContent>
                            <p>I agree to receive communications from Createx Construction Bureau.</p>
                        </CheckBox>
                        <SendButton type="submit" style={{backgroundColor: (isValid(errors)) ? "green" : "#FF5A30"}} onClick={() => {if (isValid(errors)){setData(values)}} }>
                            SEND REQUEST
                        </SendButton>
                    </FormContent>
                </Form>
                )
                }
            </Formik>
        </FormContainer>
    )
}

export default CreatexForm