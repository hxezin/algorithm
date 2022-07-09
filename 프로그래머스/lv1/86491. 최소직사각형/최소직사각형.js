function solution(sizes) {
    sizes = sizes.map(size => [Math.max(...size), Math.min(...size)]);
        
    let width = Math.max(...sizes.map(size => size[0]))
    let height = Math.max(...sizes.map(size => size[1]))
    
    return width * height
}