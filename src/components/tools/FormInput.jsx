/* eslint-disable react/prop-types */
// import { useState } from "react";

export function FormInput({labelTitle, value, type, setValue, maxLength, isRequired}) {
  return (
    <>
    <label>{labelTitle}</label>
    <input value={value} type={type} onChange={e => setValue(e.target.value)} maxLength={maxLength} required={isRequired}/>
    </>
  )
}

export function FormTextArea({labelTitle, value, setValue, maxLength, isRequired}) {
  return (
    <>
    <label>{labelTitle}</label>
    <textarea value={value} onChange={e => setValue(e.target.value)} maxLength={maxLength} required={isRequired}/>
    </>
  )
}
  
// export default FormInput