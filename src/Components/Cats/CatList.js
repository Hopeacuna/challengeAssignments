import React, { Component } from 'react';

const CatList = (props) => {
  return (
    <div>
      {props.cats.map((cats) => {
        return <li>{cats}</li>
      })

      }
    </div>
  )}


export default CatList;
