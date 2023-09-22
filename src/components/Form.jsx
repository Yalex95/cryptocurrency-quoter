import styled from '@emotion/styled'
import React from 'react'
import useSelectCurrency from '../hooks/useSelectCurrency'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Form = () => {
  return (
    <form>
        <InputSubmit type="submit" value="Qoute" />
    </form>
  )
}

export default Form