import React from "react";
import ReactDOM from "react-dom";
import TableRendering from "./components/TableRendering.jsx";
import CardRendering from "./components/CardRendering.jsx";
import axios from 'axios';

class stockDisplay extends React.Component {
	constructor(props){
       super(props);
       this.state = {
       	   mode : 0,
       	   storedData: []
       }
       this.onButtonChange = this.onButtonChange.bind(this);
	}
    
    onButtonChange(){
    	this.setState(function(state) {
    		var toggleText;
             if(state.mode == 0){
                toggleText = 1;
             }else {
             	toggleText = 0;
             }
			  return {
			    mode: toggleText
			  };
		});
			       
    }

    serviceCall() {

    }

    componentDidMount(){
         axios.get('./financedata.json')
        .then(res => {
        	this.setState ({
               storedData:res.data
        	});
        } );
    }


	render(){
      const {
      	mode,
      	storedData
      } = this.state;

      let name = '';
       
       if(mode == 0) {
        name = "Display in the Cards";
       } else {
       	name = "Display in the Table";
       }

		return (
			<div className="container">
			   <button name="toggleButton" className='toggleButton btn btn-primary' onClick={this.onButtonChange}> {name} </button>	
			   <br />
			   {mode == 0 ? <TableRendering dataVal={storedData} /> :  <CardRendering dataVal={storedData} />}
			</div>
		);
	}
}

export default stockDisplay;