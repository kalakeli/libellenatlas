var gulp = require('gulp'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  minify = require('gulp-clean-css');

// task to combine the various css files to one, minify, and safe
gulp.task('css', function() {
  gulp.src('src/styles/*.css')
      .pipe(concat('styles.css'))
      .pipe(minify())
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest('dist/css/'));
});

// as with my new Mac OS imagemagick and graphicsmagick seem not to work,
// I am trying this here and it works just fine
// step 1 - npm install sharp
// step 2 - npm install --save-dev gulp-responsive
// step 3 - npm install --save-dev gulp-load-plugins (am not sure I need it)
// https://github.com/mahnunchik/gulp-responsive/blob/master/examples/srcset.md
var $ = require('gulp-load-plugins')();
gulp.task('images', function () {
return gulp.src('src/images/*.{jpg,png}')
  .pipe($.responsive({
    // Convert all images to JPEG format
    '*': [{
      // image-medium.jpg is 375 pixels wide
      width: 400,
      quality: 70,
      rename: {
        suffix: '-medium',
        extname: '.jpg',
      },
    }, {
      // image-large.jpg is 480 pixels wide
      width: 768,
      quality: 70,
      rename: {
        suffix: '-large',
        extname: '.jpg',
      },
    }, {
      // image-extralarge.jpg is 768 pixels wide
      width: 990  ,
      quality: 70,
      rename: {
        suffix: '-extralarge',
        extname: '.jpg',
      },
    }],
  }))
  .pipe(gulp.dest('dist/images/'));
});

// keep an eye on changes in the styles folder
gulp.task('watch', function(){
  gulp.watch('src/styles/*.css', ['css']);
});

gulp.task('default', ['css', 'images', 'watch']);
