import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name='qq'/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    // 模拟click
    const fn = jest.fn()
    // 挂在在内存中
    const component = mount(<Icon name="alipay" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})
