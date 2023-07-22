function anargam(str1, str2) {

    // Method 1
    function fullfillMap(str) {

        let map = new Map();
        for (const char of str.toLowerCase()) {
            if (map.get(char)) {
                let frequency = map.get(char);
                map.set(char, ++frequency);
            } else {
                map.set(char, 1);
            }
        }
        return map;
    }

    const map1 = fullfillMap(str1);
    const map2 = fullfillMap(str2);

    if (map1.size !== map2.size) {
        return false;
    }

    for (const char of str1) {
        if (map1.get(char) !== map2.get(char)) {
            return false;
        }
    }

    return true;
}

module.exports = anargam;