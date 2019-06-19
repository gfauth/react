import React from 'react';

import HelloTitle from './../../components/hello-title';
import ImageComponent from './../../components/image-component';

export default class HomeView extends React.Component {

  render() {
    return (
      <div className="HomeView">
        <HelloTitle />
        <ImageComponent />
      </div>
    );
  }

}
