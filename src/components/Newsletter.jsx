import { Send } from "@mui/icons-material"
import styled from "styled-components"

function Newsletter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates for your favourite products.</Description>
            <InputContainer>
                <Input type="email" placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
    border: 1px solid lightgray;
`

const Input = styled.input`
    flex: 8;
    border: none;
    padding: 0 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    border-left: 1px solid lightgray;
    cursor: pointer;
    background-color: teal;
    color: white;
`