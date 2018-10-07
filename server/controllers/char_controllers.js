// let favorites = ["favorite"];

module.exports = {
    create: (req, res) => {
        const person = request.body.person
        favorites.push(person);
        console.log(favorites);
        
        res.json(favorites)
    }
}
    // read: (req, res) => {
    //     res.json(favorites);
    // }
    // // }
    // create: (req, res) => {

    // }
    // create: (req, res) => {

    // }

    

// }



//--------------------------

// let messages = [];
// let id = 0;


// module.exports = {
//     create: (req, res) => {
//         const {text, time} = req.body;
//         messages.push({ id, text, time });
//         id++;
//         res.status(200).send( messages );
//     },
//     read: (req, res) => {
//         res.status(200).send( messages );
//     },
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
//     delete: (req, res) => {
//         const deleteID = req.params.id;
//         let messageIndex = messages.findIndex( message => message.id === parseInt(deleteID) );
//         messages.splice(messageIndex, 1);
//         res.status(200).send( messages );
//     }
    
// };