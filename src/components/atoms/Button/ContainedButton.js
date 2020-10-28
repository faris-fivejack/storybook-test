import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const ContainedButton = ({ 
  disabled, 
  backgroundColor, 
  width_type, 
  height_type, 
  label, 
  color, 
  differentiator, 
  ...props 
}) => {
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

ContainedButton.propTypes = {
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
  differentiator: PropTypes.oneOf(['Purchasing', 'NonPurchasing']),
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

ContainedButton.defaultProps = {
  disabled: false,
  backgroundColor: null,
  color: null,
  width_type: 'Short',
  height_type: 'Small',
  onClick: undefined,
  differentiator: 'Purchasing'
};
