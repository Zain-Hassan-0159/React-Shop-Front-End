import React from 'react'
import {Search} from '@mui/icons-material'
import styled from 'styled-components'
import { MenuItem } from '@mui/material'

import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{fontSize:16, color:"gray"}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>LOGO.</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.div`
    font-size: 20px;
    cursor: pointer;
`


const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Logo = styled.div`
    font-weight: bold;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content:end;
`

