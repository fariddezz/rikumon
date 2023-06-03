let brrrr;
let ramdomEnemyAttackNumber;
let electro = "Electro⚡"
let pyro = "Pyro🔥"
let hydro = "Hydro💧"
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
//pets

let rikumons = []
let opcionOfRikumons;
let inputFrektro;
let inputGryrho;
let inputThornhydro;
let rikumonsAttacks;
let bElectro;
let bPyro;
let bHydro;
let enemyAttack;
let buttons = []
let attacksOfPlayer = []
let attacksOfEnemy = []
let PlayerVictories = 0
let EnemyVictories = 0
let indexEnemyAttack;
let indexPlayerAttack;
const nfrektro = "Frektro⚡"
const ngryrho = "Gryrho🔥"
const nthornhydro = "Thornhydro💧"

class Rikumon {
    constructor (name, picture, type){
        this.name = name
        this.picture = picture
        this.type = type
        this.attacks = []
    }
}

let frektro = new Rikumon ('Frektro', './assets/Rikumons/png/Frektro.png', 3)

let gryrho = new Rikumon ('Gryrho', './assets/Rikumons/png/Gryrho.png', 3)

let thornhydro = new Rikumon ('Thornhydro', './assets/Rikumons/png/Thornhydro.png', 3)

frektro.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '⚡', id: 'b-electro'},
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},

)

gryrho.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},

)

thornhydro.attacks.push(
    {name: '⚡', id: 'b-electro'},
    {name: '🔥', id: 'b-pyro'},
    {name: '💧', id: 'b-hydro'},
    {name: '💧', id: 'b-hydro'},
    {name: '💧', id: 'b-hydro'},

)

rikumons.push(frektro, gryrho, thornhydro);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', () =>
{
    selectAttackSection.style.display = 'none'
    
    function invokeInputs(){
        inputFrektro = document.getElementById('Frektro')
        inputGryrho = document.getElementById('Gryrho')
        inputThornhydro = document.getElementById('Thornhydro')
    }
    rikumons.forEach((rikumon) => {
        opcionOfRikumons = `
        <input type = "radio" name = "pets" id = ${rikumon.name} />
                <label id ="rikumons" for = ${rikumon.name}>
                    <p>${rikumon.name}</p>
                    <img src= ${rikumon.picture}    alt= ${rikumon.name}>
                </label><br>
        `
        brrrr += opcionOfRikumons
        cardsContainer.innerHTML += opcionOfRikumons 
        invokeInputs()
    })

    restartSection.style.display = 'none'    
    buttonPetPlayer.addEventListener('click', () =>{           
    bRestart.addEventListener('click', restart)
    checkedPet()
})

    //Disable Pets function
    function disabledPets(){
        selectAttackSection.style.display = 'flex'
        selectPetSection.style.display = 'none'
        inputThornhydro.disabled = true
        inputFrektro.disabled = true
        inputGryrho.disabled = true
        buttonPetPlayer.disabled = true
    } 

    //Funcion de seleccionar la mascota    
    function checkedPet(){
        if(inputFrektro.checked){
            petselected = inputFrektro.id 
            spanPlayersPet.innerHTML= inputFrektro.id
            disabledPets();
        } else if(inputGryrho.checked){
            petselected = inputGryrho.id
            spanPlayersPet.innerHTML= inputGryrho.id
            disabledPets();
        } else if(inputThornhydro.checked){
            petselected = inputThornhydro.id
            spanPlayersPet.innerHTML = inputThornhydro.id
            disabledPets();
        }
        PetVerification()
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
                }
                element.disabled = true
                element.disabled = true
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


        //Manejando el DOM por JS
        function enemysChoosePet(){

        let enemysPetNumber = random(0, (rikumons.length - 1))

        enemysPet.innerHTML = rikumons[enemysPetNumber].name
        enemyAttack = rikumons[enemysPetNumber].attacks
        secuenceOfAttacks(buttons)
        }

        //Invocar el DOM si se selcciono una mascota, sino advertir
        function PetVerification(){
            if(petselected == null){
                alert("You should choose a pet👍")
            }else{
                extractAttacks(petselected)
                enemysChoosePet()
            }
        }

        //Funcion que verifica si los arrays estan completos
        function checkerCombat(){
            if (attacksOfPlayer.length === 5 && attacksOfEnemy.length === 5) {
                combat();
            }      
        }

        //Ataque aleatorio del enemigo
        function ramdonEnemyAttack(){
            ramdomEnemyAttackNumber = random(0, (enemyAttack.length - 1))
            
            if(enemyAttack[ramdomEnemyAttackNumber].name == '⚡'){
                attacksOfEnemy.push('Electro')
            } else if(enemyAttack[ramdomEnemyAttackNumber].name == '🔥'){
                attacksOfEnemy.push('Pyro')
            } else if (enemyAttack[ramdomEnemyAttackNumber].name == '💧') {
                attacksOfEnemy.push('Hydro')
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
                } else if (attacksOfPlayer[index] === 'Pyro' && attacksOfEnemy[index] === 'Electro' || attacksOfPlayer[index] === 'Electro' && attacksOfEnemy[index] === 'Hydro' || attacksOfPlayer[index] === 'Hydro' && attacksOfEnemy[index] === 'Pyro') {
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
    })
