import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'
import * as images from "../../assets"; // relative path from Navbar.jsx
import AppWrap from '../../Wrapper/AppWrap';

const scaleVarients = {
  whileInView:{
    scale : [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}


const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
       whileInView = {{x:[-100, 0 ], opacity:[0,1]}}
        transition = {{duration:1}}
        className = 'app__header-info'
      >
       <div className='app__header-badge'>
          <div className="badge-cmp app__flex">
            <span>
              👋
            </span>
            <div style={{marginLeft:20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className="head-text">Anubhav</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
             <p className='p-text'>Web Developer</p>
              <p className='p-text'>MERN Developer</p>
          </div>
       </div>
      </motion.div>

      <motion.div
       whileInView = {{ opacity:[0,1]}}
        transition = {{duration:1 , delayChildren:0.5}}
        className = 'app__header-img'
      >
        <img src={images.profile} alt="profile-bg"/>
        <motion.img
         whileInView = {{ scale:[0,1]}}
        transition = {{duration:1 , ease: 'easeInOut'}}
        src={images.circle}
        alt="profile_circle"
        className='overlay_circle'
        />


      </motion.div>
      <motion.div
      variants={scaleVarients}
      whileInView={scaleVarients.whileInView}
      className='app__header-circles'
      >
        {[images.flutter , images.Nextjs , images.sass].map((circle, index)=>(
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt='circle'/>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
//wraping the component into higher order component
export default AppWrap(Header,'home')
