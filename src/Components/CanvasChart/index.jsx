import React from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'

function CanvasChart(props) {
    const options = {
			animationEnabled: true,
			height: 300,
			title:{
				text: ""
			},
			axisX: {
				lineThickness: 0,
				tickLength: 0,
				labelFormatter: function(e) {
					return "";
				}
			},
			axisY: {
				lineThickness: 0,
				gridThickness: 0,
				tickLength: 0,
				labelFormatter: function(e) {
					return "";
				}
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 85060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 72400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 103900 },
				]
			}]
        }
    return (
        <div>
			<CanvasJSChart options = {options}
			/>
		</div>
    );
}

export default CanvasChart;