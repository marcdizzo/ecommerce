import React from 'react'

const CustomInput = (props) => {
    const{type,name,placeholder,classname,value,onChange} = props;
  return (
    <div>
        <input type={type} 
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // required
        className={`form-control ${classname}`} />
    </div>
  )
}

export default CustomInput;