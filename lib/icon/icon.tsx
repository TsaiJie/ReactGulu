import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helper/classes';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> =
    ({className, name, ...restProps}) => {
        return (
            <svg className={classes('gulu-icon', className)}
                 {...restProps}
            >
                <use xlinkHref={`#${name}`}/>
            </svg>
        );
    };

export default Icon;
