import React, { useCallback, useState } from "react";
import { ImageDetails } from '../ImageDetails';

class Image extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showImageDetails: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleImageDetailsCallback = this.handleImageDetailsCallback.bind(this);
  }

  handleClick() {
    this.setState({
      showImageDetails: true
    });
  }

  handleImageDetailsCallback() {
    this.setState({
      showImageDetails: false
    });
  }

  render() {
    const showImageDetails = this.state.showImageDetails;
    let imageDetails;
    if (showImageDetails) {
      imageDetails = <ImageDetails
        title={this.props.alt}
        url={this.props.url}
        id={this.props.id}
        customCallback={this.handleImageDetailsCallback}>
      </ImageDetails>;
    }
    return (
      <li>
        <img src={this.props.url} alt={this.props.title} onClick={this.handleClick} />
        <div>
        {imageDetails}
        </div>
      </li>
    );    
  }
}

export default Image;
