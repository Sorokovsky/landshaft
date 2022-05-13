import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./dist`;
const srcFolder = `./src`;
export const path = {
    build: {
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/img/`,
        files: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        js: `${srcFolder}/js/script.js`,
        files: `${srcFolder}/*.htaccess`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,mp4}`,
        svg: `${srcFolder}/img/**/*.svg`,
        html: `${srcFolder}/**/*.{html,php}`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,ico,png,gif,webp,mp4}`,
        scss: `${srcFolder}/scss/style.scss`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.{html,php}`,
        files: `${srcFolder}/*.htaccess`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,svg,ico,png,gif,webp}`,
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}