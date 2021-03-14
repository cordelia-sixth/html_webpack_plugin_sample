const HtmlWebpakcPlugin = require ('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  // webpack-dev-serverの設定
  devServer: {
    // ファイルを圧縮する
    compress: true,

    // // サーバー起動時に自動で開くページを指定する。openと組み合わせる？
    // openPage: "index.html",

    // // html,image,cssなどの静的コンテンツを配置するディレクトリを指定する。
    // // トップページとしたいindex.htmlをここに置けばルートとして開いてくれる
    contentBase: __dirname + '/dist/index.html',

    // // contentBaseのファイルに変更があった場合は自動的にブラウザをリロードする
    watchContentBase: true,

    hot: true,

    // 待ち受けport
    port: 8080,
  },
plugins: [
    new HtmlWebpakcPlugin({
      template: __dirname + '/src/index.html',
      title: 'Html Webpack Plugin sample',
    })
  ]
}