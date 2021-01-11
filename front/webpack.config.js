const path = require("path"); // pathはnodeのデフォルトモジュール

module.exports = {
  entry: "./src/index.tsx", // webpackがビルドを始める際の開始点となるjsファイル、どのモジュールやライブラリに依存しているのか判断して、bundleと呼ばれるファイルに出力する
  output: {
    path: path.join(__dirname, "public/js"), // bundleファイルをwebpackがどこにどのような名前で出力するのか設定する
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader"},
          { loader: "css-loader", options: { modules: true } },
        ]
      }
    ],
  }
}
