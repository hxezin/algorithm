function solution(k, tangerine) {
    const sizeCount = tangerine.reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
    }, {});
    
    const sizeCountArr = Object.entries(sizeCount).map(([size, count]) => ({size: Number(size), count}));
    sizeCountArr.sort((a, b) => b.count - a.count);

    let totalCount = 0;
    let idx = 0;

    while(totalCount < k && idx < sizeCountArr.length) {
        totalCount += sizeCountArr[idx].count;
        idx++;
    }

    return idx;
}