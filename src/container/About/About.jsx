import React ,{ useState , useEffect } from 'react'
import './About.scss'
import{ motion } from 'framer-motion';
import * as images from "../../assets"; // relative path from Navbar.jsx
import AppWrap from "../../Wrapper/AppWrap";
import MotionWrap from '../../Wrapper/MotionRap';



const abouts = [
  {title:'Web Development', description: 'I am a good web developer.', imgUrl: images.about01 },
  {title:'Back-end Development', description: 'I am a good Back-end developer.', imgUrl:images.about02 },
  {title:'Front-end Development', description: 'I am a good Front-end developer.', imgUrl:images.about03 },
  {title:'MERN Development', description: 'I am a good MERN developer.', imgUrl:images.about04 }
]

const About = () => {
  return (
    <>
      <h2 className='head-text '>
        I Know that 
        <span> Good Dev </span>
        <br />
        means 
        <span> Good Business</span>
      </h2> 

      <div className="app__profiles">
        {abouts.map((about , index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration: 0.9 , type: 'tween'}}
          className='app__profile-item'
          key={about.title + index }
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}
//wraping the component into higher order component
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
