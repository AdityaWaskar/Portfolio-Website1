import { useState } from 'react'
import './works.css'

const Works = () => {
  const [currentSlider, setCurrentSlider] = useState(0)
  const data = [
    {
      id: 1,
      icon: "./assets/mobile.png",
      title: "Wb Design",
      desc: "Hello my name is adity Prakash Waskar",
      img: "./assets/works1.jpg"
    },
    {
      id: 2,
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "This is mobile application section",
      img: "./assets/works2.jpg"
    },
  ]

  const handlClick = (way) =>{
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : data.length-1): setCurrentSlider(currentSlider<data.length-1 ? currentSlider+1 : 0)
  }
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imageContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className='arrow leftarrow' alt="" onClick={() => handlClick("left")} />
      <img src="assets/arrow.png" className='arrow rightarrow' alt="" onClick={() => handlClick("right")}/>
    </div>
  )
}

export default Works