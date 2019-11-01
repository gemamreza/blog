import React from 'react';
import PropTypes from 'prop-types';

export const Skills = props => {
  return (
    <div className='skills'>
      <label htmlFor='label' className='skills-title'>{props.title}</label>
      <div className='progress'>
        <div className="progress-bar bg-info" role="progressbar" style={{ width : props.width + '%'}} aria-valuenow={props.value} aria-valuemin={0} aria-valuemax={100} />
      </div>
    </div>
  );
}

Skills.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  value: PropTypes.number
}