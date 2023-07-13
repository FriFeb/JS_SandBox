// Step 1
const library =
    [
        {
            title: 'Great',
            author: 'King',
            status: {
                own: false,
                reading: false,
                read: false
            },
        },

        {
            title: 'Cool',
            author: 'Smith',
            status: {
                own: false,
                reading: false,
                read: false
            },
        },

        {
            title: 'Amazing',
            author: 'Roth',
            status: {
                own: false,
                reading: false,
                read: false
            },
        }
    ];


// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const str = JSON.stringify(library);

console.log(str);
