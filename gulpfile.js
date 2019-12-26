const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyhtml = require('gulp-htmlmin')
const minifyCSS = require('gulp-uglifycss');
const minifyJS = require('gulp-uglify');
//const image = require('gulp-image');

//Minificando html
function html() {
    return src('src/*.html')
    .pipe(minifyhtml({collapseWhitespace: true, removeComments: true }))
    .pipe(rename({extname: '.min.html'}))
    .pipe(dest('dist/'));
}

// Minificando Css
function css() {
    return src('src/css/*.css')
    .pipe(minifyCSS({'maxLineLen': 80, uglyComments: true}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('dist/css'));
}

// Minificando javascript
function javascript() {
    return src('src/js/*.js')
    .pipe(minifyJS())
    .pipe(rename({extname: '.min.js'}))
    .pipe(dest('dist/js'));
}

// Otimizando Imagens
/*
function opamizeImage() {
    return src('src/img/*')
    .pipe(image())
    .pipe(dest('dist/img'));
}
*/


exports.default = parallel(html, css, javascript);

