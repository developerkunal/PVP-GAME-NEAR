import { storage, Context,u128, PersistentMap, logging, ContractPromiseBatch, RNG} from "near-sdk-as"

export enum GameState {
    Created,
    InProgress,
    Completed,
    NotFound
  }
  @nearBindgen
  export class Game {
      id: u32;
      gameState: GameState;
      deposit1: u128;
      deposit2: u128;
      player1: string;
      player2: string;
      player1Hero: u32;
      player2Hero: u32;
      player1Turn:boolean;
      player2Turn: boolean;
      winner: string;
  
      constructor() {
  
          /*
          Generates a random number for the gameId.
          Need to change this to counter eventually.
          */
          const rng = new RNG<u32>(1, u32.MAX_VALUE);
          const randomid = rng.next();
          this.id = randomid;
          this.deposit1 = Context.attachedDeposit;
          this.deposit2 = u128.Zero;
          this.player1 = Context.sender;
          this.gameState = GameState.Created;
          
      }
  
  }
  
  @nearBindgen
  export class Hero {
      id: u32;
      heroname: string;
      herohealth: u32;
      herodamage: u32;
      heroowner: string;
      herospecial:u32;
      constructor() {
  
          /*
          Generates a random number for the gameId.
          Need to change this to counter eventually.
          */
          const rng = new RNG<u32>(1, u32.MAX_VALUE);
          const randomid = rng.next();
          this.id = randomid;
          const rng2 = new RNG<u32>(250, 300);
          const rondomvalue=rng2.next();
          this.heroowner = Context.sender;
          this.heroname='HERO';
          this.herohealth=rondomvalue;
          this.herodamage=rondomvalue;
          this.herospecial=rondomvalue;
      }
  
  }
  export const heros = new PersistentMap<u32, Hero>("h");
  export const games = new PersistentMap<u32, Game>("g");
  