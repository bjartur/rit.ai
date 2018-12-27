import gulp from 'gulp';
import stylus from 'gulp-stylus';
import plumber from 'gulp-plumber';
import * as config from '../config.js';

gulp.task('stylus', () => {
  return gulp.src(config.stylus.files)
    .pipe(plumber())
    .pipe(stylus(config.stylus.options))
    .pipe(gulp.dest(config.css.src));
});
