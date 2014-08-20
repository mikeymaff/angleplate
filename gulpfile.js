// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

// Compile Our Less
gulp.task('less', function() {
return gulp.src('app/less/*.less')
.pipe(less())
.pipe(gulp.dest('app/styles'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
return gulp.src('app/js/*.js')
.pipe(concat('all.js'))
.pipe(gulp.dest('app/scripts'))
.pipe(rename('all.min.js'))
.pipe(uglify())
.pipe(gulp.dest('app/scripts'));
});

gulp.task('images', function() {
return gulp.src('app/img/*')
.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
.pipe(gulp.dest('img'))
});

// Watch Files For Changes
gulp.task('watch', function() {
gulp.watch('app/js/*.js', ['scripts']);
gulp.watch('app/less/*.less', ['less']);
gulp.watch('app/img/*', ['images']);
});

// Default Task
gulp.task('default', ['less', 'scripts', 'images', 'watch']);