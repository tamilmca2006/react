import React from "react";
import ReactDOM from "react-dom";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Col } from 'react-bootstrap';

class TableRendering extends React.Component{
	render () {
		return(
			 <Col md={ 12 } >
					<BootstrapTable data={this.props.dataVal} striped hover condensed pagination>
						<TableHeaderColumn dataField='sdate' isKey>DATE</TableHeaderColumn>
						<TableHeaderColumn dataField='open'>OPEN</TableHeaderColumn>
						<TableHeaderColumn dataField='high'>HIGH</TableHeaderColumn>
						<TableHeaderColumn dataField='low'>LOW</TableHeaderColumn>
						<TableHeaderColumn dataField='close'>CLOSE</TableHeaderColumn>
						<TableHeaderColumn dataField='volume'>VOLUME</TableHeaderColumn>
					</BootstrapTable>
		     </Col>
			
		);
	}
}

export default TableRendering;

