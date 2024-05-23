var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var browserify = require("browserify");
var watchify = require("watchify")
var source = require("vinyl-source-stream")
var tsify = require("tsify")
var facncy_log = require("fancy-log")

var paths = {
   pages: ["src/*.html"],
}

// gulp.task("default", function(){
//     return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
// })

// gulp.task(
//     "default",
//     gulp.series(gulp.parallel("copy-html"), function(){
//         return browserify({
//             basedir: ".",
//             debug: true,
//             entries: ["src/main.ts"],
//             cache: {},
//             packageCache: {},
//         })
//         .plugin(tsify)
//         .bundle()
//         .pipe(source("bundle.js"))
//         .pipe(gulp.dest("dist"))
//     })
// );

var watchedBrowserify = watchify(
    browserify({
        basedir: ".",
        debug: true,
        entries: ["src/main.ts"],
        cache: {},
        packageCache: {},
    }).plugin(tsify)
)

gulp.task("copy-html", function () {
    return gulp.src(paths.pages).pipe(gulp.dest("dist"))
})

function bundle() {
    return watchedBrowserify
    .bundle()
    .on("error", facncy_log)
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"))
}

gulp.task("default", gulp.series(gulp.parallel("copy-html"), bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", facncy_log);