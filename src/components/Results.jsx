import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
    color: #fff;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 1rem;
    `
const Text = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Image = styled.img`
    display: block;
    width: 100px;

`
const Price = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Results = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
  
    return (
    <Container>
        
    <Image 
    src={`https://cryptocompare.com/${IMAGEURL}`} 
    alt="cripto coin" />
    <div>
        <Price> The price is: <span>{PRICE}</span></Price>
        <Text> The high price in the day is: <span>{HIGHDAY}</span></Text>
        <Text> The low price in the day is: <span>{LOWDAY}</span></Text>
        <Text> Variation: <span>{CHANGEPCT24HOUR}</span></Text>
        <Text> Last update: <span>{LASTUPDATE}</span></Text>
    </div>
    </Container>
  )
}

export default Results