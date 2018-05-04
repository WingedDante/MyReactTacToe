import React from 'react';
import PropTypes from 'prop-types';
require('./Square.css');

/**
 * Square Component that renderes a button used in the game
 */
class Square extends React.Component{

    render(){
      return (
        <button className="square" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      );
    }
  }

  Square.propTypes = {
    /** function to be passed into square to be executed when the button is clicked */
    onClick: function(i){}, 
    /** string to be displayed in the square (null,'X','O') */
    value: PropTypes.string
  }
  Square.defaultProps = {
    onClick: null,
    value: null
  }

export default Square;