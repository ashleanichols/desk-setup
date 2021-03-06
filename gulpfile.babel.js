//HTML
import htmlmin from "gulp-htmlmin";

//CSS
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";

//JavaScript
import gulp from "gulp";
import babel from "gulp-babel";
import terser from "gulp-terser";

//PUG
import pug from "gulp-pug";

//SASS
import sass from "gulp-sass";

//Common
import concat from "gulp-concat";

//Clean CSS
import clean from "gulp-purgecss";

//Optimización imágenes
import imagemin from "gulp-imagemin";

//Browser sync
import {
    init as server,
    stream,
    reload
} from "browser-sync";

//Plumber
import plumber from "gulp-plumber";

//Variables/constantes
const cssPlugins = [cssnano(), autoprefixer()];

gulp.task("html-min", () => {
    return gulp
        .src("./src/*.html")
        .pipe(plumber())
        .pipe(
            htmlmin({
                collapseWhitespace: true,
                removeComments: true,
            })
        )
        .pipe(gulp.dest("./public"));
});

gulp.task("styles", () => {
    return gulp
        .src("./src/css/*.css")
        .pipe(plumber())
        .pipe(concat("styles-min.css"))
        .pipe(postcss(cssPlugins))
        .pipe(gulp.dest("./public/css"))
        .pipe(stream());
});

gulp.task("babel", () => {
    return gulp
        .src("./src/js/*.js")
        .pipe(plumber())
        .pipe(concat("scripts-min.js"))
        .pipe(babel())
        .pipe(terser())
        .pipe(gulp.dest("./public/js"));
});

gulp.task("views", () => {
    return gulp
        .src("./src/*.pug")
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("./public"));
});

gulp.task("sass", () => {
    return gulp
        .src("./src/scss/index.scss")
        .pipe(plumber())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(postcss(cssPlugins))
        .pipe(concat("styles.css"))
        .pipe(gulp.dest("./public/css"))
        .pipe(stream());
});

gulp.task("clean", () => {
    return gulp
        .src("./public/css/*.css")
        .pipe(plumber())
        .pipe(clean({ content: ["./public/*.html"] }))
        .pipe(gulp.dest("./public/css"));
});

gulp.task("imgmin", () => {
    return gulp
        .src("./src/images/*")
        .pipe(plumber())
        .pipe(
            imagemin([
                imagemin.gifsicle({
                    interlaced: true
                }),
                imagemin.mozjpeg({
                    quality: 30,
                    progressive: true
                }),
                imagemin.optipng({
                    optimizationLevel: 1
                }),
            ])
        )
        .pipe(gulp.dest("./public/images"));
});

gulp.task("default", () => {
    server({
        server: "./public",
    });
    gulp.watch("./src/**/*.pug", gulp.series("views")).on("change", reload);
    gulp.watch("./src/scss/**/*.scss", gulp.series("sass"));
    gulp.watch('./src/js/*.js', gulp.series('babel')).on('change', reload);
});
