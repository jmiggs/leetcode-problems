let map = new Map();

map.set('a', 1);
map.set('b');

let d = map.get('a')
let size = map.size

console.log([...map.entries()], size)