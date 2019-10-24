
import React, {Component} from 'react';

import { RadialChart } from 'react-vis';

const myData = [
  { angle: 1300, radius: 15, color: "ff5660" }, 
  { angle: 2500, radius: 13, color: "24ccb8" }, 
]

export default class VISChart extends Component {
  render() {
    
    return (
      <RadialChart
        colorType="literal"
        data={ myData }
        width={600}
        height={300}
      />
    );
  }
}