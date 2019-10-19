import "./imageList.css";
import React from "react";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
  renderList = () => {
    console.log(this.props);
    return this.props.images.map(img => <ImageCard key={img.id} image={img} />);
  };

  render() {
    return <div className="image-list">{this.renderList()}</div>;
  }
}

export default ImageList;
