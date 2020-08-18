import React from 'react';
import classNames from 'classnames';
import {scopedClassMaker} from '../classes';
import './button.scss';

type ButtonSize = 'big' | 'small';
type ButtonType = 'main' | 'default' | 'danger' | 'waring' | 'success';
type Theme = 'button' | 'link' | 'text';

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  theme?: Theme;
  level?: ButtonType;
  
}

const scopedClass = scopedClassMaker('gulu');
const sc = scopedClass;
const Button: React.FC<BaseButtonProps> = (props) => {
  const {theme,level, disabled, size, children, href} = props;
  const classes = classNames(sc('button'), {
    [sc(`theme-${theme}`)]: theme,
    [sc(`size-${size}`)]: size,
    [sc(`level-${level}`)]: level,
    'disabled': (theme === 'link') && disabled
  });
  if (theme === 'link' && href) {
    return (
      <a
        href={href}
        className={classes}
      >
        <span>{children}</span>
      </a>
    );
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        <span>{children}</span>
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  theme: 'button'
};
export default Button;