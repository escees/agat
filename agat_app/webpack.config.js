var Encore = require('@symfony/webpack-encore');
var webpack = require('webpack');

Encore
// the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    .addEntry('js/bootstrap', './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .addEntry('js/homepage', './assets/js/homepage.js')
    .addEntry('js/mdb', './assets/js/mdb.min.js') //this should also be loaded from vendors
    .addEntry('js/jquery', './node_modules/jquery/dist/jquery.min.js')
    .addStyleEntry('css/bootstrap', './node_modules/bootstrap/dist/css/bootstrap.min.css') // it is possible to include vendors directly from node_modules - no need to copy them into assets
    .addStyleEntry('css/mdb', './assets/css/mdb.min.css')
    .addStyleEntry('css/style', './assets/css/style.min.css')
    .addPlugin(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Waves: 'node-waves',
    }))
    // uncomment if you use Sass/SCSS files
    .enableSassLoader()

    // uncomment for legacy applications that require $/jQuery as a global variable
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
