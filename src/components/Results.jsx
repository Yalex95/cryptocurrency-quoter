import styled from '@emotion/styled'
import React from 'react'


const Results = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
  
    return (
    <>
    <p> The price is: {PRICE}</p>
    <p> The high price in the day is: {HIGHDAY}</p>
    <p> The low price in the day is: {LOWDAY}</p>
    <p> Variation: {CHANGEPCT24HOUR}</p>
    {/* <img src={IMAGEURL} alt="cripto coin" /> */}
    <p> Last update: {LASTUPDATE}</p>
    </>
  )
}

export default Results