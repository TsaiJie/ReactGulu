import React from 'react';
import classNames from 'classnames';
import {scopedClassMaker} from '../classes';
import './button.scss';

type ButtonSize = 'big' | 'small';
// type ButtonType = 'primary' | 'default' | 'danger';
type Theme = 'button' | 'link' | 'text';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  // btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
  theme?: Theme;
  
}

const scopedClass = scopedClassMaker('gulu');
const sc = scopedClass;
const Button: React.FC<BaseButtonProps> = (props) => {
  const {theme, disabled, size, children, href} = props;
  const classes = classNames(sc('button'), {
    [sc(`theme-${theme}`)]: theme,
    [sc(`size-${size}`)]: size,
    'disabled': (theme === 'link') && disabled
  });
  if (theme === 'link' && href) {
    return (
      <a
        href={href}
        className={classes}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  theme: 'button'
};
export default Button;