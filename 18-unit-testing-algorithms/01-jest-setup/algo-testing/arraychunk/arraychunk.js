function arrayChunk(array, size) {

    // Method 1
    // let result = [];

    // while (array.length) {
    //     const arr = array.splice(0, size);
    //     result.push(arr);
    // };

    // return result;

    // Method 2
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        };
    };

    return chunked;
}

module.exports = arrayChunk;