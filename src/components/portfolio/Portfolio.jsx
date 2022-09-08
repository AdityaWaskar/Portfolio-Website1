import { useState } from 'react';
import PortfoliList from '../portfolioList/PortfoliList'
import './portfolio.css'

const Portfolio = () => {

  const [selected, setSelected] = useState("featured")
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id : "Web",
      title: "Web App"
    },
    {
      id : "moblie",
      title: "Moblie App"
    },
    {
      id : "design",
      title: "Design"
    },
    {
      id : "content",
      title: "Content"
    },
    
  ];
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => 
          <PortfoliList title = {item.title} 
          active = {selected === item.id} 
          setSelected = {setSelected}
          id = {item.id}/>
        )}
      </ul>
      <div className="container">
        <div className="item">  
          <img src="assets/feature1.png"  alt="" />
          <h3>Banking App </h3>
        </div>
        <div className="item">
          <img src="assets/feature1.png"  alt="" />
          <h3>Banking App </h3>
        </div>
        <div className="item">
          <img src="assets/feature1.png"  alt="" />
          <h3>Banking App </h3>
        </div>
        <div className="item">
          <img src="assets/feature1.png"  alt="" />
          <h3>Banking App </h3>
        </div>
        <div className="item">
          <img src="assets/feature1.png"  alt="" />
          <h3>Banking App </h3>
        </div>
        <div className="item">
          <img src="assets/feature1.png"  alt="" />
          <h3>Banking App </h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio