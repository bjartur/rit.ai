import gulp from 'gulp';
import codecov from 'gulp-codecov.io';
 
gulp.task('codecov', () => {
    return gulp.src('./coverage/lcov.info')
      .pipe(codecov());
});
