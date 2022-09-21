import { useState } from 'react';
import './contact.css'  

const Contact = () => {
  const [message, setMessage] = useState(false)
  const handleSubmit= (e) =>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contanct.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email'/>
          <textarea name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll replay ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact