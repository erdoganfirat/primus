import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';




const prefix = "primus-"; //Tum componentleri kapsayan bir yere alinmali!!!
const icon = "★";

/** description */
export const Button = ({ brand, theme, variant, size, text, disabled, iconLeft, iconRight, iconOnly, icon}) => {
    return (
    <div brand={`${brand}`} theme={`${theme}`}>
        <button
            type='button'
            className={[`${prefix}btn`, `${prefix}btn-${variant}`, `${prefix}btn-${size}`].join(' ')}
            disabled={disabled}
        >
            {iconLeft && !iconOnly ? <span>{icon}</span> : null}
            {iconOnly ? <span>{icon}</span> : iconLeft || iconRight ? <label>{text}</label> : text}
            {iconRight && !iconOnly ? <span>{icon}</span> : null}
        </button>
    </div>
    );
};

  /**
   * Is this the principal call to action on the page?
   */

Button.propTypes = {
    brand: PropTypes.oneOf(['hepsiburada', 'hepsipay', 'market', 'su', 'cicek']),
    theme: PropTypes.oneOf(['light', 'dark']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'ghost', 'borderedGray', 'success', 'error']),
    text: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    disabled: PropTypes.bool,
    iconLeft: PropTypes.bool,
    iconRight: PropTypes.bool,
    iconOnly: PropTypes.bool,
    icon: PropTypes.string,
};

Button.defaultProps = {
    brand: 'hepsiburada',
    theme: 'light',
    variant: 'primary',
    text: 'Button',
    size: 'md',
    disabled: false,
    iconLeft: false,
    iconRight: false,
    iconOnly: false,
    icon: "+",
};
