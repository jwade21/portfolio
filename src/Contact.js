import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return(
      <div className='contact'>
        <div>
          <h2>
            Feel free to contact me any time!
          </h2>
        </div>
        <div className='socials'>
          <ul className='icons'>
            <i className='fa fa-medium'></i>
            <i className='fa fa-github'></i>
            <i className='fa fa-linkedin'></i>
            <i className='fa fa-envelope'></i>
            <i className='fa fa-mobile'></i>
          </ul>
          <ul className='info'>
            <a href='https://medium.com/@jordanwade' target='_blank'>jordanwade</a>
            <a href='https://github.com/jwade21' target='_blank'>jwade21</a>
            <a href='https://www.linkedin.com/in/jordan-wade' target='_blank'>Jordan Wade</a>
            <p>jordanwade.dev@gmail.com</p>
            <a href='tel:5307082692'>(530)-708-2692</a>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact;
