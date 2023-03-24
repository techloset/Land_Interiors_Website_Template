import React from 'react'
import Section from '../section/section'
import Interior from '../interiors/interior'
import Another from '../another/another'
import Do from '../whatWeDoSection/do'
import bg1 from './bg.png'

const About = () => {
  return (
    <>
  <Section ></Section>
<Interior ></Interior>
  <div style={{ backgroundImage: `url(${bg1})` }} className='bg-cover bg-no-repeat bg-center'>

<Another ></Another>

<Do />
  </div >

    </>
  )
}

export default About
