import React, {Component} from 'react';

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      class: ''
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
      <div className='project' id={this.props.project.id} onMouseOver={this._showContent} onMouseLeave={this._hideContent} onPress={this._showContent}>
        <div className={this.state.class}>
          <h3>
            {this.props.project.title}
          </h3>
          <p>{this.props.project.purpose}</p>
          <p><span>Tools: </span>{this.props.project.tools}</p>
          <p><span>Description: </span>{this.props.project.description}</p>
          <div className='codeLinks'>
            <a href={this.props.project.pageLink} target='_blank'>Project Page</a>
            <a href={this.props.project.githubLink} target='_blank'>Project Code</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
