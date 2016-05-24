import gulp        from 'gulp';
import browserSync from 'browser-sync';
import paths       from '../config';

gulp.task('server', () => {
  browserSync({
    server: {
      baseDir: paths.dist_dir
    }
  })
});

