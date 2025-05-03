const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

const BUILD_FOLDER = './dist/';
const SRC_FOLDER = './js/*.js';

function watcher() {
 return gulp.watch(SRC_FOLDER, jsPrep)
};

function jsPrep() {
 return gulp.src(SRC_FOLDER)
 .pipe(uglify())
 .pipe(concat('build.js'))
 .pipe(gulp.dest(BUILD_FOLDER));
}

gulp.task('default', gulp.series(jsPrep, watcher));
