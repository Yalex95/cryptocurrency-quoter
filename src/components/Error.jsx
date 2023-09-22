import styled from '@emotion/styled'
import React from 'react'

const Text = styled.div`
    background-color: #B7322C;
    color: #fff;
    font-size: 22px;
    padding: 15px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    text-align: center;
`
const Error = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default Error