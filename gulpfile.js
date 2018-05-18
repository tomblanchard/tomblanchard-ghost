var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
  return gulp.src("./assets/**/*.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(gulp.dest("./assets"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./assets/**/*.scss", ["sass"]);
});

gulp.task("default", [
  "sass",
  "sass:watch"
]);
