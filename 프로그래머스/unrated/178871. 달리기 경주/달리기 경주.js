function solution(players, callings) {
    var answer = [];
    let playerIdx = new Map();
    
    players.forEach((player, idx) => {
        playerIdx.set(player, idx);
    })
    
    callings.forEach(call => {
        let calledPlayerIdx = playerIdx.get(call);
        const passedPlayer = players[calledPlayerIdx - 1];
    
        players[calledPlayerIdx] = passedPlayer;
        players[calledPlayerIdx - 1] = call;
        
        playerIdx.set(call, calledPlayerIdx - 1);
        playerIdx.set(passedPlayer, calledPlayerIdx);

        answer = players;
    })
    
    return answer;
}