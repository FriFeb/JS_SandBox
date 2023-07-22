const getElementByTag = require('./getelementsbytag');

describe('Get Elements By Tag', () => {
    it('Should be a function', () => {
        expect(typeof getElementByTag).toEqual('function');
    });

    it('Should return an array', () => {
        expect(Array.isArray(getElementByTag())).toEqual(true);
    });

    it('Should return an empty array if no root is passed in', () => {
        expect(getElementByTag()).toEqual([]);
    });

    it('Should return only the root element if no tag name is passed in', () => {
        const root = document.createElement('div');
        expect(getElementByTag(root)).toEqual([root]);
    });

    it('Should return the correct elements', () => {
        const root = document.createElement('div');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const span = document.createElement('spab');

        root.appendChild(p1);
        root.appendChild(span);
        span.appendChild(p2);

        const result = getElementByTag(root, 'p');

        expect(result).toEqual([p1, p2]);
    });
});