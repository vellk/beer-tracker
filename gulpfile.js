var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("scripts", function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
    return gulp.watch("src/**/*.ts", ["scripts"])
});

gulp.task("default", ["watch"]);