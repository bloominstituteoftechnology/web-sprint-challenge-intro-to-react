import React from 'react';
import Card from './Card';

export default class Home extends React.Component {
state = {
    page: 'Home'
  }

  componentDidMount() {

}

  componentWillUnmount() {

}

    render() {
    return (
      <div className="home page">
          <Card>

          </Card>
      </div>
    );
    }
}
  