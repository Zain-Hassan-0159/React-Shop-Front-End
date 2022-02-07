import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'

function ProductList() {
    return (
        <>
            <Navbar />
            <Announcement />
            <FiltersContainer>
            <h2>Dresses</h2>
            <Filters>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <select>
                        <option selected disabled>Color</option>
                        <option>Red</option>
                        <option>White</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Yellow</option>
                    </select>
                    <select>
                        <option selected disabled>Size</option>
                        <option>SM</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <select>
                        <option selected disabled>Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </select>
                </Filter>
            </Filters>
            </FiltersContainer>
            <Products />
            <Newsletter />
            <Footer />
        </>
    )
}

export default ProductList

const FiltersContainer = styled.div`
    padding: 40px 20px;
    h2{
        margin-bottom: 20px;
    }
`

const Filters = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    select{
        padding: 10px 20px;
        margin-left: 20px;
    }
`

const FilterText = styled.div`
    font-weight: bold;
`
