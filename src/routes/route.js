const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
/*Assignment*/
//1.
router.get('/movies', function (req, res) 
{
    const moviesArr=["The Godfather","12 Angry Men ","The Lord of the Rings","The Dark Knight","Pulp Fiction","The Good, the Bad and the Ugly"];
    res.send(moviesArr);
});
//2.
router.get('/movies1/:indexNumber', function (req, res) 
{
    const moviesArr=["The Godfather","12 Angry Men ","The Lord of the Rings","The Dark Knight","Pulp Fiction","The Good, the Bad and the Ugly"];
    let value=req.params.indexNumber;
    res.send(moviesArr[value])
});
//3.
router.get('/movies2/:indexNumber', function (req, res) 
{
    const moviesArr=["The Godfather","12 Angry Men ","The Lord of the Rings","The Dark Knight","Pulp Fiction","The Good, the Bad and the Ugly"];
    let value=req.params.indexNumber;
    (value>=moviesArr.length)?res.send("Invalid index!"):res.send(moviesArr[value])
});
//4.
router.get('/films', function (req, res) {
    const moviesArrObj=[ 
        {
        id: 1,
        name:"The Shining"
       }, 
       {
        id: 2,
        name:"Incendies"
       }, {
        id: 3,
        name:"Rang de Basanti"
       }, {
        id: 4,
        name:"Finding Demo"
       }];
       res.send(moviesArrObj);
});
//5.
router.get('/films/:filmId', function (req, res) {
    const moviesArrObj=[ 
        {
        id: 1,
        name:"The Shining"
       }, 
       {
        id: 2,
        name:"Incendies"
       }, {
        id: 3,
        name:"Rang de Basanti"
       }, {
        id: 4,
        name:"Finding Demo"
       }];
       let value=req.params.filmId;
       (value>moviesArrObj.length)?res.send("No movie exists with this id!"):res.send(moviesArrObj[value-1])
});



module.exports = router;