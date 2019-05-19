const modoDev = process.env.NODE_ENV !== 'production' // Se estiver no modo de desenvolvimento essa variavel é diferente de production
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
//const devServer = require('dev')

module.exports = {
    mode: modoDev ? 'development': 'production',
    entry: "./src/principal.js",
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // __dirname é uma variável de ambiente do próprio node
    },    
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    optimization:{
        minimizer: [
          new UglifyJsPlugin({//{
               cache: true,
              parallel: true,
          }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,// /\.css$/, // rege ex
            use: [
                MiniCssExtractPlugin.loader, // deixa o arquivo css separador
                //'style-loader',// É um plugin que adiciona dentro da DOM a tag style
                'css-loader',
                'sass-loader'
            ] // Interpretar impost e urls, imagens etc..
        }, {
            test: /\.(png|svg|jpg|gif|)$/,
            use:['file-loader']
        }]
    }
}

/**
 * Obs.: O plugin css loader permite tratar imgens referenciadas dentro
 * dos arquivos acessiveis.
 */