import styled from '@emotion/styled'
import React from 'react'
import useSelectCurrency from '../hooks/useSelectCurrency'
import { currencies } from '../data/currency'

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
    
    margin-top: 30px;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Form = () => {
    // extract hook
  const [currency,SelectCurrency] = useSelectCurrency('Choose a Currency', currencies)
  
  return (
    <form>
      <SelectCurrency/>
      {currency}
        <InputSubmit type="submit" value="Qoute" />
    </form>
  )
}

export default Form