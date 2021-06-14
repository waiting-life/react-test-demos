// 配置具体的修改规则
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    // 允许js修改antd.less文件
  //  javascriptEnabled: true,
  //  modifyVars: { '@primary-color': '#1DA57A' },

  lessOptions: {
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }
 }),
);