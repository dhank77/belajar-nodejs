const router = require('express').Router();

router.get('/', function(req, res){
    res.send('Web Server Node Js With Router');
});

router.get('/cari', function(req, res){
    res.send('Belajar Method ' + req.method);
});

router.post('/cari', function(req, res){
    res.send('Belajar Method ' + req.method);
});

router.put('/cari', function(req, res){
    res.send('Belajar Method ' + req.method);
});

router.delete('/cari', function(req, res){
    res.send('Belajar Method ' + req.method);
});

router.get('/about', function(req, res){
    res.send('Hasil Query Nama ' + req.query.nama + ' Umur ' + req.query.umur);
});

router.get('/profile', function(req, res){
    res.redirect('/');
});

module.exports = router;
