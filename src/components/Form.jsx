import React from 'react'
import './Diseños/Form.css'

export default function Form  ()  {
  return (
    
    <div className="box"> 
        <div className="form">

        <h2>Sign in </h2>
        <div className="inputbox">
          <input type="text" required="required" />
          <span>Nombre </span>
          <i></i>
        </div>

        <div className="inputbox">
            <input type="text" required="required" />
            <span>Apellidos</span>
            <i></i>
          </div>

          <div className="inputbox">
            <input type="email" required="required" />
            <span>Correo Electronico</span>
            <i></i>
          </div>
          
          <div className="inputbox">
            <input type="number" required="required" />
            <span>Teléfono</span>
            <i></i>
          </div>

          <div className="inputbox">
            <input type="text" required="required" />
            <span>Asunto o Mensaje</span>
            <i></i>
          </div>

          <div className="links">
            <a href="#"> Forgot Password</a>
            <a href="#">Signup</a>
          </div>
          <input type="submit" value="Login" />
    </div>
  </div>

    

  )
}
