import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiFacebook} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="#" target="#"><BsLinkedin/></a>
        <a href="#" target="#"><FaGithub/></a>
        <a href="#" target="#"><SiFacebook/></a>
    </div>
  )
}

export default HeaderSocials