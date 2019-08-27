import React from "react";
import ReactDOM from "react-dom";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class CardRendering extends React.Component{
	constructor(props){
		super(props);
		this.renderCardDisplay = this.renderCardDisplay.bind(this);
	}
	renderCardDisplay(){	 
      const displayCards = this.props.dataVal;
     
       const renderDisplay = displayCards.map(function(displayCard){
       	  return `<div class="card">
				  <div class="card-body">
					    <ul class="list-group list-group-flush">
						    <li class="list-group-item">Date  : ${displayCard['sdate']}</li>
						    <li class="list-group-item">Open  : ${displayCard['open']}</li>
						    <li class="list-group-item">High  : ${displayCard['high']}</li>
						    <li class="list-group-item">Low  : ${displayCard['low']}</li>
						    <li class="list-group-item">Close  : ${displayCard['close']}</li>
						    <li class="list-group-item">Volume  : ${displayCard['volume']}</li>
					  </ul>
				  </div>
			   </div>`;
       });

       return ReactHtmlParser(renderDisplay);

	}
	render () {
		return(
			<div>
			     {this.renderCardDisplay()}
			</div>
		);
	}
}

export default CardRendering;