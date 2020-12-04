const CompressionWebpackPlugin = require("compression-webpack-plugin");
const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");

module.exports = {
  publicPath: "./",
  lintOnSave: true,
  devServer: {
    compress: true,
    disableHostCheck: true
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      },
      less: {}
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // 正在匹配需要压缩的文件后缀
          test: /\.(js|css|svg|woff|ttf|json|html)$/,
          // 大于10kb的会压缩
          threshold: 10240
          // 其余配置查看compression-webpack-plugin
        })
      );
    }
  },
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  },
  runtimeCompiler: true,
  productionSourceMap: false
};
