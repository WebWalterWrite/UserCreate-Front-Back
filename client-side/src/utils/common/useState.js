import { useState } from 'react'

const UseInput = (initialValue, type, placeholder, name) => {

    const [ value, setValue ] = useState(initialValue);

    return {
        onChange: e => {
            e.preventDefault(); 
            setValue(e.target.value)
        },
        type,
        placeholder,
        name,
        value
    }
};


export default UseInput;