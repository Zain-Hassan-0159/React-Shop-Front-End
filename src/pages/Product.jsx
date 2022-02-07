import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

function Product() {
    return (
        <>
           <Navbar /> 
           <Announcement />
           <Wrapper>
                <Left>
                     <img src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=372&q=80" alt="" />
                </Left>
                <Right>
                    <h2>Product Name</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis mi non pharetra semper. Aenean mattis aliquet lorem sed auctor. Cras placerat et velit nec lacinia. Sed sed magna ac nulla pulvinar pharetra id eget mi. Vestibulum posuere magna eget purus ornare, ut maximus tortor aliquam. Morbi ut dapibus nisi, vel ornare mi. Praesent ac quam nec eros bibendum gravida. Morbi pellentesque eros ac posuere condimentum. Curabitur a enim at sapien sagittis egestas eu ultricies arcu. Aliquam erat volutpat. Vestibulum feugiat vehicula sapien a sodales. Vestibulum eu lectus sit amet nunc feugiat finibus eu non metus.
                    </p>
                    <Price>$ 20</Price>
                    <ColorWrapper>
                        <h5>Color:</h5>
                        <Color color="black" />
                        <Color color="blue" />
                        <Color color="gray" />
                    </ColorWrapper>
                    <SizeWrapper>
                        <h5>Size:</h5>
                        <select>
                            <option selected disabled>Select Size</option>
                            <option>SM</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </select>
                    </SizeWrapper>
                    <Counter>
                        <Remove />
                        <Nos>1</Nos>
                        <Add />
                    </Counter>
                    <Button>Add to Cart</Button>
                </Right>
           </Wrapper>
           <Newsletter />
           <Footer />
        </>
    )
}

export default Product

const Wrapper = styled.div`
    padding: 40px 20px;
    display: flex;
`

const Left = styled.div`
    flex: 3;
    padding: 0 30px;
    img{
        height: 90vh;
        width: 100%;
        object-fit: cover;
    }
`

const Right = styled.div`
    flex: 5;
    padding: 0 30px;
    h2{
        margin-bottom: 20px;
    }
    p{
        margin-bottom: 20px;
    }
`

const Price = styled.div`
    font-size: 30px;
    margin-bottom: 20px;
`

const ColorWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    h5{
        font-size: 25px;
        font-weight: normal;
    }
`

const Color = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: 10px;
    background-color: ${props=>props.color};
`

const Counter = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Nos = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgray;
    font-size: 20px;
    margin: 0 10px;
`

const Button = styled.button`
    padding: 10px 20px;
    background: none;
    border: 1px solid teal;
    cursor: pointer;
`

const SizeWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    h5{
        font-size: 25px;
        font-weight: normal;
    }

    select{
        margin-left: 10px;
    }
`

