const hasDuplicateIds = require('./hasdupcilateids');

describe('DON Tree Has Duplicate IDs', () => {
    let root;

    beforeEach(() => {
        root = document.createElement('div');
        const child1 = document.createElement('div');
        const child2 = document.createElement('div');

        root.appendChild(child1);
        root.appendChild(child2);

        root.id = 'root';
    });

    afterEach(() => {
        root = null;
    })

    it('should be a function', () => {
        expect(typeof hasDuplicateIds).toEqual('function');
    });

    it('should return boolean', () => {
        expect(typeof hasDuplicateIds()).toEqual('boolean');
    });

    it('should return false if no root', () => {
        expect(hasDuplicateIds()).toEqual(false);
    });

    it('should return true if there are duplicate IDs', () => {
        root.children[0].id = 'child';
        root.children[1].id = 'child';

        expect(hasDuplicateIds(root)).toEqual(true);
    });

    it('should return false if there are no duplicate IDs', () => {
        root.children[0].id = 'child1';
        root.children[1].id = 'child2';

        expect(hasDuplicateIds(root)).toEqual(false);
    });
});