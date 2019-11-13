var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css);

gulp.task('browser-sync', function() {
browserSync.init({
server: {
baseDir: "./sass"
}
});
});
gulp.watch("*.html").on("change", browerSyc.reload);

gulp.task('styles', function(){
gulp.src(['src/styles/**/*.css'])
.pipe(minifyCss())
.pipe(gulp.dest.('dist/styles'))
.pipe(browserSync.stream());
});
gulp.task('default', function(){
browserSync.init({
server:'./'});
gulp.watch('*.html', browserSync.reload);
});
