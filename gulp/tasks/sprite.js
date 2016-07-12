import gulp     from 'gulp';
import stylus   from 'gulp-stylus';
import spritesmith from 'gulp.spritesmith';
import plumber  from 'gulp-plumber';
import paths    from '../config';


gulp.task('sprite', function() {
    var spriteData;
    spriteData = gulp.src('src/img/sprite/*.png')
        .pipe(plumber())
        .pipe(spritesmith({
        imgName: '../img/sprite/sprite.png',
        cssName: 'sprite.styl',
        algorithm: 'binary-tree',
        padding: 5,
        cssFormat: 'stylus'
    }));
    spriteData.img.pipe(gulp.dest(paths.img_dist));
    return spriteData.css.pipe(gulp.dest(paths.stylus_sprite));
});
