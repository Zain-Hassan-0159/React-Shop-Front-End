import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"

import styled from "styled-components"

function Product({item}) {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product

const Info = styled.div`
    opacity: 0;
    position: absolute;
    background: #0000004e;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3ms linear;
    cursor: pointer;
`

const Container = styled.div`
    flex: 1;
    margin: 10px 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: teal;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`
 

const Image = styled.img`
    width: 100%;
    height: 75%;
    object-fit: cover;
`

const Icon = styled.div`
    background: white;
    margin: 5px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 350ms linear;
    &:hover{
        transform: scale(1.2);
        background: teal;
        color: white;
    }
`