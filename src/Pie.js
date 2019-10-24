import React from "react";
import { Pie } from "react-chartjs-2";

class ChartsPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            ...this.state,
            data: this.getData()
        }
    }
  state = {
    id: 2,
    options: { 
        maintainAspectRatio: true,
        responsive: true,
        legend: {
            display: false,
        },
    },
  }

  getData = () => {
      return {
    labels: [],
    datasets: [
      {
          hideInLegendAndTooltip:[true,true],
          data: [2500, 1500],
        backgroundColor: [
          "#46BFBD",
          "#F7464A",
        ],
        hoverBackgroundColor: [
          "#5AD3D1",
          "#FF5A5E",
        ],
        borderWidth: 30,
        borderColor: ['transparent', '#ff5660']
      }]}
  }

  render() {
      let a = Math.random() * 10;
      let b = 10 - a;
      console.log(a,b)
    return (
        <div key={Math.random()}>
            <button onClick={()=>this.setState({
                ...this.state,
                id: this.state.id + 1,
                data: {
                    ...this.state.data,
                    datasets: [
                    {
                        hideInLegendAndTooltip:[true,true],
                        data: [a,b],
                      backgroundColor: [
                        "#F7464A",
                        "#46BFBD",
                      ],
                      hoverBackgroundColor: [
                        "#FF5A5E",
                        "#5AD3D1",
                      ],
                      borderWidth: 30,
                      borderColor: ['#ff5660', 'transparent']
                    }]
                }
            })}>click {this.state.id}</button>
            <div>
        <Pie
            data={this.state.data} 
            options={this.state.options} 
            redraw
        />
            </div>

        </div>
    );
  }
}

export default ChartsPage;