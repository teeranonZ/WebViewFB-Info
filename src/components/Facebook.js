import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
  state = {
    auth: false,
    name: '',
    picture: '',
    email: '', // เพิ่ม state สำหรับ email
    ageRange: '' // เพิ่ม state สำหรับอายุ
  };

  responseFacebook = (response) => {
    console.log(response);
    if (response.status !== 'unknown') {
      this.setState({
        auth: true,
        name: response.name,
        picture: response.picture.data.url,
        email: response.email, // เก็บ email
        ageRange: response.age_range ? `${response.age_range.min}-${response.age_range.max}` : 'Unknown' // เก็บช่วงอายุ
      });
    }
  };

  componentClicked = () => {
    console.log('Facebook btn clicked');
  };

  render() {
    let facebookData;

    this.state.auth
      ? (facebookData = (
          <div
            style={{
              width: '400px',
              margin: 'auto',
              background: '#f4f4f4',
              padding: '20px',
              color: '#000'
            }}
          >
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome {this.state.name}!</h2>
            <p>Email: {this.state.email}</p>
            <p>Age Range: {this.state.ageRange}</p>
          </div>
        ))
      : (facebookData = (
          <FacebookLogin
            appId="1247680383201599"
            autoLoad={true}
            fields="name,picture,email,age_range" // เพิ่ม fields ที่ต้องการ
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        ));

    return <>{facebookData}</>;
  }
}
