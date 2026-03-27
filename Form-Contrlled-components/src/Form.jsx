import React from 'react'

function Form() {
    const [name, setName] = React.useState('');

     const handleSubmit = (e) => {
      e.preventDefault();
      console.log("submitted", name);
    };
    const handleChange = (e) => {
      setName(e.target.value);
    };


  return (
   <form action="" onSubmit={handleSubmit}>
    <input 
      type="text" 
      placeholder='Enter your name' 
      value={name}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
   </form>
  )
}

export default Form