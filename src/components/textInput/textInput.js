import './textInput.css'
import React from 'react';

export class TextInput extends React.Component {
   constructor(props) {
      super(props);
      this.state = {value: '', result: ''};

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleInputChange(event) {
      this.setState({value: event.target.value});
   }

  handleSubmit(event) {
      event.preventDefault();
      const serverUrl = 'https://api.genderize.io';
      const url = `${serverUrl}?name=${this.state.value}`;
      let genderResponce = fetch(url);
      genderResponce.then(getObj => getObj.json())
      .then(result => this.setState({result: result.gender}));
   }

   render(){
      return (
         <form>
             <input type='text' className='textInput' placeholder='Введите имя'
             value={this.state.value} onChange={this.handleInputChange}></input>
             <div className="result">
               <div className="name">Name: {this.state.value} </div>
               <div className="gender">Gender: {this.state.result} </div>
            </div>  
            <button className="button" onClick={this.handleSubmit}>
               GENDERIZE
            </button>
         </form>
        
       );
   }  
};


