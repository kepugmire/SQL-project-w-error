exports.getProducts = function (req, res) {
    req.app.get('db').read_products().then(function (products) {
        res.send(products);
    })
}


exports.makeNew = function (req, res) {
    console.log(req.body)
    var newProduct = [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.imageurl
    ];
    req.app.get('db').create_products(newProduct).then(function (products) {
        res.send(products);
    })
}


// exports.getAll = function (req, res) {
//     req.app.get('db').read_products().then(function (products) {
//         res.send(products);
//     })
// }


// exports.Update = function (req, res) {
//     req.app.get('db').read_products().then(function (products) {
//         res.send(products);
//     })
// }


// exports.Delete = function (req, res) {
//     req.app.get('db').read_products().then(function (products) {
//         res.send(products);
//     })
// }