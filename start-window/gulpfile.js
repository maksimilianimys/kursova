const gulp = require('gulp');
const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const include = require('gulp-file-include');


let path = {
    build: {
        html: "docs/",
        css: "docs/css/",
        js: "docs/js/",
        img: "docs/images/",
        fonts: "docs/fonts/"
    },
    src: {
        html: "src/pages/*.html",
        css: "src/resources/scss/styles.scss",
        js: "src/modules/js/**/*.js",
        img: "src/resources/images/**/*",
        fonts: "src/resources/fonts/**/*"
    },
    watch: {
        html: "src/pages/**/*.html",
        css: "src/resources/scss/**/*.scss",
        js: "src/modules/js/**/*.js",
        img: "src/resources/images/**/*"
    }
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'docs/'
        },
        notify: false,
        online: true
    })
}

function html() {
    return src(path.src.html)
        .pipe(include())
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
}

function images() {
    return src(path.src.img)
        .pipe(imagemin())
        .pipe(dest(path.build.img))
        .pipe(browserSync.stream())
}

function styles() {
    return src([
        path.src.css
    ])
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(rename('main.min.css'))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
        .pipe(cleancss({level: {1: {specialComments: 0}}}))
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}

function scripts() {
    return src(path.src.js)
        .pipe(uglify())
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}

function startwatch() {

    watch(path.watch.html, html);
    watch(path.watch.css, styles);
    watch(path.watch.js, scripts);
    watch(path.watch.img, images);

}

exports.browsersync = browsersync;
exports.html = html;
exports.fonts = fonts;
exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.default = series(
    parallel(html, fonts, images, styles, scripts),
    parallel(browsersync, startwatch)
);