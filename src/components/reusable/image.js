import React from 'react';
import PropTypes from 'prop-types';

export const Images = props => {
  return (
    <div className="col-md-6">
      <div className="text-center">
        <img src={props.img} height={props.height} width={props.width} alt='react' />
      </div>
    </div>
  ) 
}

Images.propTypes = {
  img: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}