let favorites = [];
id = 0;

module.exports = {
    create: (req, res) => {
        const person = req.body.person
        favorites.push(person);
        res.json(favorites)
    },

    read: (req, res) => {
        res.json( favorites );
    },

    delete: (req, res) => {
        const deleteID = req.params.id;
        console.log('deleteID', deleteID);
        
        let characterIndex = favorites.findIndex( person => person.id === parseInt(deleteID) );
        favorites.splice(characterIndex, 1);
        res.json( favorites );
    }
 }

    
//--------------------------

// let messages = [];
// let id = 0;

//     delete: (req, res) => {
//         const deleteID = req.params.id;
//         let messageIndex = messages.findIndex( message => message.id === parseInt(deleteID) );
//         messages.splice(messageIndex, 1);
//         res.status(200).send( messages );
//     }
//     update: (req, res) => {
//         const {text} = req.body;
//         const updateID = req.params.id;
//         const messageIndex = messages.findIndex( message => message.id === parseInt(updateID) );
//         let message = messages[ messageIndex ];

//         messages[ messageIndex ] = {
//             id: message.id,
//             text: text || message.text,
//             time: message.time
//         };
//         res.status(200).send( messages );
//     },
//     
    
// };