function solution(new_id) {
    new_id = new_id.toLowerCase()
    
    let tempId = ""
    const temp = "abcdefghijklmnopqrstuvwxyz0123456789-_."
    for(let i = 0; i < new_id.length; i++){
        if(temp.indexOf(new_id[i]) !== -1){
            tempId += new_id[i]
        }
    }
    
    tempId = tempId.split("").filter((el, idx, arr) =>{
        if(el === "."){
            return el !== arr[idx-1]
        }else{
            return el
        }
    }).join("")
    
    if(tempId[0] === "."){
        tempId = tempId.slice(1)
    }
    if(tempId[tempId.length - 1] === "."){
        tempId = tempId.slice(0, tempId.length - 1)
    }
    
    if(tempId.length === 0){
        tempId = "a"
    }
    
    if(tempId.length >= 16){
        tempId = tempId.slice(0, 15)
        if(tempId[tempId.length-1] === "."){
            tempId = tempId.slice(0, tempId.length - 1)
        }
    }
    
    while(tempId.length < 3){
        if(tempId.length >= 3) break;
        tempId += tempId[tempId.length - 1]
    }
    
    return tempId
}