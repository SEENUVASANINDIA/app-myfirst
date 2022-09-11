import React from 'react'

function InputElement({type,palceholder,name}) {
  return (
    <input

        type={type}
        palceholder={palceholder}
        name={name}
        autocomplete="off"
        required
    />
  )
}

export default InputElement