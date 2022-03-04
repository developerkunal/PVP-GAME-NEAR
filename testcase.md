
CREATING HERO IS FIRST THING WE DO .

near call $CONTRACT createHero --account_id $OWNER   -  706895880

CHECKING HERO"S DETAILS ITS FINE TO CHECK IT OUT

near call $CONTRACT getHeroDetails '{"heroId":1539788027}' --account_id $OWNER

NOW USER NEED TO CREATE A GAME.
near call $CONTRACT createGame '{"heroId":1539788027}' --amount 15 --account_id $OWNER

THIS STEP IS FOR SECOND USER ITS THE SAME SECOND USER NEED TO CREATE A HERO
near call $CONTRACT createHero --account_id kunaltest.testnet 

NOW SECOND PLAYER GONNA JOIN THE GAME.

near call $CONTRACT joinGame '{"gameId":414172522,"heroId":1946400736}' --amount 15 --account_id kunaltest.testnet

FOR CHECKING THE STATE OF A GAME EITHER IS COMPLETED OR ITS INPROGRESS 

near call $CONTRACT getGameState '{"gameId":414172522}' --account_id $OWNER

ITS GONNA TELL WHO IS GOING FIRST  PLAYER 1 OR PLAYER 2

near call $CONTRACT selectTurn '{"gameId":414172522}' --account_id $OWNER

THIS FOR ENTER THE TURN ITS IN BOOLEN WE HAVE TWO CHOICE"S TRUE OR FALSE.

near call $CONTRACT makeTurn '{"gameId":414172522, "turn": false}' --account_id $OWNER

SECOND USER CAN PLAY TURN IF HE GET"S TO PLAY

near call $CONTRACT makeTurn '{"gameId":414172522, "turn": true}' --account_id kunaltest.testnet


WE CAN CHECK HOW MUCH THE GAME MAIN DEPOSIT IT FOR.

near call $CONTRACT getDeposit '{"gameId":414172522}' --account_id $OWNER

THIS IS FOR FINISH RESULTS PLAYER1 OR PLAYER 2 can do this

near call $CONTRACT finishGame '{"gameId":414172522}' --account_id $OWNER

OR

near call $CONTRACT finishGame '{"gameId":414172522}' --account_id kunaltest.testnet

TO CHECK THE WINNER 

near call $CONTRACT getWinner '{"gameId":414172522}' --account_id kunaltest.testnet

PLAYER DETAILS PLAYER1 AND PLAYER 2

near call $CONTRACT getPlayer1Details '{"gameId":414172522}' --account_id kunaltest.testnet


near call $CONTRACT getPlayer2Details '{"gameId":414172522}' --account_id kunaltest.testnet

