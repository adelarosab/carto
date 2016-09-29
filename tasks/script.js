// Dependencies
const babelify = require('babelify');
const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');

// Task definition
gulp.task('script', gulp.series(scriptHandler));

// Handlers
function scriptHandler() {
  return browserify()
    .add('./scripts/main.js')
    .transform(babelify)
    .bundle()
    // End browserify
    .pipe(source('main.js'))
    .pipe(gulp.dest('./'));
}
