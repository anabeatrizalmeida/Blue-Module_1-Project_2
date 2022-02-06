var prompt  = require(`prompt-sync`)();

const elements = [`rock`, `paper`, `scissors`];

play = 1;

while (play){
   
    console.log(`\n ### Welcome to jokenpo game! ### \n`);
    let rounds = +prompt('Enter the number of rounds you want to play: ');
    console.log();

    counter = 1;
    userPoints = 0;
    computerPoints = 0;
    while (counter <= rounds){
        
        console.log(`### Round ${counter} ###`);
        console.log(`Choose one of the elements listed below to play: \n- ${elements[0]} \n- ${elements[1]} \n- ${elements[2]} \n`);

        const user = (prompt(`Which element do you choose? `)).trim().toLowerCase();
        console.log();

        if (elements.indexOf(user) == -1){ 
           console.log(`Invalid Option. \n`);
           continue;
        } else {
            console.log(`You chose: ${user} \n`);
        }

        let computer = elements[Math.floor(Math.random() * 3)];
       
        console.log(`The computer chose: ${computer} \n`);

        if (user == computer){
            console.log('Round result: Tie! \n');
        } else if (user == `rock`){
            if (computer == `scissors`){
                console.log('Round result: The user won! \n');
                userPoints = userPoints + 1;
            } else {
                console.log('Round result: The computer won! \n');
                computerPoints =computerPoints + 1;
            }
        } else if (user == `paper`){
            if (computer == `rock`){
                console.log(`Round result: The user won! \n`);
                userPoints = userPoints + 1;
            } else {
                console.log(`Round result: The computer won! \n`);
                computerPoints =computerPoints + 1;
            }
        } else if (user == `scissors`){
            if (computer == `paper`){
                console.log(`Round result: The user won! \n`);
                userPoints = userPoints + 1;
            } else {
                console.log(`Round result: The computer won! \n`);
                computerPoints =computerPoints + 1;
            }
        }
        counter =counter + 1;
    }

    console.log(`\n ### Results ### \n`);
    console.log(`User score in ${counter-1} rounds: ${userPoints} points \n`);
    console.log(`Computer score in ${counter-1} rounds: ${computerPoints} points \n`);

    if (userPoints >computerPoints){
        console.log(`Game result: The user won \\o/ \n`);
    } else if (userPoints <computerPoints){
        console.log(`Game result: The computer won \\o/ \n`);
    } else if (userPoints ==computerPoints){
        console.log(`Game result: Tie! \n`);
    }
    
    let play = prompt(`### Wanna play again? ###\n\nEnter 0 to not play again or enter 1 to restart the game.\n0- No.I don't want to play again. \n1- Yes.I want to play again.\n`);
    if (play == 0){
        console.log('Game Over!!');
        break;
    } else if (play != 1){
        console.log(`Invalid entry. Game Over!!`);
        break;
    } 

}

