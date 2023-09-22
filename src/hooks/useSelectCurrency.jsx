import React from 'react'

const useSelectCurrency = () => {
  const selectCurrency= ()=>{
    console.log('from select currency')
  }
  return [selectCurrency]
}

export default useSelectCurrency