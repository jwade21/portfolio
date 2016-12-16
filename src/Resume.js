import React, {Component} from 'react';

class Resume extends Component {
  render() {
    return(
      <div className='resume'>
        <div>
          <img src={require('./photos/resume.jpg')} alt='resume' />
          <div className='resumeDownloads'>
            <a href={require('./photos/resume.jpg')} download>Download JPG</a>
            <a href={'https://drive.google.com/file/d/0B1XEB82qSxBiVW83RnZIaFlmSlk/view'} target='_blank'>View PDF</a>
          </div>
        </div>
        <div>
          <img src={require('./photos/resumeBW.jpg')} alt='resume' />
          <div className='resumeDownloads'>
            <a href={require('./photos/resumeBW.jpg')} download>Download JPG</a>
            <a href={'https://drive.google.com/file/d/0B1XEB82qSxBiNW15TFdMYUM1LU0/view'} target='_blank'>View PDF</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Resume;
