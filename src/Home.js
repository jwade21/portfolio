import React, {Component} from 'react';

class Home extends Component {
  render() {
    return(
        <div className='homeTextContainer'>
          <div className='bio'>
            <p>
              I am a web developer and one of my strongest skills is the ability to quickly spot patterns and mistakes.  I am very reliable when it comes to quickly and effectively relaying the information to the appropriate person. I am looking to incorporate my leadership and communication skills into the development community to help create stronger team functionality.
            </p>
            <div className='bioPictures'>
              <img src={require('./photos/headshot.jpg')} alt='headshot'/>
              <img src={require('./photos/headshot2.jpg')} alt='headshot'/>
            </div>
          </div>

          <h2>Skills:</h2>

          <div className='skillsContainer'>
            <div className='skills'>
              <h3>Front End:</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>AJAX</li>
                <li>React</li>
                <li>React Native</li>
                <li>Ruby</li>
              </ul>
            </div>
            <div className='skills'>
              <h3>Back End:</h3>
              <ul>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Firebase</li>
                <li>Heroku</li>
                <li>Rails</li>
              </ul>
            </div>
            <div className='skills'>
              <h3>Other:</h3>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Auth0</li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Home;
