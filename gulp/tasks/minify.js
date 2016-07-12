import gulp       from 'gulp';
import concat     from 'gulp-concat';
import imagemin   from 'gulp-imagemin';
import uglify     from 'gulp-uglify';
import prettify   from 'gulp-prettify';
import cssmin     from 'gulp-cssmin'
import paths      from '../config';
import pngquant   from 'imagemin-pngquant';


gulp.task('imagecopy', () => {
	return gulp.src(paths.img)
		.pipe(gulp.dest(paths.img_dist));
});

gulp.task('imagemin', () => {
	return gulp.src(paths.img)
		.pipe(imagemin({
			use: [
				pngquant({
					quality: 60 - 80,
					speed: 1
				})
			]
		}))
		.pipe(gulp.dest(paths.img_build));
});

gulp.task('cssmin', () => {
	return gulp.src(paths.css_dist)
		.pipe(cssmin())
		.pipe(gulp.dest(paths.css_build));
});

gulp.task('jsmin', () => {
	return gulp.src(paths.js_dist)
		.pipe(uglify())
		.pipe(gulp.dest(paths.js_dir));
});

gulp.task('templates', function() {
	gulp.src(paths.html_dist)
		.pipe(prettify({indent_char: ' ', indent_size: 2}))
		.pipe(gulp.dest(paths.build))
});
