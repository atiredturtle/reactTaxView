import React, { Component } from 'react';
import ReactTable from 'react-table';
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

  getCurrBracket(){
    const { currAmount } = this.props;
    const { brackets } = this.state;

    const lowerBrackets = brackets.filter(b => b.taxableIncome <= currAmount);
    const topBracket = lowerBrackets[lowerBrackets.length - 1];
    return topBracket.taxableIncome;
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

    this.getCurrBracket();
    return (
      <ReactTable
        getTrProps={(state, rowInfo, column) => {
          return {
            style: {
              background: rowInfo && rowInfo.row.taxableIncome == this.getCurrBracket() ? 'green' : ''
            }
          };
        }}
        data={this.state.brackets}
        columns={columns}
      ></ReactTable>
    );
  }
}

export default TaxBrackets;