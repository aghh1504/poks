module.exports = {
    entry: ["./js/index.jsx"],
    output: {
      filename: "out.js"
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    cacheDirectory: true,
                      presets: ["es2015", 'stage-2', "react"]
                }
            },
            {
                test: /\.scss$/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ],
    }
}
