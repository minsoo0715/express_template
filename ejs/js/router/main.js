export const main = (app) => {
    app.get('/', function(req, res) {
        res.render('index', {
            title: "My HOMEPAGE",
            length: 5
        })
    });
}