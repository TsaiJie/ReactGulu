import React from "react";
import wechat from '../icons/wechat.svg'
interface  IconProps {
    name: string
}
console.log(wechat)
const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>{props.name}</span>
    )
}

export default Icon
