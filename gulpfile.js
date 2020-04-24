const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//compile scss to css
function convertscss() {

    return gulp.src("./scss/**/*.scss").pipe(sass().on("error", sass.logError)).pipe(gulp.dest("./css/")).pipe(browserSync.stream())

}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./scss/**/*.scss", convertscss);
    gulp.watch("./scss/**/*.scss").on("error", browserSync.reload);
    gulp.watch("./**/*.html").on("change", browserSync.reload);
    gulp.watch("./**/*.js").on("change", browserSync.reload)
}

exports.scss = convertscss;

exports.compile = watch