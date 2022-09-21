import './feedbacks.css'

const Feedbacks = () => {

  const data = [
    {
      id: 1,
      name: "Alex kalinski",
      title: "Co-Founder of DELKA",
      img: "./assets/feedback/person1.jpg",
      icon: "assets/youtube.png",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      name: "Natasha Kalinski",
      title: "Project Manager",
      img: "./assets/feedback/person2.jpg",
      icon: "assets/twitter.png",
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      featured: true
    },
    {
      id: 3,
      name: "Nairobi Durden",
      title: "Senior Developer",
      img: "./assets/feedback/person3.jpg",
      icon: "assets/linkedin.png",
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ]
  return (
    <div className='feedback' id='feedback'>
      <h1>Feedback</h1>
      <div className="container">
        {data.map((d)=>(

          <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img className='left' src="assets/right-arrow.png" alt="" />
            <img className='user' src={d.img} alt="" />
            <img className='right' src={d.icon} alt="" />
          </div>
          <div className="center">
            {d.desc} 
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h5>{d.title}</h5>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Feedbacks