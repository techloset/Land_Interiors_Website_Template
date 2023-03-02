import React from 'react'
import Section from '../section/section'
import Interior from '../interiors/interior'
import Another from '../another/another'
import Do from '../whatWeDoSection/do'
import bg1 from './bg.png'

const About = ({shouldAnimate}) => {
  return (
    <>
  <Section {...{shouldAnimate}}></Section>
<Interior {...{shouldAnimate}}></Interior>
  <div style={{ backgroundImage: `url(${bg1})` }} className='bg-cover bg-center'>

<Another {...{shouldAnimate}}></Another>

<Do {...{shouldAnimate}}/>
  </div >

    </>
  )
}

export default About
