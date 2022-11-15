function solution(record) {
    const userInfo = {};
    const messages = [];
    record.forEach(item => {
        const [action, id, nickname] = item.split(" ");
        
        switch(action){
            case "Enter":
                messages.push([id, "님이 들어왔습니다."]);
                userInfo[id] = nickname;
                break;
            case "Leave":
                messages.push([id, "님이 나갔습니다."]);
                break;
            case 'Change':
                userInfo[id] = nickname;
                break;
        }
    })
    
    const result = [];
    messages.forEach(item => {
        const [id, message] = item;
        result.push(userInfo[id] + message);
    })
    
    return result;
}