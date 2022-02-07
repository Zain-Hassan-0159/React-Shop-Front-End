import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

function Cart() {
  return (
      <>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton type="outline">Continue Shopping</TopButton>
                <TopText>
                    Shoping Bag(2)
                </TopText>
                <TopText>
                    Your Wishlist(0)
                </TopText>
                <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Products>
                    <Product>
                        <img src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="shoes" />
                        <Description>
                            <Name><b>Product:</b>Best Shoes</Name>
                            <Id><b>Id:</b>912345667</Id>
                            <Color></Color>
                            <Size><b>Size:</b>37.5</Size>
                        </Description>
                        <CounterPrice>
                            <Counter>
                                <Remove />
                                <Nos>1</Nos>
                                <Add />
                            </Counter>
                            <p>$30</p>
                        </CounterPrice>
                    </Product>
                    <Product>
                        <img src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="shoes" />
                        <Description>
                            <Name><b>Product:</b>Best Shoes</Name>
                            <Id><b>Id:</b>912345667</Id>
                            <Color></Color>
                            <Size><b>Size:</b>37.5</Size>
                        </Description>
                        <CounterPrice>
                            <Counter>
                                <Remove />
                                <Nos>1</Nos>
                                <Add />
                            </Counter>
                            <p>$30</p>
                        </CounterPrice>
                    </Product>
                </Products>
                <Summary>
                    <h2>Order Summary</h2>
                    <div className="row">
                        <span>Subtotal</span>
                        <span>$80</span>
                    </div>
                    <div className="row">
                        <span>Estimated Shipping</span>
                        <span>$5.90</span>
                    </div>
                    <div className="row">
                        <span>Shipping Discount</span>
                        <span>$-5.90</span>
                    </div>
                    <div className="row">
                        <span>Total</span>
                        <span>$90</span>
                    </div>
                    <button>Checkout Now</button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
      </>
  );
}

export default Cart

const Wrapper = styled.div`
    padding: 40px 20px;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`

const TopButton = styled.a`
    background-color: ${(props)=> props.type === 'outline' ? 'transparent' : 'black'};
    color: ${(props)=> props.type === 'filled' && 'white'};
    border: 1px solid black;
    padding: 10px 20px;
`

const TopText = styled.p`
    text-decoration: underline;
`

const Bottom = styled.div`
    display: flex;
`

const Products = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    img{
        width: 200px;
        height: 200px;
        object-fit: contain;
        flex: 1;
    }
`

const Description = styled.div`
    margin-left: 20px;
    flex: 2;
`

const Name = styled.div`
    margin-bottom: 10px;
`

const Id = styled.div`
    margin-bottom: 10px;
`

const Size = styled.div`
    margin-bottom: 10px;
`

const Color = styled.div`
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
`

const CounterPrice = styled.div`
    flex: 2;
    p{
        font-size: 25px;
    }
`

const Counter = styled.div`
    display: flex;
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

const Summary = styled.div`
    flex: 1;
    padding: 40px 20px;
    border: 1px solid #757575;
    border-radius: 8px;
    height: fit-content;
    h2{
        margin-bottom: 30px;
    }
    .row{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    button{
        background-color: black;
        color: white;
        padding: 10px 20px;
        border: none;
    }
`
