const LicensePlugin = require('webpack-license-plugin')

module.exports = [{
    entry: './src/index.js',
    output: {
        library: "MeshCat",
        libraryTarget: 'umd'
    },
    watch: false,
    mode: "development",
    devtool: "eval-cheap-source-map"
}, {
    entry: './src/index.js',
    output: {
        filename: "main.min.js",
        library: "MeshCat",
        libraryTarget: 'umd'
    },
    watch: false,
    mode: "production",
    plugins: [
      new LicensePlugin({
        licenseOverrides: {
            'wwobjloader2@6.2.0': 'MIT'
        },
        outputFilename: "main.min.js.THIRD_PARTY_LICENSES.json"
    })
    ],
}];
