export const renderIndex = (req, res) => {
    res.render('index', {
        title: "My HOMEPAGE",
        length: 5
    })
}