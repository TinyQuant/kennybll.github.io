var gulp  = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  postcss      = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  minify = require('gulp-minify');

gulp.task('build-js', function() {
  return gulp.src(['./node_modules/jquery/dist/jquery.js', './node_modules/popper.js/dist/umd/popper.js', './node_modules/bootstrap/dist/js/bootstrap.js', './node_modules/jquery-ui/ui/widgets/slider.js', './node_modules/jquery-ui/ui/widgets/mouse.js', './node_modules/jquery-ui/ui/widget.js', './js/*.js'])
  .pipe(minify())  
  .pipe(gulp.dest('build/'))
});

gulp.task('build-theme', function() {
  return gulp.src(['scss/mytheme.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: [
      'Chrome >= 35',
      'Firefox >= 38',
      'Edge >= 12',
      'Explorer >= 10',
      'iOS >= 8',
      'Safari >= 8',
      'Android 2.3',
      'Android >= 4',
      'Opera >= 12']})]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/'))
    .pipe(cleanCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/'))
});

gulp.task('watch', ['build-theme'], function() {
  gulp.watch(['scss/*.scss'], ['build-theme']);
  gulp.watch(['js/*.js'], ['build-js']);
});

gulp.task('default', ['build-theme', 'build-js'], function() {
});



