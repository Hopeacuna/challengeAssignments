import React, { Component } from 'react';

const CatList = (props) => {
  return (
    <div>
      {this.props.breeds.map((cats) => {
        return <li>{cats}</li>
      })

      }
    </div>
  )}


export default CatList;
