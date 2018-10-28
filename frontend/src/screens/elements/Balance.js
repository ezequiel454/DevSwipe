import React from 'react'
import { Label } from 'semantic-ui-react'

const Balance = ({ value, unit, currency }) => {
  if(value){
    const retorno = value.toLocaleString(unit, { style: 'currency', currency: currency })
    return <Label color='blue'> {retorno} </Label>
  }
  return <Label />
}

export default Balance