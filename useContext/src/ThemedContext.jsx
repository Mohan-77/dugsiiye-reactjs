import React from 'react'
import { useContext } from 'react'
import ThemeContext from './ThemeContext.js'

export default function ThemedContext() {
    const theme = useContext(ThemeContext);

    const styles = {
        backgroundColor: theme === 'dark' ? '#333' : '#FFF',
        color: theme === 'dark' ? '#FFF' : '#000',
        padding: '10px',
        margin: '10px',
        textAlign: 'center'
    };      
  return (
    <div style={styles}>Theme is {theme}</div>
  )
}
