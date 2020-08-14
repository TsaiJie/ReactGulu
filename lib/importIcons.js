// 动态引入一个目录的所有svg内容
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('./icons/', true, /\.svg$/))
} catch (errors) {
  console.log(errors);
}
