
const express = require('express');
const games=require("./games.json");

const app = express();
const port = 3500;;


app.set('view engine', 'ejs')
app.set('views', './views');


app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.render('index')
});

app.get('/game/:nameGame', (req, res)=> {
    const nameGame=req.params.nameGame;
    if(nameGame === 'fourchette') {
        res.render('fourchette')
    } 
    else if (nameGame === 'diceRoller'){
        res.render('diceRoller', {css:"diceRoller.css"});
    }
    else  {
        res.status(404).render('404');
    }
});


/*app.get("/game/fourchette",(req, res) => {
    res.render('fourchette')
  
});

app.get("/game/diceRoller",(req, res) => {
    res.render('diceRoller')
})*/


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})