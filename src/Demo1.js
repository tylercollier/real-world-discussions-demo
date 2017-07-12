import React, { Component } from 'react';

class MyRow extends Component {
  render() {
    
  }
}

class MyTable extends Component {
  render() {
    
  }
}

export default class Demo1 extends Component {
  constructor() {
    this.data = [
      {
        name: 'Joe Bo',
      },
      {
        name: 'Tim Tim',
      },
    ]
  }

  state = {
    activeRow: null,
  }

  render() {
    return (
      <MyTable>
        {
          this.data.map((x, index) => (
            <MyRow name={x.name} activeRow={this.state.activeRow} index={index} />
            <MyRow name={x.name} isActiveRow={index === this.state.activeRow} />



            // Alternate row color
            <MyRow name={x.name} index={index} />
            <MyRow name={x.name} rowColor={index % 2 === 0 ? 'white' : 'gray'} />



            // Alternate row color, but only if there are more than 5 rows
            <MyRow name={x.name} index={index} rowCount={this.data.length} />
            <MyRow name={x.name} rowColor={(this.data.length <= 5 || index % 2 === 0) ? 'white' : 'gray'} />



            // Set row color to red to highlight duplicates, if there are any.
            // Child responsible for checking. This means you break encapsulation, because child must know implementation of data.
            <MyRow name={x.name} data={this.data} />
            <MyRow name={x.name} hasDuplicate={checkDuplicate(this.data, x)} />
            // Possible best of both worlds?
            <MyRow name={x.name} hasDuplicate={checkDuplicate} />



            // Simplest:
            <MyRow row={x} data={this.data} />
          ))
        }
      </MyTable>
    )
  }
}
