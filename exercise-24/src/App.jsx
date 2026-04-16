
import React from 'react'
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch("password");
  const onSubmit = (data) => {
    console.log(data);
  };

  const styles = {
    page: {
      background: 'linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px',
  
    },
    card: {
      width: '100%',
      maxWidth: '520px',
      background: '#ffffff',
      borderRadius: '28px',
      boxShadow: '0 28px 80px rgba(15, 23, 42, 0.14)',
      padding: '36px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      textAlign: 'center'
    },
    title: {
      margin: 0,
      fontSize: '32px',
      fontWeight: 700,
      color: '#1f2937'
    },
    subtitle: {
      margin: 0,
      fontSize: '15px',
      color: '#4b5563',
      lineHeight: 1.6
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    label: {
      fontSize: '14px',
      fontWeight: 600,
      color: '#374151'
    },
    input: {
      width: '100%',
      minHeight: '46px',
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '16px',
      outline: 'none',
      fontSize: '15px',
      color: '#111827',
      background: '#f9fafb',
      transition: 'border-color 0.2s ease'
    },
    select: {
      width: '100%',
      minHeight: '46px',
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '16px',
      outline: 'none',
      fontSize: '15px',
      color: '#111827',
      background: '#f9fafb'
    },
    checkboxGroup: {
      display: 'grid',
      gap: '12px',
      padding: '18px',
      border: '1px solid #e5e7eb',
      borderRadius: '18px',
      background: '#f8fafc'
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '14px',
      color: '#374151',
      fontWeight: 500
    },
    checkboxInput: {
      width: '18px',
      height: '18px',
      accentColor: '#4f46e5'
    },
    error: {
      color: '#dc2626',
      fontSize: '13px',
      marginTop: '4px'
    },
    button: {
      width: '100%',
      padding: '14px 18px',
      border: 'none',
      borderRadius: '18px',
      background: 'linear-gradient(90deg, #4f46e5 0%, #6366f1 100%)',
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: '0 18px 30px rgba(79, 70, 229, 0.18)'
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Student Registration</h1>
          <p style={styles.subtitle}>Fill in your details to register for the academic term.</p>
        </div>

        <div style={styles.field}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input type="text" id='name' style={styles.input} {...register("name", {required: "Name is required"})} />
          {errors.name && <span style={styles.error}>{errors.name.message}</span>}
        </div>

        <div style={styles.field}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input type="email" id='email' style={styles.input} {...register("email", {required: "Email is required"})} />
          {errors.email && <span style={styles.error}>{errors.email.message}</span>}
        </div>

        <div style={styles.field}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input type="password" id='password' style={styles.input} {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
            },
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            }
          })} />
          {errors.password && <span style={styles.error}>{errors.password.message}</span>}
        </div>

        <div style={styles.field}>
          <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
          <input type="password" id='confirmPassword' style={styles.input} {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords do not match",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            }
          })} />
          {errors.confirmPassword && <span style={styles.error}>{errors.confirmPassword.message}</span>}
        </div>

        <div style={styles.field}>
          <label htmlFor="grade" style={styles.label}>Grade Level</label>
          <select id='grade' style={styles.select} {...register("grade", { required: "Grade is required" })}>
            <option value="">Select Grade</option>
            <option value="A">Grade 9</option>
            <option value="B">Grade 10</option>
            <option value="C">Grade 11</option>
            <option value="D">Grade 12</option>
            <option value="F">Failed</option>
          </select>
          {errors.grade && <span style={styles.error}>{errors.grade.message}</span>}
        </div>

        <div style={styles.field}>
          <span style={styles.label}>Subject Interest</span>
          <div style={styles.checkboxGroup}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" value="Math" style={styles.checkboxInput} {...register("subjects", { required: "At least one subject must be selected" })} />
              Math
            </label>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" value="Science" style={styles.checkboxInput} {...register("subjects", { required: "At least one subject must be selected" })} />
              Science
            </label>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" value="History" style={styles.checkboxInput} {...register("subjects", { required: "At least one subject must be selected" })} />
              History
            </label>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" value="Literature" style={styles.checkboxInput} {...register("subjects", { required: "At least one subject must be selected" })} />
              Literature
            </label>
          </div>
          {errors.subjects && <span style={styles.error}>{errors.subjects.message}</span>}
        </div>

        <button type='submit' style={styles.button}>Register</button>
      </form>
    </div>
  )
}

export default App