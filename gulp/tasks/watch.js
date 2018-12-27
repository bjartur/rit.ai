import gulp from 'gulp';
import * as config from '../config.js';

gulp.task('watch', () => {
  gulp.watch(config.stylus.files,      ['stylus']);
});
