import React from 'react';
import {render} from 'react-dom';

var Handler = React.createClass({
  componentDidMount: function() {
    document.title = "Amazing Page";
  }
});