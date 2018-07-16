var Encore = require('@symfony/webpack-encore');

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
    .addEntry('js/bootstrap', './assets/js/bootstrap.bundle.js')
    .addEntry('js/homepage', './assets/js/homepage.js')
    .addEntry('js/mdb', './assets/js/mdb.js')
    .addEntry('js/popper', './assets/js/popper.min.js')
    .addEntry('js/jquery', './assets/js/jquery-3.3.1.min')
    .addStyleEntry('css/bootstrap', './assets/css/bootstrap.css')
    .addStyleEntry('css/mdb', './assets/css/mdb.css')
    .addStyleEntry('css/style', './assets/css/style.css')

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()

    // uncomment for legacy applications that require $/jQuery as a global variable
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
