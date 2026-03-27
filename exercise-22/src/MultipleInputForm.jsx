import React from 'react'
import { useState } from 'react'
import './MultipleInputForm.css'

function MultipleInputForm() {
    const [checked, setChecked] = useState(false);
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            terms: false,
            country: 'us',
        });

    if(!checked) {
        return (
            <div>
                <h1>Checkbox is not checked</h1>
                <button onClick={() => setChecked(true)}>Check the box</button>
            </div>
        )
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }
  return (
    <div className="form-container">
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name='name' placeholder='Enter your name' />
        </div>
        <div className="form-group">
          <input type="email" name='email' placeholder='Enter your email' />
        </div>
        <div className="form-group">
          <input type="password" name='password' placeholder='Enter your password' />
        </div>
        <div className="checkbox-group">
          <input type="checkbox" name='terms' id='terms' />
          <label htmlFor='terms'>I agree to the terms and conditions</label>
        </div>
        <div className="form-group">
          <select name='country' id='country'>
            <option value='us'>United States</option>
            <option value='ca'>Canada</option>
            <option value='uk'>United Kingdom</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      {formData.name && <p>Name: {formData.name}</p>}
      {formData.email && <p>Email: {formData.email}</p>}
      {formData.password && <p>Password: {formData.password}</p>}
      {formData.terms && <p>Terms agreed: {formData.terms.toString()}</p>}
      {formData.country && <p>Country: {formData.country}</p>}
    </div>
  )
}

export default MultipleInputForm