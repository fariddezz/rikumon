let brrr;
let ramdomEnemyAttackNumber;
let Innerelectro = "Electro⚡"
let Innerpyro = "Pyro🔥"
let Innerhydro = "Hydro💧"
let petselected;
const selectPetSection = document.getElementById('select-pet')
const selectAttackSection = document.getElementById('select-attack')
const restartSection = document.getElementById('restart')
const buttonPetPlayer = document.getElementById('b-pselection')
const spanPlayersPet = document.getElementById('spanPlayersPet')
const enemysPet = document.getElementById('spanEnemysPet')
const SpanVictoriesPlayersPet = document.getElementById('SpanVictoriesPlayersPet')
const SpanVictoriesEnemysPet = document.getElementById('SpanVictoriesEnemysPet')
const bRestart = document.getElementById('b-restart')

const paragraph = document.getElementById('result')
const player_attacks = document.getElementById('player-attacks')
const enemy_attacks = document.getElementById('enemy-attacks')
const cardsContainer = document.getElementById('cardsContainer')
const attacksContainer = document.getElementById('attacksContainer')
const sectionViewMap = document.getElementById('view-map')
const map = document.getElementById('canvasMap')

//pets
let petInput;
let rikumons = []
let ArrayPets = []
let opcionOfRikumons;
let inputFrektro;
let inputGryrho;
let inputThornhydro;
let inputCryofrist;
let inputTerrafang;
let inputSkywing;
let rikumonsAttacks;

//Canvas Variable
let canvas = map.getContext('2d')

//Variables de los botones de ataques
let bElectro;
let bPyro;
let bHydro;
let bCryo;
let bTerra;
let bAero;

let backgroundMap = new Image()
backgroundMap.src = './assets/Maps/rikumap.png'
let enemyAttack;
let buttons = []
let attacksOfPlayer = []
let attacksOfEnemy = []
let PlayerVictories = 0
let EnemyVictories = 0
let indexEnemyAttack;
let indexPlayerAttack;
let interval;
let petPlayerObject;
let isGameStarted = false; //Agregas esta variable arriba
const nfrektro = "Frektro⚡"
const ngryrho = "Gryrho🔥"
const nthornhydro = "Thornhydro💧"

class Rikumon {
    constructor (name, picture, type, mapPicture, X = 4, Y= 4){
        this.name = name
        this.picture = picture
        this.type = type
        this.attacks = []
        this.x = X
        this.y = Y
        this.width = 40
        this.height = 40
        this.mapPicture = new Image()
        this.mapPicture.src = mapPicture
        this.speedX = 0
        this.speedY = 0
    }
    
    drawRikumkon(width = 60, height = 60){
        canvas.drawImage(
            this.mapPicture,
            this.x,
            this.y,
            this.width = width,
            this.height = height
        );
    }
}

//Agregando Objetos Brrrrrrrrr

let frektro = new Rikumon ('Frektro', './assets/Rikumons/png/Frektro.png', 'Electro', 'assets/HEAD_ICONS/Frektro_Head_Icon_Sticker.png')

let gryrho = new Rikumon ('Gryrho', './assets/Rikumons/png/Gryrho.png', 'Pyro', 'assets/HEAD_ICONS/Gryrho_Head_Icon_Sticker.png')

let thornhydro = new Rikumon ('Thornhydro', './assets/Rikumons/png/Thornhydro.png', 'Hydro', 'assets/HEAD_ICONS/Thornhydro_Head_Icon_Sticker.png')

let cryofrist = new Rikumon ('Cryofrist', './assets/Rikumons/png/Cryofrist.png', 'Cryo', 'assets/HEAD_ICONS/Cryofrist_Head_Icon_Sticker.png')

let terrafang = new Rikumon ('Terrafang', './assets/Rikumons/png/Terrafang.png', 'Terra', 'assets/HEAD_ICONS/Terrafang_Head_Icon_Sticker.png')

let skywing = new Rikumon('Skywing', './assets/Rikumons/png/Skywing.png', 'Aero', 'assets/HEAD_ICONS/Skywing_Head_Icon_Sticker.png')



