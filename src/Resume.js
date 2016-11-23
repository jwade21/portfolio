import React, {Component} from 'react';

class Resume extends Component {
  render() {
    return(
      <div className='resume'>
        <img src={require('./photos/resume.jpg')} alt='resume' />
        <a href={require('./photos/resume.jpg')} download>Download</a>
      </div>
    )
  }
}

export default Resume;
