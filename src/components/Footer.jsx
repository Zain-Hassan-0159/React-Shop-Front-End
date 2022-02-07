import { Facebook, Instagram, LocationCity, LocationOn, Mail, Phone, Pinterest, Twitter } from "@mui/icons-material"
import styled from "styled-components"

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>LOGO.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie euismod elit pulvinar pulvinar. Cras faucibus ante vitae felis fermentum sodales. Donec aliquam tellus urna, id imperdiet leo facilisis mattis. In condimentum sem nec est fringilla, quis imperdiet arcu imperdiet. Curabitur sollicitudin risus velit. Etiam varius id risus sit amet hendrerit. Aliquam lorem tortor, dapibus vel risus quis, placerat mollis ex. Fusce quis mattis purus. Fusce finibus ullamcorper diam id tempus. Nulla venenatis erat eget augue ullamcorper, vitae rutrum nisl convallis.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <h2>Useful Links</h2>
                <ul>
                    <li>
                        <a href="#">Home1</a>
                    </li>
                    <li>
                        <a href="#">Home2</a>
                    </li>
                    <li>
                        <a href="#">Home3</a>
                    </li>
                    <li>
                        <a href="#">Home4</a>
                    </li>
                    <li>
                        <a href="#">Home5</a>
                    </li>
                    <li>
                        <a href="#">Home6</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Home</a>
                    </li>
                </ul>
            </Center>
            <Right>
                <h2>Contact</h2>
                <div>
                    <LocationOn />
                    <p>Location ABC, City XYZ, Country BLAH BLAH...</p>
                </div>
                <div>
                    <Phone />
                    <p>+1234567890</p>
                </div>
                <div>
                    <Mail />
                    <p>mail@dummy.com</p>
                </div>
            </Right>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    padding: 40px 20px;
    display: flex;
`

const Left = styled.div`
    flex: 1;
`

const Logo = styled.a`
    font-weight: bold;
    display: block;
    margin-bottom: 20px;
`

const Desc = styled.p`
    margin-bottom: 20px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    margin-right: 10px;
`

const Center = styled.div`
    flex: 1;
    padding: 0 40px;
    h2{
        margin-bottom: 20px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        li{
            margin-bottom: 20px;
            width: 50%;
            a{
                text-decoration: none;
                color: black;
            }
        }
    }
`

const Right = styled.div`
    flex: 1;
    h2{
        margin-bottom: 20px;
    }

    div{
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        p{
            margin-left: 5px;
        }
    }
`

