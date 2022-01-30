import svgSprite from 'gulp-svg-sprite';

export const svgSprites = () => {
    return app.gulp.src(app.path.src.svgicons)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Ошибка в SVG SPRITE",
                message: "Текст ошибки: <%= error.message %>",
            })
        ))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: `../icons/icons.svg`,
                    // Создавать страницу c примерами иконок
                    example: false
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.build.images));
}