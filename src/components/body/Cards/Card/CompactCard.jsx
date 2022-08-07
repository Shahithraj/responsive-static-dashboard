import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from "framer-motion";

const CompactCard = (props) => {
    const Png = props.png
  return (
    <motion.div className='compactCard' layoutId='expandableCard' onClick = {() =>props.setExtended(true)} style = {{background:props.color.backGround, boxShadow:props.color.boxShadow}}>
    <div className='radialBar'>
    <CircularProgressbar value={props.barValue} text={`${props.barValue}%`} />
<span>{props.title}</span>
    </div>
    <div className='detail'>
<Png />
<span>${props.value}</span>
<span>Last 24 hours</span>

    </div>
    </motion.div>
  )
}

export default CompactCard