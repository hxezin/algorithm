function canTransform(word1, word2) {
    let diffCount = 0;
    
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diffCount++;
            if (diffCount > 1) {
                return false;
            }
        }
    }
    return diffCount === 1;
}

function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }

    const queue = [];
    const visited = new Set();
    queue.push({ word: begin, level: 0 });

    while (queue.length > 0) {
        const { word, level } = queue.shift();

        if (word === target) {
            return level;
        }

        for (const nextWord of words) {
            if (!visited.has(nextWord) && canTransform(word, nextWord)) {
                visited.add(nextWord);
                queue.push({ word: nextWord, level: level + 1 });
            }
        }
    }

    return 0;
}
