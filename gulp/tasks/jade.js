import gulp    from 'gulp';
import jade    from 'gulp-jade';
import notify  from 'gulp-notify';
import plumber from 'gulp-plumber';
import paths   from '../config';
import runSequence from 'run-sequence';

gulp.task('jade', () => {
	return gulp.src(paths.jade)
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(jade())
		.pipe(gulp.dest(paths.dist_dir));
});
