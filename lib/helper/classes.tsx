function classes(...names: (string | undefined)[]) {
  return names.filter(Boolean).join(' ');
  
}

export default classes;


interface Options {
  extra: string | undefined;
}

interface ClassToggles {
  [Key: string]: boolean;
}

function scopedClassMaker(prefix: string) {
  
  return (name: string | ClassToggles, options?: Options) => {
    /*
     Object.entries({a:1, c:2, b:3})
      out:0: (2) ["a", 1]
          1: (2) ["c", 2]
          2: (2) ["b", 3]
    * */
    // name = {hasAside: true, active: false, x:true, y:false}
    // ['hasAside', 'x']
    // ['.gulu-layout-hasAside', '.gulu-layout-x']'
    // .gulu-layout-hasAside .gulu-layout-x
    const nameObjects = (typeof name === 'string' || name === undefined) ? {[name]: name} : name;
    const scoped = Object
    .entries(nameObjects)
    .filter(kv => kv[1] !== false)
    .map(kv => kv[0])
    .map(name => {
      return [prefix, name].filter(Boolean).join('-');
    }).join(' ');
    
    if (options && options.extra) {
      return [scoped, options.extra].filter(Boolean).join(' ');
    } else {
      return scoped;
    }
  };
}

export {scopedClassMaker};
