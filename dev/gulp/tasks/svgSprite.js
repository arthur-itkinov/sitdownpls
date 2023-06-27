import sprite from 'gulp-svg-sprite'

export const svgSprite = () => {
  return app.gulp.src(app.path.src.svgicons, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sprite({
      mode: {
        stack: {
          sprite: '../icons/icons.svg',
          example: true
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  name: "removeAttrs",
                  params: {
                    attrs: "svg:fill:none"
                  }
                }
              ]
            }
          }
        ]
      }
    }))
    .pipe(app.gulp.dest(app.path.build.images))
}

