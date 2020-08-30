//
//  ┌───────────┐
//  │ VARIABLES │
//  └───────────┘
//

const gulp              = require('gulp'),
      plugins           = require('gulp-load-plugins')(),
      browserSync       = require('browser-sync').create();

//
//  ┌─────────┐
//  │ FOLDERS │
//  └─────────┘
//

let paths = {
  styles: {
    src: '_sass/**/*.{sass,scss}',
    dest: '_site/assets/css'
  },
  html: {
    src: '_site/**/*.html'
  }  
};

//
//  ┌───────────┐
//  │ FUNCTIONS │
//  └───────────┘
//

function stylesDev() {
  return gulp.src(paths.styles.src)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.dartSass())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest));
};

function reloadSite() {
  browserSync.init({
    port: 6768,
    watch: true,
    notify: false,
    ui: {
      port: 6769
    },    
    server: {
      baseDir: "_site",
    }
  });
}

function watch() {
  reloadSite();
  gulp.watch(paths.styles.src, gulp.series(stylesDev));
}

exports.stylesDev = stylesDev;
exports.watch = watch;

const
    dev = gulp.parallel(gulp.series(stylesDev), watch);

gulp.task('dev', dev);