
import React from 'react'
import { useForm } from 'react-hook-form'

function App() {

  const {register, handleSubmit, watch, formState:{ errors }} = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
   
    <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '200px', margin: '0 auto', marginTop: '50px'}}>
      <h1 style={{marginBottom: '20px', fontSize: '24px', fontWeight: 'semi-bold'}}>React Hooks Form</h1>
     <div>
      <label htmlFor="name">Name</label>
       <input  type="text" placeholder="Name" {...register("name", { required: "Name is required" })} style={{padding: '10px', border: '1px solid #ccc', borderRadius: '4px'}}/>
      {errors.name && <span style={{color: 'red', fontSize: '14px'}}>{errors.name.message}</span>}
     </div>

      <div>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Email" {...register("email", { required: "Email is required" })} 
      style={{padding: '10px', border: '1px solid #ccc', borderRadius: '4px'}}/>
      {errors.email && <span style={{color: 'red', fontSize: '14px'}}>{errors.email.message}</span>}
      </div>

    <div>
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Password" {...register("password", { required: "Password is required" }, 
        { pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 
          validate: (value) => value === password || "Passwords do not match",
          message: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
          minLength: { value: 8, message: "Password must be at least 8 characters long" }
    
        } })}
         style={{padding: '10px', border: '1px solid #ccc', borderRadius: '4px'}}/>
      {errors.password && <span style={{color: 'red', fontSize: '14px'}}>{errors.password.message}</span>}
    </div>

    <div>
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" placeholder="Confirm Password" {...register("confirmPassword", 
      { required: "Confirm Password is required" },
       { validate: (value) => value === password || "Passwords do not match" }, 
       { minLength: { value: 8, message: "Password must be at least 8 characters long" } })}
      style={{padding: '10px', border: '1px solid #ccc', borderRadius: '4px'}}/>
      {errors.confirmPassword && <span style={{color: 'red', fontSize: '14px'}}>{errors.confirmPassword.message}</span>}
    </div>

        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" {...register("terms", 
            { required: "You must accept the terms and conditions" })} />
            <span style={{marginLeft: '5px'}}>I accept the terms and conditions</span>
          </label>
          {errors.terms && <span style={{color: 'red', fontSize: '14px', display: 'block'}}>{errors.terms.message}</span>}
        </div>
      <button type="submit" style={{padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Submit</button>
    </form>
  )
}

export default App