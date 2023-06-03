let enemyAttack;
let ramdomEnemyAttackNumber;
let resultOfCombat;
let electro = "Electro⚡"
let pyro = "Pyro🔥"
let hydro = "Hydro💧"
let livesEnemysPet = 3
let livesPlayersPet = 3
let petselected;
const selectPetSection = document.getElementById('select-pet')
const selectAttackSection = document.getElementById('select-attack')
const restartSection = document.getElementById('restart')
const buttonPetPlayer = document.getElementById('b-pselection')
const spanPlayersPet = document.getElementById('spanPlayersPet')
const enemysPet = document.getElementById('spanEnemysPet')
const spanLivesPlayersPet = document.getElementById('spanLivesPlayersPet')
const spanLivesEnemysPet = document.getElementById('spanLivesEnemysPet')
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
let buttons = []
let attacksOfPlayer = []
let attacksOfEnemy = []
const nfrektro = "Frektro⚡"
const ngryrho = "Gryrho🔥"
const nthornhydro = "Thornhydro💧"

class Rikumon {
    constructor (name, picture, life){
        this.name = name
        this.picture = picture
        this.life = life
        this.attacks = []
    }
}

let frektro = new Rikumon ('Frektro', './assets/Rikumons/png/frektro.png', 3)

let gryrho = new Rikumon ('Gryrho', './assets/Rikumons/png/gryrho1.png', 3)

let thornhydro = new Rikumon ('Thornhydro', './assets/Rikumons/png/thornhydro.png', 3)

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
    
    rikumons.forEach((rikumon) => {
        opcionOfRikumons = `
        <input type = "radio" name = "pets" id = ${rikumon.name} />
                <label id ="rikumons" for = ${rikumon.name}>
                    <p>${rikumon.name}</p>
                    <img src= ${rikumon.picture}    alt= ${rikumon.name}>
                </label><br>
        `
        cardsContainer.innerHTML += opcionOfRikumons

 inputFrektro = document.getElementById('Frektro')
 inputGryrho = document.getElementById('Gryrho')
 inputThornhydro = document.getElementById('Thornhydro')

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
                    console.log(attacksOfPlayer)
                    element.style.background = '#D99E64'   
                } else if(event.target.textContent === '💧'){
                    attacksOfPlayer.push('Hydro')
                    console.log(attacksOfPlayer)
                    element.style.background = '#D99E64'
                } else if(event.target.textContent === '⚡'){
                    attacksOfPlayer.push('Electro')
                    console.log(attacksOfPlayer)
                    element.style.background = '#D99E64'  
                }  
                ramdonEnemyAttack()
            })   
        });
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
        //Ataque aleatorio del enemigo
        function ramdonEnemyAttack(){
            ramdomEnemyAttackNumber = random(0, (enemyAttack.length - 1))
            
            if(ramdomEnemyAttackNumber == 0 || ramdomEnemyAttackNumber == 1){
                attacksOfEnemy.push('Electro')
                console.log(attacksOfEnemy)
            } else if(ramdomEnemyAttackNumber == 2 || ramdomEnemyAttackNumber == 3){
                attacksOfEnemy.push('Pyro')
                console.log(attacksOfEnemy)
            } else if (ramdomEnemyAttackNumber == 5) {
                attacksOfEnemy.push('Hydro')
                console.log(attacksOfEnemy)
            } else {
                console.log("cometi un error")
            }
/*             createMessage(); */
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
            bElectro.disabled = true
            bPyro.disabled = true
            bHydro.disabled = true
            restartSection.style.display = 'flex'
        }

        // Funcion para verificar las vidas de las mascotas y decidir si continuar o no
        function checkedLives(){
            if(livesPlayersPet <= 0){
            Result = "You're The Losser🤣"
            createFinalMessage(Result);

            } else if(livesEnemysPet <= 0){
            Result = "You're The Winner🧖"
            createFinalMessage(Result);
            } 
        }


        // Funcion que crea el mensaje de quien gano, y maneja el historial por DOM
        function createMessage(){
            combat();
            let new_player_attack = document.createElement('p')
            let new_enemy_attack = document.createElement('p')         
            paragraph.innerHTML = resultOfCombat
            new_player_attack.innerHTML = playerAttack
            new_enemy_attack.innerHTML = enemyAttack
            player_attacks.appendChild(new_player_attack);
            enemy_attacks.appendChild(new_enemy_attack);
            checkedLives();
        }            

        // Funcion de combate, compara quien gano

        function combat(){

            if(playerAttack == enemyAttack){
               resultOfCombat = "TIE🤌"
            } else if(playerAttack == pyro && enemyAttack == electro || playerAttack == electro && enemyAttack == hydro || playerAttack == hydro && enemyAttack == pyro){
                resultOfCombat = "YOU WIN🏆"
                livesEnemysPet--
                spanLivesEnemysPet.innerHTML = livesEnemysPet
            } else{
                resultOfCombat = "YOU LOSE☠️"
                livesPlayersPet--
                spanLivesPlayersPet.innerHTML = livesPlayersPet
            }
        }
    })
