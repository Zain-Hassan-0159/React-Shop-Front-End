import styled from "styled-components"

function CategoryItem({item}) {
    return (
        <Container>
            <Image src={item.img} alt={item.title} />
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem

const Container = styled.div`
    margin: 10px 5px;
    flex: 1;
    height: 60vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Info = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`

const Button = styled.button`
    border: none;
    padding: 10px;
    background: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;

`