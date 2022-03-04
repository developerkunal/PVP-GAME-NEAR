import {  Context,u128, ContractPromiseBatch, RNG} from "near-sdk-as"

import {Game,Hero ,games,heros,GameState} from "./model"
export function createGame(heroId:u32): u32 {
  const game = new Game();
  game.player1Hero=heroId;
  games.set(game.id, game);
  return game.id;
}


export function createHero(): u32 {
  const hero = new Hero();
  heros.set(hero.id, hero);
  return hero.id;
}

export function joinGame(gameId: u32,heroId:u32): boolean {
  //Loop through game Ids to check the game
  const game = games.getSome(gameId);
  if(game != null){
          if(Context.attachedDeposit >= game.deposit1 
              && game.gameState == GameState.Created
              && Context.sender != game.player1){
                  game.deposit2 = Context.attachedDeposit;
                  game.gameState = GameState.InProgress;
                  game.player2 = Context.sender;
                  game.player2Hero=heroId;
              games.set(game.id, game);
              
              return true;
          }
          else {
              return false;
          }
  }
  return false;
}

export function selectTurn(gameId: u32): string {
  const randomNumber = new RNG<u32>(1, u32.MAX_VALUE);
  const randomNum = randomNumber.next();
  const game = games.getSome(gameId);

  if(game != null){
      if(game.gameState == GameState.InProgress){
          if(randomNum % 3== 0){
              return game.player1 + 'Is Gonna Make First Turn'; 
          }
          else
              return game.player2 + 'Is Gonna Make First Turn';
          }
  }
  return "Game Not Found";
  
}
export function makeTurn(gameId: u32, turn: boolean): string {

  const game = games.getSome(gameId);
  if(game != null){
      if(game.gameState == GameState.InProgress) {
          if(Context.sender == game.player1){
              game.player1Turn = turn;
          }
          else {
              game.player2Turn = turn;
          }
              
          games.set(game.id,game);
          return "Done"
      }
  }
  return "Game Not Found";
}

export function finishGame(gameId: u32) : string {

  const randomNumber = new RNG<u32>(1, u32.MAX_VALUE);
  const randomNum = randomNumber.next();
  const game = games.getSome(gameId);
  const hero1 = heros.getSome(game.player1Hero);
  const hero2 = heros.getSome(game.player2Hero);
  const randomdamage = new RNG<u32>(1, 10);
  const critcaldamageplayer1 = randomdamage.next();
  const critcaldamageplayer2 = randomdamage.next();
      if(game != null && 
        game.gameState == GameState.InProgress)
      {

        if(randomNum %3 == 0){
          if(game.player2Turn == true) {
          if(hero2.herohealth>hero1.herohealth && hero2.herodamage>hero1.herodamage && hero2.herospecial>hero1.herospecial && critcaldamageplayer2>critcaldamageplayer1){
          game.gameState = GameState.Completed;
          game.winner = game.player2;
          games.set(game.id, game);

          // logging.log("Game Winner is: "+ updateGame.winner);
          //Send 2*deposit to the winning player
          const to_beneficiary = ContractPromiseBatch.create(game.winner);

          //logging.log("Beneficiary is: " + to_beneficiary.id.toString());
          // logging.log("Game Deposit 1 is: "+ updateGame.deposit1.toString());
          // logging.log("Game Deposit 2 is: "+ updateGame.deposit2.toString());
          to_beneficiary.transfer(u128.add(game.deposit1, game.deposit2));
          return game.winner + ' Is The Winner';
          }}
          else {
            game.gameState = GameState.Completed;
            game.winner = game.player1;
            games.set(game.id, game);
  
            // logging.log("Game Winner is: "+ updateGame.winner);
            //Send 2*deposit to the winning player
            const to_beneficiary = ContractPromiseBatch.create(game.winner);
  
            //logging.log("Beneficiary is: " + to_beneficiary.id.toString());
            // logging.log("Game Deposit 1 is: "+ updateGame.deposit1.toString());
            // logging.log("Game Deposit 2 is: "+ updateGame.deposit2.toString());
            to_beneficiary.transfer(u128.add(game.deposit1, game.deposit2));
            return game.winner + ' Is The Winner';
          }
        }
        else {
          if(game.player2Turn == false){
            if(hero2.herohealth>hero1.herohealth && hero2.herodamage>hero1.herodamage && hero2.herospecial>hero1.herospecial && critcaldamageplayer2>critcaldamageplayer1){
          game.gameState = GameState.Completed;
          game.winner = game.player2;
          games.set(game.id, game);

          // logging.log("Game Winner is: "+ updateGame.winner);
          //Send 2*deposit to the winning player
          const to_beneficiary = ContractPromiseBatch.create(game.winner);

          //logging.log("Beneficiary is: " + to_beneficiary.id.toString());
          // logging.log("Game Deposit 1 is: "+ updateGame.deposit1.toString());
          // logging.log("Game Deposit 2 is: "+ updateGame.deposit2.toString());
          to_beneficiary.transfer(u128.add(game.deposit1, game.deposit2));
          return game.winner + ' Is The Winner';
        }}
        else {
          game.gameState = GameState.Completed;
          game.winner = game.player1;
          games.set(game.id, game);

          // logging.log("Game Winner is: "+ updateGame.winner);
          //Send 2*deposit to the winning player
          const to_beneficiary = ContractPromiseBatch.create(game.winner);

          //logging.log("Beneficiary is: " + to_beneficiary.id.toString());
          // logging.log("Game Deposit 1 is: "+ updateGame.deposit1.toString());
          // logging.log("Game Deposit 2 is: "+ updateGame.deposit2.toString());
          to_beneficiary.transfer(u128.add(game.deposit1, game.deposit2));
          return game.winner + ' Is The Winner';
        }
    }
    }
return 'None';
}
export function getPlayer1Details(gameId: i32): string {
  const game = games.getSome(gameId);
  if(game != null){
          return game.player1;
  }
  return "None";
}


//Get the second player details
export function getPlayer2Details(gameId: i32): string {
  const game = games.getSome(gameId);
  if(game != null){
          return game.player2;
  }
  return "None";
}

//Get the deposit deetails
export function getDeposit(gameId: i32): u128 {
  const game = games.getSome(gameId);
  if(game != null){
          return game.deposit1;
  }
  return u128.Zero;
}

//Get the Game State
export function getGameState(gameId: i32): GameState {
  const game = games.getSome(gameId);
  if(game != null){
          return game.gameState;
  }
  return GameState.NotFound;
}

export function getHeroDetails(heroId: i32): string {
  const hero = heros.getSome(heroId);
  if(hero != null){
          return 'Hero Name ' + hero.heroname +' HEro Owner ' + hero.heroowner;
  }
  return "None";
}
export function getWinner(gameId: i32): string {
  const game = games.getSome(gameId);
  if(game != null && game.gameState == GameState.Completed){
          return game.winner;
  }    
  return "None";
}
