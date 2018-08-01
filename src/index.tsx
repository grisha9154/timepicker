import * as React from "react";
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import * as moment from "moment";

import DateIntervalSelector from "./components/date-picker";

const now = moment();

const disabledArray = [now.clone().add(1, "d"), now.clone().add(-2, "d")];

class App extends Component {
  onDateChange = (date: moment.Moment) => {
    console.log(date);
  };

  render() {
    return (
      <div>
        <DateIntervalSelector
          value={moment()}
          onChange={this.onDateChange}
          disabled={false}
          disabledDays={disabledArray}
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));


export default App;
