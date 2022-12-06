import { useState,useEffect } from 'react';
import PortfoliList from '../portfolioList/PortfoliList'
import './portfolio.css'
import {featuredPortfolio, 
webPortfolio,
MobilePortfolio,
designPortfolio,
contentPortfolio} from '../../data.js'  

const Portfolio = () => {

  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id : "web",
      title: "Web App"
    },
    {
      id : "mobile",
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

  useEffect(()=>{
    switch(selected){
      case "featured" :
        setData(featuredPortfolio)
        break;
      case "web" :
        setData(webPortfolio)
        break;
      case "mobile" :
        setData(MobilePortfolio)
        break;
      case "design" :
        setData(designPortfolio)
        break;
      case "content" :
        setData(contentPortfolio)
        break;
      default:
        setData(featuredPortfolio)
      
    }
  }, [selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => 
          <PortfoliList title = {item.title} 
          active = {selected === item.id} 
          setSelected = {setSelected}
          id = {item.id}
          key = {item.id}/>
        )}
      </ul>
      <div className="container">
        {data.map((d)=> (
          <div className="item"  key={d.id}>  
            {console.log(d.img)}
            <img src={d.img}  alt="" />
            <h3>{d.title}</h3>
          </div>  
          ))}
        
      </div>
    </div>
  )
}

export default Portfolio