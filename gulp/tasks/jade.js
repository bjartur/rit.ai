import gulp from 'gulp';
import jade from 'gulp-jade';
import * as config from '../config.js';

gulp.task('templates', function() {
  gulp.src(config.templates.files, {base: "./"})
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest(config.templates.dest))
});
