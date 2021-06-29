import React, { Component } from 'react';
import {Input, Button} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
  }
 }

 function searchFunction() {
   console.log();
 }

 render() {
   return(
     <div>
       <Input placeholder='Search Here' />
       <Button onClick={searchFunction()}/>
       <h3>Results:</h3>
     </div>
   )
 }

 
export default SearchIndex;
