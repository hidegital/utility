import gulp     from 'gulp';
import stylus   from 'gulp-stylus';
import pleeease from 'gulp-pleeease';
import csscomb  from 'gulp-csscomb';
import cssmin   from 'gulp-cssmin';
import plumber  from 'gulp-plumber';
import rupture  from 'rupture';
import paths    from '../config';


gulp.task('stylus', () => {
	return gulp.src(paths.stylus)
		.pipe(plumber())
		.pipe(stylus({
			use: [rupture()]
	})).pipe(pleeease({
		minifier: false,
		autoprefixer: {
			"browsers": ["last 4 versions"]
		}
	})).pipe(csscomb())
		.on('error', console.error.bind(console))
		.pipe(gulp.dest(paths.css_dir));
});


