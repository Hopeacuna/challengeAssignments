import React, { Component } from 'react';


class DoggieFetch extends Component {
    constructor() {
      super()
      this.state = {
        dogImg: '',
      }
    }

 fetchDog = () => {
    
    fetch("https://dog.ceo/api/breeds/image/random", {
        method: 'GET'
    }).then(res => res.json())
    // .then(res => console.log(res))
    .then(jsonData => {
        this.setState({
          dogImg: jsonData.message,
        })
      })
      .catch((err) => console.log(err))
    
}

render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchDog()}>Find!</button>
        <div className={'dogWrap'}>
          <img className={'dogImg'} src={this.state.dogImg} />
        </div>
      </div>
    )
  }

}

export default DoggieFetch;