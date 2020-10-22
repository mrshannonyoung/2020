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
    src:    '_sass/**/*.{sass,scss}',
    dest:   '_site/assets/css'
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

function stylesDist() {
  return gulp.src(paths.styles.src)
    .pipe(plugins.dartSass({outputStyle: 'compressed'}))
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
    },
    callbacks: {
        /**
         * This 'ready' callback can be used
         * to access the Browsersync instance
         */
        ready: function(err, bs) {
            // example of adding a middleware at the end
            // of the stack after Browsersync is running
            bs.addMiddleware("*", function (req, res) {
                res.writeHead(302, {
                    location: "/404.html"
                });
                res.end("Redirecting!");
            });
        }
    }    
  });
}

function watch() {
  reloadSite();
  gulp.watch(paths.styles.src, gulp.series(stylesDev));
}

exports.stylesDev = stylesDev;
exports.stylesDist = stylesDist;
exports.watch = watch;

const
    dev = gulp.parallel(gulp.series(stylesDev), watch),
    dist = gulp.parallel(stylesDist);

gulp.task('dev', dev),
gulp.task('default', dist);