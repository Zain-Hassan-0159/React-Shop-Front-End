import styled from "styled-components"

function Announcement() {
    return (
        <Container>
            Hello there I am announcement bar. 
        </Container>
    )
}

export default Announcement

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
