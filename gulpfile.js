var gulp = require('gulp');
var del = require('del');
var fileinclude = require('gulp-file-include');

/**
 * 清除
 */
gulp.task('clean', function(cb) {
	// return del(['dist', 'rev', 'views'], cb);
	//return del(['../front/**/*'],{force:true}, cb);
	return del(['../personal-center/css/**/*','../personal-center/img/**/*','../personal-center/js/**/*','../personal-center/views/**/*'],{force:true}, cb);
});

/**
 * 开发默认
 */
gulp.task('default', ['clean'], function(cb) {
		
	return gulp.src(['src/**'])
		//.pipe(jade())
		//.pipe(minify())
		.pipe(gulp.dest('../personal-center'));
});


/**
 * 解析引用
 */
gulp.task('fileinclude', ['default'], function() {
  gulp.src(['src/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('../personal-center'));
});

/**
 * 开发监听
 */
gulp.task('watch', function() {
	gulp.start('fileinclude');
	gulp.watch('src/**', ['fileinclude']);
});

/**
 * 开发生成
 */
gulp.task('dev', ['fileinclude'], function() {

});

