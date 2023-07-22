const assert = require('assert');
const arrayChunk = require('./arraychunk');


describe('Array Chunk', () => {
    it('should create chunks of a specific size', () => {
        assert.deepEqual(arrayChunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
        assert.deepEqual(arrayChunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);

    });

});