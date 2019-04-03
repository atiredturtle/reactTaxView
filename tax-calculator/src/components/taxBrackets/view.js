import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';



class TaxBrackets extends Component {
  constructor(props){
    super(props);
    const brackets = [
      {
        taxableIncome: 0,
        lumpTax: 0,
        perDollarTax: 0,
      },
      {
        taxableIncome: 18201,
        lumpTax: 0,
        perDollarTax: 0.19,
      },
      {
        taxableIncome: 37001,
        lumpTax: 3572,
        perDollarTax: 0.325,
      },
      {
        taxableIncome: 90001,
        lumpTax: 20797,
        perDollarTax: 0.37,
      },
      {
        taxableIncome: 180001,
        lumpTax: 54097,
        perDollarTax: 0.45,
      },
    ];
    this.state = { brackets };
  }

  render(){
    const columns = [{
      Header: 'Taxable Income',
      accessor: 'taxableIncome'
    }, {
      Header: 'Lump Tax',
      accessor: 'lumpTax',
    }, {
      Header: 'Tax Per $1',
      accessor: 'perDollarTax'
    }];


    return (
      <ReactTable
        data={this.state.brackets}
        columns={columns}
      ></ReactTable>
    );
  }
}

export default TaxBrackets;