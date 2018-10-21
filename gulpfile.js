var gulp = require('gulp');
var exec = require('gulp-exec');
var runSequence = require('run-sequence');
var del = require('del');
var zip = require('gulp-zip');

gulp.task('clean', function () {
  return del(['dist/**/*']);
});

gulp.task('docs', function(cb) {
  return exec('yarn docs:build', function(err) {
    if (err) {
      return cb(err);
    }
    cb();
  })
});

gulp.task('build', function () {
  return gulp.src('src/**').pipe(gulp.dest('dist/theme'));
});

gulp.task('zip-theme', function () {
  return gulp.src('dist/theme/**').pipe(zip('steam-theme-prodigy.zip')).pipe(gulp.dest('dist/'));
});

gulp.task('default', function() {
  return runSequence('clean', 'build', 'zip-theme');
});
