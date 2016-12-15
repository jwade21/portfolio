import React, {Component} from 'react';
import Project from './Project';
import NativeProject from './NativeProject';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
        title: 'Manifest Social',
        purpose: 'Pulls videos from Youtube, Facebook, and Google Plus APIs. Users can search by one user and find videos from multiple sources.',
        tools: 'React, Node.js, MongoDB, and Express',
        description: 'This was my final solo project at General Assembly. I alone made this over the course of 5 days.',
        pageLink: 'https://jwade21.github.io/manifest-dance/',
        githubLink: 'https://github.com/jwade21/manifest-dance/',
        id: 'manifestSocial'
      },
        {
        title: 'Date Night',
        purpose: 'A CRUD app created to help users plan a "date night" by offering recipe and movie recommendations which the users can then save and customize.',
        tools: 'MongoDB, Express, Node.js, and jQuery',
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
      },
        {
        title: 'Jordan\'s Blog / Restaurant',
        purpose: 'Entery Into General Assembly',
        tools: 'HTML, CSS, and jQuery',
        description: 'As preparation for the Web Development Immersive class, I went through some short and basic HTML and CSS practices and produced this as the outcome.',
        pageLink: 'https://jwade21.github.io/dash-blog/',
        githubLink: 'https://github.com/jwade21/dash-blog/',
        id: 'dashProjects'
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