let frektroEnemy = new Rikumon ('Frektro', './assets/Rikumons/png/Frektro.png', 'Electro', 'assets/HEAD_ICONS/Frektro_Head_Icon_Sticker.png', random(0, 600), random(0, 400))

let gryrhoEnemy = new Rikumon ('Gryrho', './assets/Rikumons/png/Gryrho.png', 'Pyro', 'assets/HEAD_ICONS/Gryrho_Head_Icon_Sticker.png', random(0, 600), random(0, 400))

let thornhydroEnemy = new Rikumon ('Thornhydro', './assets/Rikumons/png/Thornhydro.png', 'Hydro', 'assets/HEAD_ICONS/Thornhydro_Head_Icon_Sticker.png', random(0, 600), random(0, 400))

let cryofristEnemy = new Rikumon ('Cryofrist', './assets/Rikumons/png/Cryofrist.png', 'Cryo', 'assets/HEAD_ICONS/Cryofrist_Head_Icon_Sticker.png', random(0, 600), random(0, 400))

let terrafangEnemy = new Rikumon ('Terrafang', './assets/Rikumons/png/Terrafang.png', 'Terra', 'assets/HEAD_ICONS/Terrafang_Head_Icon_Sticker.png', random(0, 600), random(0, 400))

let skywingEnemy = new Rikumon('Skywing', './assets/Rikumons/png/Skywing.png', 'Aero', 'assets/HEAD_ICONS/Skywing_Head_Icon_Sticker.png', random(0, 600), random(0, 400))

frektro.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '⚡', id: 'b-electro'},
    {name: '⚡', id: 'b-electro'},
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

gryrho.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

thornhydro.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '💧', id: 'b-hydro'},
    {name: '💧', id: 'b-hydro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

cryofrist.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '❄️', id: 'b-cryo'},
    {name: '❄️', id: 'b-cryo'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

terrafang.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '🌿', id: 'b-terra'},
    {name: '🌿', id: 'b-terra'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

skywing.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
    {name: '💨', id: 'b-aero'},
    {name: '💨', id: 'b-aero'},
    {name: '💨', id: 'b-aero'},
)



frektroEnemy.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '⚡', id: 'b-electro'},
    {name: '⚡', id: 'b-electro'},
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

gryrhoEnemy.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

thornhydroEnemy.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '💧', id: 'b-hydro'},
    {name: '💧', id: 'b-hydro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

cryofristEnemy.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '❄️', id: 'b-cryo'},
    {name: '❄️', id: 'b-cryo'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

terrafangEnemy.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '🌿', id: 'b-terra'},
    {name: '🌿', id: 'b-terra'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
)

skywingEnemy.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '❄️', id: 'b-cryo'},
    {name: '🌿', id: 'b-terra'},
    {name: '💨', id: 'b-aero'},
    {name: '💨', id: 'b-aero'},
    {name: '💨', id: 'b-aero'},
    {name: '💨', id: 'b-aero'},
)


