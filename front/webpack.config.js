const path = require("path"); // pathはnodeのデフォルトモジュール

module.exports = {
  entry: "./src/index.tsx", // webpackがビルドを始める際の開始点となるjsファイル、どのモジュールやライブラリに依存しているのか判断して、bundleと呼ばれるファイルに出力する
  output: {
    path: path.join(__dirname, "public/js"), // bundleファイルをwebpackがどこにどのような名前で出力するのか設定する
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current"
                  }
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              [
                "babel-plugin-import",
                {
                  libraryName: "@material-ui/icons",
                  libraryDirectory: "",
                  camel2DashComponentName: false
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              localsConvention: "camelCase",
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          }
        ]
      }
    ]
  }
};
