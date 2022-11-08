/*eslint no-unused-vars: 0 */
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getDSData } from '../../../api';

// ## Data Visualization

// These components represent a pattern that you can use when working as a part of a `Hybrid Team`. When working with Data Scientists you'll need to ensure that you communicate as often as you possibly can with that team. They will be doing hard work using [`Plotly`](https://plotly.com/) to ensure that the data they're working with is charted out in a visually appealing way, however you'll need to work with them to integrate their work into the app.

// The `RenderDataViz.js` file demonstrates how you can pull in data from an external API, set that data on state, and then pass that data down to a `<Plot />` component. In this case, the URL for the plot component is the only prop that will be needed to send off the API call and subsequently mount the Plot components w/ the appropriate data. **Be sure to handle your errors nicely.**

const initialState = {
  data: [],
  layout: {},
  frames: [],
  config: {
    displaylogo: false,
    displayModeBar: false,
  },
};

function DataViz(props) {
  const [data, setData] = useState(initialState);
  const [figure, setFigure] = useState(null);

  useEffect(() => {
    function fetchDSData() {
      getDSData(props.url)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
        });
    }
    fetchDSData();
  }, [props.url]);

  return (
    <Plot
      className="DataViz"
      data={data.data}
      layout={data.layout}
      frames={data.frames}
      config={data.config}
      onInitialized={figure => setFigure(figure)}
      onUpdate={figure => setFigure(figure)}
    />
  );
}

export default DataViz;
