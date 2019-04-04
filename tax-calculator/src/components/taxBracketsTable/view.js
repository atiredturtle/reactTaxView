import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class TaxBracketsTable extends Component {
  constructor(props){
    super(props);
    const { brackets } = this.props;
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

    const { currBracket } = this.props;
    return (
      <ReactTable
        getTrProps={(state, rowInfo, column) => {
          return {
            style: {
              background: rowInfo && rowInfo.row.taxableIncome === currBracket.taxableIncome ? 'green' : ''
            }
          };
        }}
        data={this.state.brackets}
        columns={columns}
      ></ReactTable>
    );
  }
}

export default TaxBracketsTable;