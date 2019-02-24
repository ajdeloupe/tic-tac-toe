import React from 'react';
import PropTypes from 'prop-types';
function GameSquare ({square, onClick, bgColor, value}) {
    return (
        <div className={"game-square " + square} style={{backgroundColor:bgColor}} onClick={onClick }>
            {value}
      </div>
    );
}
GameSquare.propTypes = {
    square: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired
};
export default GameSquare;