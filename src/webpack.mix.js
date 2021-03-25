const mix = require('laravel-mix');
const Mix = require('laravel-mix/src/Mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     // .react()
//      .postCss("resources/css/app.css", "public/css",
//     [require("tailwindcss")]);
mix.js("resources/js/app.js", "public/js").postCss(
    "resources/css/app.css",
    "public/css",
    [require("tailwindcss")]
);

Mix.listen("configReady", webpackConfig => {
    webpackConfig.module.rules.forEach(rule => {
        if (Array.isArray(rule.use)) {
            rule.use.forEach(ruleUse => {
                if (ruleUse.loader === "resolve-url-loader") {
                    ruleUse.options.engine = "postcss";
                    ruleUse.options.debug = true;
                }
            });
        }
    });
});
