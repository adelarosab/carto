// Dependencies
const gulp = require('gulp');
const Registry = require('gulp-hub');

// Load some files into the registry
const hub = new Registry(['./tasks/*.js']);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

// Watch
gulp.task('watch', watch);

// Default task
gulp.task('default', gulp.series('script', 'watch'));

function watch() {
  gulp.watch(
    './scripts/**/*.js',
    gulp.series('script')
  );
}
