import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFacebook} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/louay-zaara-0381371a9/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/louayzaara" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/louay.zara/" target="_blank"><SiFacebook/></a>
    </div>
  )
}

export default HeaderSocials