rikumons.push(frektro, gryrho, thornhydro, cryofrist, terrafang, skywing);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
      
    function PushArrayPets(){
        ArrayPets.push(inputFrektro, inputGryrho, inputThornhydro, inputCryofrist, inputTerrafang, inputSkywing)
    }
    //Manejando el DOM por JS
    function enemysChoosePet(enemy){
        enemysPet.innerHTML = enemy.name
        enemyAttack = enemy.attacks
        secuenceOfAttacks(buttons)
        }
    
    //Invocar el DOM si se selcciono una mascota, sino advertir
    function PetVerification(R){
        if(R == null){
            alert("You should choose a pet👍")
        }else{
            verifyPet(R);
        }
    }    

    // Clear el canvas
    function clearCanvas(){
        canvas.clearRect(0, 0, map.width, map.height);
    }    

    // Pulsar tecla activar
    function pushKey(e) {
        switch (e.keyCode) {
            case 37:
            case 65: // Agregamos la tecla 'A'
                moveLeft();
                break;
            case 38:
            case 87: // Agregamos la tecla 'W'
                moveUp();
                break;
            case 39:
            case 68: // Agregamos la tecla 'D'
                moveRight();
                break;
            case 40:
            case 83: // Agregamos la tecla 'S'
                moveDown();
                break;
            default:
                break;  
        }  
    }
    
    function stopMotion(){
        petPlayerObject.speedX = 0
        petPlayerObject.speedY = 0
    }

    function extractPetPlayer(VAR){
        for (let i = 0; i < rikumons.length; i++) {
            if(VAR === rikumons[i].name){
                return rikumons[i]
            }
        }
    }

    //Collisions function
    function checkCollision(enemy){
        const enemyLeft = enemy.x
        const enemyRight = enemy.x + enemy.width
        const enemyUp = enemy.y
        const enemyDown = enemy.y + enemy.height
        
        const playerLeft = petPlayerObject.x
        const playerRight = petPlayerObject.x + petPlayerObject.width
        const playerUp = petPlayerObject.y
        const playerDown = petPlayerObject.y + petPlayerObject.height
        if(
            playerLeft > enemyRight || 
            playerRight < enemyLeft || 
            playerUp > enemyDown || 
            playerDown < enemyUp 
            
        ){
            return;
        }
            stopMotion()
            stopAndClear()
            sectionViewMap.style.display = 'none'
            selectAttackSection.style.display = 'flex'
            enemysChoosePet(enemy)
            console.log("juan")
    }

    function stopAndClear() {
        clearInterval(interval);
        clearCanvas();
    }

    // Función para dibujar el personaje en el canvas
    function drawCanvas(){
        petPlayerObject.x += petPlayerObject.speedX
        petPlayerObject.y += petPlayerObject.speedY
        if (isGameStarted == false ||petPlayerObject.speedX !== 0 || petPlayerObject.speedY !== 0){
            isGameStarted = true
            clearCanvas()
            canvas.drawImage(
                backgroundMap,
                0,
                0,
                map.width,
                map.height
            )
            petPlayerObject.drawRikumkon()
            frektroEnemy.drawRikumkon()
            gryrhoEnemy.drawRikumkon()
            thornhydroEnemy.drawRikumkon()
            cryofristEnemy.drawRikumkon()
            terrafangEnemy.drawRikumkon()
            skywingEnemy.drawRikumkon()
            window.addEventListener('keydown', pushKey)
            
            if (petPlayerObject.speedX !== 0 || petPlayerObject.speedY !== 0){
                checkCollision(frektroEnemy)
                checkCollision(gryrhoEnemy)
                checkCollision(thornhydroEnemy)
                checkCollision(cryofristEnemy)
                checkCollision(terrafangEnemy)
                checkCollision(skywingEnemy)
            }
            console.log("A")
        }
    }

    // Funciones para mover el personaje
    function moveRight(){
        petPlayerObject.speedX = 5
    }

    function moveLeft(){
        petPlayerObject.speedX = -5
    }

    function moveDown(){
        petPlayerObject.speedY = 5
    }

    function moveUp(){
        petPlayerObject.speedY = -5
    }

    function startMap(){
        selectPetSection.style.display = 'none'
        sectionViewMap.style.display = 'flex'
        
        map.width = 600
        map.height = 400

        window.addEventListener('keydown', pushKey)
        window.addEventListener('keyup', stopMotion)

        interval = setInterval(drawCanvas, 16)
    }

    //Disable Pets function
    function disabledPets(G){

        petPlayerObject = extractPetPlayer(petselected)

        startMap()
        for (let i = 0; i < G.length; i++) {
            G[i].disabled = true;
          }
        buttonPetPlayer.disabled = true
    } 

    function verifyPet(P){
        petselected = P.id
        spanPlayersPet.innerHTML = P.id
        disabledPets(ArrayPets);
        extractAttacks(petselected)
    }   

    //Funcion de seleccionar la mascota    
    function checkedPet(){
        if(inputFrektro.checked){
            petInput = inputFrektro
        } else if(inputGryrho.checked){
            petInput = inputGryrho
        } else if(inputThornhydro.checked){
            petInput = inputThornhydro
        } else if(inputCryofrist.checked){
            petInput = inputCryofrist
        } else if(inputTerrafang.checked){
            petInput = inputTerrafang
        } else if(inputSkywing.checked){
            petInput = inputSkywing
        }
        PushArrayPets()
        PetVerification(petInput);
    }        
     
    //Condicional de alerta por si se selecciono una mascota
    function announcePet(A){
        if(petselected){
        alert(petchoose + A)
        }
    }

    //function of show attacks
    function showAttacks(B){
        B.forEach((element) => {
            rikumonsAttacks = `<button id = ${element.id} class = "attack-button BAttack">${element.name}</button>`
            attacksContainer.innerHTML += rikumonsAttacks;

        });   
        bElectro = document.getElementById('b-electro');
        bPyro = document.getElementById('b-pyro');
        bHydro = document.getElementById('b-hydro');
        bAero = document.getElementById('b-aero');
        bTerra = document.getElementById('b-tera');
        bCryo = document.getElementById('b-cryo')

        buttons = document.querySelectorAll('.BAttack')
        }
    
    // Function secuence of attacks
    function secuenceOfAttacks(Z){
        Z.forEach((element) => {
            element.addEventListener('click', (event) => {
                if(event.target.textContent === '🔥'){
                    attacksOfPlayer.push('Pyro')
                } else if(event.target.textContent === '💧'){
                    attacksOfPlayer.push('Hydro')
                } else if(event.target.textContent === '⚡'){
                    attacksOfPlayer.push('Electro')  
                } else if(event.target.textContent === '❄️'){
                    attacksOfPlayer.push('Cryo') 
                } else if (event.target.textContent === '🌿') {
                    attacksOfPlayer.push('Terra') 
                } else if (event.target.textContent === '💨') {
                    attacksOfPlayer.push('Aero') 
                }
                element.disabled = true
                element.style.background = '#D99E64'
                element.style.borderStyle = "dotted";
                element.style.borderWidth = "5px"; 
                element.style.borderColor = "#806B5C";   
                console.log(attacksOfPlayer)
                ramdonEnemyAttack()
            })   
        })
    }


    //function extract Attacks
    function extractAttacks(A){
        let attacks;
        for (let i = 0; i < rikumons.length; i++) {
            if(A === rikumons[i].name){
                attacks = rikumons[i].attacks
            }
        }
        showAttacks(attacks)
    }

        //Funcion que verifica si los arrays estan completos
        function checkerCombat(){
            if (attacksOfEnemy.length === 9) {
                combat();
            }      
        }

        //Ataque aleatorio del enemigo
        function ramdonEnemyAttack(){
            ramdomEnemyAttackNumber = random(0, (enemyAttack.length - 1))
            let AtkEnemy;
            AtkEnemy = enemyAttack[ramdomEnemyAttackNumber].name
            
            if(AtkEnemy == '⚡'){
                attacksOfEnemy.push('Electro')
            } else if(AtkEnemy == '🔥'){
                attacksOfEnemy.push('Pyro')
            } else if (AtkEnemy == '💧') {
                attacksOfEnemy.push('Hydro')
            } else if (AtkEnemy == '❄️') {
                attacksOfEnemy.push('Cryo')
            } else if (AtkEnemy == '🌿') {
                attacksOfEnemy.push('Terra')
            } else if (AtkEnemy == '💨') {
                attacksOfEnemy.push('Aero')
            }
            console.log(attacksOfEnemy)
            checkerCombat()
        }

        //Funcion de reinicion por boton
        function restart(){
            location.reload();
        }

        // funcion para preguntar si quiere recargar la pagina web
        function reloadPage(){
            if (confirm("El juego concluyo deseas reiniciar para seguir jugando?")) {
                location.reload();
              }
        }
        
        // Funcion para crear mensaje final
        function createFinalMessage(finalResult){
            paragraph.innerHTML = finalResult
            restartSection.style.display = 'flex'
        }

        // Funcion para verificar las vidas de las mascotas y decidir si continuar o no
        function checkedVictories(){
            if(EnemyVictories > PlayerVictories){
                Result = "You're The Losser🤣"
            } else if(PlayerVictories > EnemyVictories){
                Result = "You're The Winner🧖"
            } else {
                Result = "It's a tie🫱🏻‍🫲🏿"
            }
            createFinalMessage(Result);
        }

        function indexCheckerPush(VAR){
            indexPlayerAttack = attacksOfPlayer[VAR];
            indexEnemyAttack = attacksOfEnemy[VAR];
        }

        // Funcion que crea el mensaje de quien gano, y maneja el historial por DOM
        function createMessage(VAR, VAR2, VAR3, K, C){
            let new_player_attack = document.createElement('p')
            let new_enemy_attack = document.createElement('p')         
            paragraph.innerHTML = VAR
            new_player_attack.innerHTML = indexPlayerAttack + VAR2
            new_enemy_attack.innerHTML = indexEnemyAttack + VAR3
            player_attacks.appendChild(new_player_attack);
            enemy_attacks.appendChild(new_enemy_attack);
            SpanVictoriesPlayersPet.innerHTML = K
            SpanVictoriesEnemysPet.innerHTML = C
        }           

        // Funcion de combate, compara quien gano
        function combat(){

            for (let index = 0; index < attacksOfEnemy.length; index++) {
                if (attacksOfPlayer[index] === attacksOfEnemy[index]) {
                    resultOfCombat = "TIE🤌"
                    PlayerAdd = "🔃"  
                    EnemyAdd = "🔃"                  
                } else if (attacksOfPlayer[index] === 'Pyro' && attacksOfEnemy[index] === 'Electro' || attacksOfPlayer[index] === 'Electro' && attacksOfEnemy[index] === 'Hydro' || attacksOfPlayer[index] === 'Hydro' && attacksOfEnemy[index] === 'Pyro' || attacksOfPlayer[index] === 'Pyro' && attacksOfEnemy[index] === 'Cryo' || attacksOfPlayer[index] === 'Pyro' && attacksOfEnemy[index] === 'Terra' || attacksOfPlayer[index] === 'Cryo' && attacksOfEnemy[index] === 'Electro' || attacksOfPlayer[index] === 'Cryo' && attacksOfEnemy[index] === 'Hydro' || attacksOfPlayer[index] === 'Aero' && attacksOfEnemy[index] === 'Cryo' || attacksOfPlayer[index] === 'Aero' && attacksOfEnemy[index] === 'Electro' || attacksOfPlayer[index] === 'Aero' && attacksOfEnemy[index] === 'Pyro' || attacksOfPlayer[index] === 'Terra' && attacksOfEnemy[index] === 'Cryo' || attacksOfPlayer[index] === 'Terra' && attacksOfEnemy[index] === 'Aero' || attacksOfPlayer[index] === 'Terra' && attacksOfEnemy[index] === 'Hydro' || attacksOfPlayer[index] === 'Electro' && attacksOfEnemy[index] === 'Terra' || attacksOfPlayer[index] === 'Hydro' && attacksOfEnemy[index] === 'Aero') {
                    resultOfCombat = "YOU WIN🏆"
                    PlayerAdd = "😉"
                    EnemyAdd = "💢"
                    PlayerVictories++
                } else {
                    resultOfCombat = "YOU LOSE☠️"
                    PlayerAdd = "💢"
                    EnemyAdd = "😉"
                    EnemyVictories++
                }
                indexCheckerPush(index)
                createMessage(resultOfCombat, PlayerAdd, EnemyAdd, PlayerVictories, EnemyVictories)
            }
            checkedVictories();
    }
        
window.addEventListener('load', () =>
    {
        selectAttackSection.style.display = 'none'
        sectionViewMap.style.display = 'none'
        
        function invokeInputs(){
            inputFrektro = document.getElementById('Frektro')
            inputGryrho = document.getElementById('Gryrho')
            inputThornhydro = document.getElementById('Thornhydro')
            inputCryofrist = document.getElementById('Cryofrist')
            inputTerrafang = document.getElementById('Terrafang')
            inputSkywing = document.getElementById('Skywing')
        }
        rikumons.forEach((rikumon) => {
            opcionOfRikumons = `
            <input type = "radio" name = "pets" id = ${rikumon.name} />
                    <label id ="rikumons" for = ${rikumon.name}>
                        <p>${rikumon.name}</p>
                        <img src= ${rikumon.picture}    alt= ${rikumon.name}>
                    </label><br>
            `
            brrr += opcionOfRikumons
            cardsContainer.innerHTML += opcionOfRikumons 
            invokeInputs()
        })
    
        restartSection.style.display = 'none'    
        buttonPetPlayer.addEventListener('click', () =>{           
        bRestart.addEventListener('click', restart)
        checkedPet()
    })
})
