function getElementByTag(root, tagName) {
    if (!root) return [];
    if (!tagName) return [root];

    let result = [];

    if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
        result.push(root);
    }

    if (root.hasChildNodes()) {
        for (const child of root.children) {
            result = result.concat(getElementByTag(child, tagName));
        }
    }

    return result;
}

module.exports = getElementByTag;