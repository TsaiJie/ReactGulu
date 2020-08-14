import classes from "../classes";

describe('classes', ()=>{
  it("接受一个className", ()=>{
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it("接受两个className", ()=>{
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it("接受两个className,一个是undefined", ()=>{
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })
  it("接受0个参数", ()=>{
    const result = classes()
    expect(result).toEqual('')
  })
  it("接受各种奇怪的值", ()=>{
    const result = classes('阿','b', false, null, undefined)
    expect(result).toEqual('阿 b')
  })
})
