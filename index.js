//importamos express.js para utilizarlo en nuestro proyecto
const express = require('express');
// creamos un app con express.js
const app = express ()
//importamos cors para poder hacer peticiones desde el cliente
const cors = require('cors');
// le decimos a express.js que use cors
app.use(cors());
// le decimos a express.js que use express.json para poder recibir y enviar datos en formato json
app.use(express.json());
//importamos static para poder utilizarlo en nuestro proyecto
app.use(express.static('EXPO'));

 
const port = 3000;

let players = [];   // Array de jugadores

class Player {
    constructor(identifier) {
        this.id = identifier;
    }

    assingRikumon(rikumon) {
        this.rikumon = rikumon;
    }

    assingPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    assingAttacks(ahre) {
        this.attacks = ahre;
    }
}

class Rikumon{
    constructor(name){
        this.name = name;
    }
}


// Le decimos a express.js que cuando en la Url raiz reciba una peticion responda con un "Hello World"
app.get('/', (req, res) => {
    
    res.send("Hello World");
    
})

// Le decimos a express.js que cuando en la Url raiz reciba una peticion responda con un ID unico
app.get('/join', (req, res) => {
    const id = `${Math.floor(Math.random() * 1000)}`;
    
    const player = new Player(id);
    
    if(players.length < 2) {
        players.push(player);
    } else {
        players.shift();
        return;
    }
    
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.send(id);
})

app.post('/rikumon/:juanID', (req, res) => {
    const playerID = req.params.juanID || "EL ID NO EXISTE";
    const namePet = req.body.rikumon || "EL NOMBRE NO EXISTE";
    const rikumon = new Rikumon(namePet);
    
    playerIndex = players.findIndex((element) => 
    playerID == element.id
    )    
    
    if (playerIndex != -1) {
        players[playerIndex].assingRikumon(rikumon);
    }
    
    console.log(namePet);
    console.log(players);
    console.log(playerID);
    res.end();
})

app.post(`/rikumon/:juanID/position`, (req, res) => {
    const playerID = req.params.juanID || "EL ID NO EXISTE";
    const xposition = req.body.x || "LA POSICION X NO EXISTE";
    const yposition = req.body.y || "LA POSICION Y NO EXISTE";

    playerIndex = players.findIndex((element) => 
    playerID == element.id
    )    

    if (playerIndex != -1) {
        players[playerIndex].assingPosition(xposition, yposition);
    }
    
    const enemies = players.filter((element) => playerID != element.id);

    res.send({
        enemies
    });
})

app.post(`/rikumon/:juanID/attacks`, (req, res) => {
    const playerID = req.params.juanID || "EL ID NO EXISTE";
    const attacks = req.body.attacks || "NO HAY ATAQUES";


    playerIndex = players.findIndex((element) => 
    playerID == element.id
    )
    
    if (playerIndex != -1) {
        players[playerIndex].assingAttacks(attacks);
    }

    console.log(attacks);

    res.end();
})

app.get(`/rikumon/:juanID/attacks`, (req, res) => {
    const playerID = req.params.juanID || "EL ID NO EXISTE";
    const player = players.find((element) => element.id == playerID);

    res.send({
        attacks: player.attacks || ["no hay ataques"]
    });

})

//Le decimos que escuche continuamente en el puerto 8080 las peticiones de los clientes para que pueda responderlas
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})