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
    
    return (name?: string | ClassToggles, options?: Options) => {
        /*
         Object.entries({a:1, c:2, b:3})
          out:0: (2) ["a", 1]
              1: (2) ["c", 2]
              2: (2) ["b", 3]
        * */
        // name = {hasAside: true, active: false, x:true, y:false}
        let name2;
        let result;
        if (typeof name === 'string' || name === undefined) {
            name2 = name;
            result = [prefix, name].filter(Boolean).join('-');
        } else {
            name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0]);
            // ['hasAside', 'x']
            result = name2.map(n => {
                return [prefix, n].filter(Boolean).join('-');
                
            }).join(' ');
            // ['.gulu-layout-hasAside', '.gulu-layout-x']'
            // .gulu-layout-hasAside .gulu-layout-x
        }
        
        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(' ');
        } else {
            return result;
        }
    };
}

export {scopedClassMaker};
