import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../button'
describe('button', () => {
  it('是个div', () => {
    // renderer 渲染 虚拟DOM
    const json = renderer.create(<Button></Button>).toJSON()
    expect(json).toMatchSnapshot()
  })
})