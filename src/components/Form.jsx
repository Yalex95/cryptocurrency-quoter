import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import useSelectCurrency from '../hooks/useSelectCurrency'
import { currencies } from '../data/currency'
import Error from './Error'

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
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
    // extract hook
  const [currency,SelectCurrency] = useSelectCurrency('Choose a Currency', currencies)
  const [criptoCoin, SelectCriptoCoin] =useSelectCurrency('Choose a Criptocoin', criptos)
  
  useEffect(() => {
    const consultAPI = async()=>{
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resp = await fetch(url)
      const result = await resp.json()
      const arrayCriptos = result.Data.map(({CoinInfo}) =>{
        
        const obj = {
          id: CoinInfo.Name,
          name: CoinInfo.FullName
        }
        return obj
      })
      setCriptos(arrayCriptos)
    
    }
    consultAPI();
  }, []);
const handleSubmit=e=>{
  e.preventDefault();
  if ([currency,criptoCoin].includes('')) {
    setError(true)
    return
  }
  setError(false)
}
  return (
    <>
    {error && <Error>All fields are required</Error>}
    <form onSubmit={handleSubmit}>
      
      <SelectCurrency/>
      <SelectCriptoCoin/>
        <InputSubmit type="submit" value="Qoute" />
    </form>
    </>
  )
}

export default Form