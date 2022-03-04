near call $CONTRACT createHero --account_id $OWNER   -  706895880


near call $CONTRACT getHeroDetails '{"heroId":1539788027}' --account_id $OWNER


near call $CONTRACT createGame '{"heroId":1539788027}' --amount 15 --account_id $OWNER


near call $CONTRACT createHero --account_id kunaltest.testnet 


near call $CONTRACT joinGame '{"gameId":414172522,"heroId":1946400736}' --amount 15 --account_id kunaltest.testnet


near call $CONTRACT getGameState '{"gameId":414172522}' --account_id $OWNER

near call $CONTRACT selectTurn '{"gameId":414172522}' --account_id $OWNER

near call $CONTRACT makeTurn '{"gameId":414172522, "turn": false}' --account_id $OWNER
near call $CONTRACT makeTurn '{"gameId":414172522, "turn": true}' --account_id kunaltest.testnet


near call $CONTRACT getDeposit '{"gameId":414172522}' --account_id $OWNER


near call $CONTRACT finishGame '{"gameId":414172522}' --account_id $OWNER

near call $CONTRACT finishGame '{"gameId":414172522}' --account_id kunaltest.testnet

near call $CONTRACT getWinner '{"gameId":414172522}' --account_id kunaltest.testnet

near call $CONTRACT getPlayer1Details '{"gameId":414172522}' --account_id kunaltest.testnet

