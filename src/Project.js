import React, {Component} from 'react';

class Project extends Component {
  render() {
    return(
      <div className='project' id={this.props.project.id} onMouseOver={this.props.showClass} onMouseLeave={this.props.hideClass}>
        <div className={this.props.class}>
          <h3>
            {this.props.project.title}
          </h3>
          <p>{this.props.project.purpose}</p>
          <p><span>Tools: </span>{this.props.project.tools}</p>
          <p><span>Description: </span>{this.props.project.description}</p>
          <div className='codeLinks'>
            <a href={this.props.project.pageLink}>Project Page</a>
            <a href={this.props.project.githubLink}>Project Code</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
