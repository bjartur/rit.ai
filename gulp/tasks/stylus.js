import gulp from 'gulp';
import stylus from 'gulp-stylus';
import * as config from '../config.js';

gulp.task('stylus', () => {
  return gulp.src(config.stylus.files)
    .pipe(stylus(config.stylus.options))
    .pipe(gulp.dest(config.css.src));
});
