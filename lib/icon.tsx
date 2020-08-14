import React from "react";
import './importIcons'
import './icon.scss'
import classes  from "./helper/classnames";
interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    const {className, name, ...restProps} = props
    console.log(restProps)
    return (
        <svg className={classes('gulu-icon',className)}
             {...restProps}
        >
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
}

export default Icon
