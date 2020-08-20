import classes, {scopedClassMaker} from "../classes";

describe('classes', () => {
  it("接受一个className", () => {
    const result = classes('a')
    expect(result).toEqual('a')
  })
  it("接受两个className", () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  })
  it("接受两个className,一个是undefined", () => {
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  })
  it("接受0个参数", () => {
    const result = classes()
    expect(result).toEqual('')
  })
  it("接受各种奇怪的值", () => {
    const result = classes('阿', 'b', false, null, undefined)
    expect(result).toEqual('阿 b')
  })
})

describe("测试scopedClassMarker", () => {
    it('接受字符串或者对象', () => {
      const sc = scopedClassMaker('gulu-layout')
      expect(sc()).toEqual('gulu-layout')
      expect(sc('x')).toEqual('gulu-layout-x')
      expect(sc({y: true, z: false})).toEqual('gulu-layout-y')
      expect(sc({y: true, z: true})).toEqual('gulu-layout-y gulu-layout-z')
      expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('gulu-layout-y gulu-layout-z red')
      
    })
  }
)
