export const server = (done) => {
    app.plugins.browsersync.init({
        proxy: 'http://landshaft.loc',
        port: 3000,
    }); 
    done();
}