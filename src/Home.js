import React, {Component} from 'react';

class Home extends Component {
  render() {
    return(
        <div className='homeTextContainer'>
          <div className='Bio'>
            <p>
              I am an up and coming Web Developer whose main goal is to learn the skills needed to improve teamwork and communication between team members. I want to incorporate my leadership and communication skills into the Web Development community to help create stronger team functionality. One of my strongest suits is the ability to quickly spot patterns and mistakes.
            </p>
            <img src={require('./photos/fakeHeadshot.jpg')} alt='headshot'/>
          </div>

          <h2>Skills:</h2>

          <div className='skillsContainer'>
            <div className='skills'>
              <h3>Front End:</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>AJAX</li>
                <li>React</li>
                <li>React Native</li>
                <li>Angular</li>
              </ul>
            </div>
            <div className='skills'>
              <h3>Back End:</h3>
              <ul>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
            <div className='skills'>
              <h3>Other:</h3>
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Heroku</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Home;
