import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const OutlineButton = ({
  disabled, 
  backgroundColor, 
  width_type, 
  height_type, 
  label, 
  color, 
  differentiator, 
  ...props 
}) =>{
  const mode = disabled ? `${differentiator}--disabled` : `${differentiator}`;
  return (
    <button
      type="button"
      className={[`button`, `button--${width_type}`, mode].join(' ')}
      style={{ backgroundColor, color, height: height_type=='Big'&&'40px'}}
      {...props}
    >
        {label}
    </button>
  );
};

OutlineButton.propTypes = {
  /**
   * Button State
   */
  disabled: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What color to use
   */
  color: PropTypes.string,
  /**
   * Button Type
   */
  differentiator: PropTypes.oneOf(['Regular', 'Other']),
  /**
   * Width Type
   */
  width_type: PropTypes.oneOf(['Short', 'Full']),
  /**
   * Height Type
   */
  height_type: PropTypes.oneOf(['Small', 'Big']),
  /**
   * Button Title
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

OutlineButton.defaultProps = {
  disabled: false,
  backgroundColor: null,
  color: null,
  width_type: 'Short',
  height_type: 'Small',
  onClick: undefined,
  differentiator: 'Regular'
};