import React from 'react';
import Imagenes from './Imagenes';
import "./Slider.css";
import { motion } from 'framer-motion';






const Slider = () => {
  return (
    <motion.div className='slider_container'>
      <motion.div className='slider' drag="x"
       dragConstraints={{right: 0, left: -100}}>
      {Imagenes.map(imagen =>(
            <motion.div className='item'>
              <img src={imagen} alt="" /> 
            </motion.div>
        ))}
      </motion.div>
       
    </motion.div>
  )
}

export default Slider