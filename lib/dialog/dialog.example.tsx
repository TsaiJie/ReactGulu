import React, {Fragment, useState} from "react";
import Dialog from './dialog'
import {alert} from  './dialog'
const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false)
  const [y, setY] = useState(false)
  return (<Fragment>
    <div>
      <h1>example1</h1>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visible={x} buttons={
        [
          <button onClick={() => setX(false)}>1</button>,
          <button onClick={() => setX(false)}>2</button>
        ]
        
      } onClose={() => {setX(false)}}>
        <div>hi</div>
      </Dialog>
    </div>
    <div>
      <h1>example2</h1>
      <button onClick={() => setY(!y)}>click</button>
      <Dialog visible={y} buttons={
        [
          <button onClick={() => setY(false)}>1</button>,
          <button onClick={() => setY(false)}>2</button>
        ]
        
      } onClose={() => {setY(false)}} clickMaskClose={true}>
        <div>hi</div>
      </Dialog>
    </div>
    <div>
      <h1>example3</h1>
      <button onClick={() => alert('1')}>click</button>
    </div>
  </Fragment>)
}
export default DialogExample
