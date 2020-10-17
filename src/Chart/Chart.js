import React from "react";
import axios from "axios";
import {Pie} from "react-chartjs-2";

const dataSource = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [
        "#ffcd56",
        "#ff6384",
        "#36a2eb",
        "#fd6b19",
        "#2DFD19",
        "#FD1919",
        "#3F19FD",
      ],
    },
  ],
};

export default React.createClass({
  getBudget(){
    axios.get('/budget')
    .then(function (res) {
        console.log(res);
        for (var i = 0; i < res.data.myBudget.length; i++) {
            dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
            dataSource.labels[i] = res.data.myBudget[i].title;
        }
    });
  },
  render() {
    return (
      <div>
        <Pie 
          data={dataSource}
          id={'myChart'}
          width={400}
          height={400}
           />
      </div>
    );
  }
});
