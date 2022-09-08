import './intro.css'
// import "https://unpkg.com/ityped@1.0.3"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

const Intro = () => {
  const textRef = useRef();

  useEffect(() =>{
    init(textRef.current,{
      strings: ['Coder' ,'Frontend Developer', 'Backend Developer' ],
      // strings: ['  '],
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60
    });
  }, []);
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Aditya Waskar</h1>
          <h3>Freelancer <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro