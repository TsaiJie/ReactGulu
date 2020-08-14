import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name={'qq'}/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
