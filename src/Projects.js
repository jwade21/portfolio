import React, {Component} from 'react';
import Project from './Project';
import NativeProject from './NativeProject';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: 'hidden',
      projects: [
        {
        title: 'Date Night',
        purpose: 'A CRUD app created to help users plan a "date night" by offering recipe and movie recommendations which the users can then save and customize.',
        tools: 'MongoDB, Express, and Node.js',
        description: 'This was our first four-person group project at General Assembly and was built over the course of 5 days',
        pageLink: 'https://jwade21.github.io/date-night/',
        githubLink: 'https://github.com/jwade21/date-night/',
        id: 'dateNight'
      },
        {
        title: 'Fakebook',
        purpose: 'CSS Challenge',
        tools: 'HTML and CSS',
        description: 'As a way to enhance my CSS skills, I recreated the Facebook landing page. (No functionality included)',
        pageLink: 'https://jwade21.github.io/fakebook/',
        githubLink: 'https://github.com/jwade21/fakebook/',
        id: 'fakebook'
        }
      ],


      nativeProjects: [
          {
          title: 'Beer Traveler',
          purpose: 'An IOS App that uses the BreweryDB API to find beers by Type, Brewery, ABV, or Location. Users can then save beers into "Saved" or "Tried" lists that are saved into their phone\'s local storage.',
          tools: 'React Native and Realm',
          description: 'This was our second four-person group project at General Assembly and was built over the course of 5 days. We teamed with a UX group for styling and presentation.',
          githubLink: 'https://github.com/connorzg/thirsty-loris/',
          id: 'beerTraveler'
        }
      ]
    }
    this._showContent = this._showContent.bind(this)
    this._hideContent = this._hideContent.bind(this)
  }

  _showContent() {
    this.setState({
      class: 'projectContent'
    })
  }
  _hideContent() {
    this.setState({
      class: 'hidden'
    })
  }

  render() {
    return(
      <div className='projectsPage'>
        {this.state.projects.map((project, index) => <Project project={project} key={index} class={this.state.class} showClass={this._showContent} hideClass={this._hideContent}/>)}
        <h1>React Native Apps:</h1>
        {this.state.nativeProjects.map((project, index) => <NativeProject project={project} key={index} class={this.state.class} showClass={this._showContent} hideClass={this._hideContent}/>)}
      </div>
    )
  }
}

export default Projects;
