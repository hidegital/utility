import gulp      from 'gulp';
import paths     from '../config';
import htmllint  from 'gulp-html5-lint';
import plumber   from 'gulp-plumber';
import notify    from 'gulp-notify';

gulp.task('htmllint', () => {
	return gulp.src(paths.dist_dir + '/*.html')
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(htmllint());
});







