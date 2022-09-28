import './intro.css'
import  Typical from 'react-typical'

const Intro = () => {
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
          <h3>Freelancer, <Typical className='text_animation'
            loop={Infinity}
            wrapper='b'
            steps={['Coder',1000,
                    'Frontend Developer', 1000,
                    'Backend Developer', 1000]}      
          /></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro