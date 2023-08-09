function createMultiSet(str) {
    const multiSet = new Map();
    
    for (let i = 0; i < str.length - 1; i++) {
        const pair = str.substr(i, 2).toLowerCase();
        if (/^[a-zA-Z]{2}$/.test(pair)) {
            multiSet.set(pair, multiSet.get(pair) + 1 || 1);
        }
    }
    
    return multiSet;
}

function getCount(set){
    let count = 0;
    
    for(let [key, value] of set){
        count += value;    
    }
    
    return count;
}

function solution(str1, str2) {
    const multiSet1 = createMultiSet(str1)
    const multiSet2 = createMultiSet(str2)

    const intersection = new Map();
    const union = new Map();
    
    for(let [key, value] of multiSet1){
        if(multiSet2.has(key)){
            intersection.set(key, Math.min(value, multiSet2.get(key)))
        }
    }
    
    const allKeys = [...new Set([...multiSet1.keys(), ...multiSet2.keys()])];
    for (const key of allKeys) {
        const count1 = multiSet1.get(key) || 0;
        const count2 = multiSet2.get(key) || 0;
        union.set(key, Math.max(count1, count2));
    }

    const intersectionCount = getCount(intersection)
    const unionCount = getCount(union)
    const jaccard = unionCount === 0 ? 1 : intersectionCount / unionCount
    
    return Math.floor(jaccard * 65536)
}