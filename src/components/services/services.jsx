import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const servicess = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User competence item 1</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User competence item 1</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User competence item 2</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User competence item 3</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User competence item 4</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User competence item 5</p>
            </li>
          </ul>
        </article>
        {/* END of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dev competence item 1</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dev competence item 2</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dev competence item 3</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dev competence item 4</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dev competence item 5</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dev competence item 6</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Dev competence item 7</p>
            </li>
          </ul>
        </article>
        {/* END of Web Developement */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information item 1</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information item 2</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information item 3</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information item 4</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information item 5</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information item 6</p>
            </li>
          </ul>
        </article>
        {/* END of Content Creation */}
      </div>
    </section>
  )
}

export default servicess