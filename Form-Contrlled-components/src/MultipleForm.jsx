import React from 'react'
import { useState } from 'react'

function MultipleForm() {
    const [checked, setChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    if(!checked) {
        return (
            <div>
                <h1>Checkbox is not checked</h1>
                <button onClick={() => setChecked(true)}>Check the box</button>
            </div>
        )
    }

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };


    const handleSubmitted = (e) => {
        e.preventDefault();
        console.log("submitted", formData);
    }
    

  return (
    <form onSubmit={handleSubmitted}>
        isChecked: <input 
        type="checkbox" 
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        />

        <input type="text" 
        name='name' 
        placeholder='Enter your name'
        value={formData.name}
        onChange={handleChange}
        />
        <input type="email" 
        name='email' 
        placeholder='Enter your email'
        value={formData.email}
        onChange={handleChange}
        />
        <input type="password" 
        name='password' 
        placeholder='Enter your password'
        value={formData.password}
        onChange={handleChange}
        />
        <button type="submit">Submit</button>   


        <select name="gender"
        value={formData.gender || ''}
        onChange={handleChange}
        >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>

    </form>
  )
}

export default MultipleForm