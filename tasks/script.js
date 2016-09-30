// Dependencies
const babelify = require('babelify');
const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');

// Task definition
gulp.task('script', gulp.series(scriptHandler));

function errorHandler(error) {
  console.log(error.toString());
  this.emit('end');
}

// Handlers
function scriptHandler() {
  return browserify()
    .add('./scripts/main.js')
    .transform(babelify)
    .bundle()
    .on('error', errorHandler)
    // End browserify
    .pipe(source('main.js'))
    .pipe(gulp.dest('./'));
}
