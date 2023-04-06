// insert data
let john = {
    name: "john",
    age: 25, 
    married: false,
    favorites: {
        color: "green",
        city: "Madison"
    },
    siblings: ['mike', 'amy', 'jackie']
}

let derek = {
    name: "derek",
    age: 27, 
    married: true,
    favorites: {
        color: "red",
        city: "Madison"
    },
    siblings: ['mike', 'peter', 'neil']
}

let sally = {
    name: "sally",
    age: 40, 
    married: false,
    favorites: {
        color: "blue",
        city: "Chicago"
    },
    siblings: ['neil']
}

// store the objects

// // store john info
// db.collection('users').doc("john@john.com").set(john);

// // store derek info
// db.collection('users').doc("derek@derek.com").set(derek);

// // store sally info
// db.collection('users').doc("sally@sally.com").set(sally);

// // Change sally's age to 41 and married to true
// db.collection('users').doc('sally@sally.com').update({
//     age: 41,
//     married: true
// });

// // Update Derek's info - set favorite color to Yellow
// db.collection('users').doc("derek@derek.com").update({
//     'favorites.color': "yellow"
// });

// // Add katie as a sibling to John
// db.collection('users').doc('john@john.com').update({
//     siblings: firebase.firestore.FieldValue.arrayUnion("katie")
// });

// Querying the database

// Show the names of all people under 30 years of age
// db.collection('users').where('age', '<', 30).get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// Show the names of all people above or equal 30 years of age
// db.collection('users').where('age', '>=', 30).get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// Compound queries
// Show the names of all people between 38 and 42 years of age
// db.collection('users').where('age', '>=', 38).where('age', '<=', 42)
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// Show the names of all people whose name is derek and are 27 years old
// db.collection('users').where('age', '>', 25).where('name', '==', 'derek')
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// Show all users with a name that is derek or sally
// db.collection('users').where('name', 'in', ['derek', 'sally'])
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// Show the names of all people whose sibling is called mike
// db.collection('users').where('siblings', 'array-contains', 'mike')
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// db.collection('users').where('siblings', 'array-contains-any', ['mike', 'katie'])
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// In-class 4/4/2023 code
// // db.collection('/restaurants/HlhXtpu1m51q4oZxAQHG/reviews').get().then(data => {
// //     console.log(data.docs);
// // })

// let person = {
//     name: "Sally",
//     age: 25
// }

// // add to the database
// // db.collection('temp').add(person);

// // add a document with a given ID
// // db.collection('temp').doc('1111').set(person) 

// let bio = {
//     userid: 'DSW0Par1ipbCEmkSy0dZyyJHBmD3',
//     text: 'lorem ipsum dolor'
// }

// // db.collection('users').doc('DSW0Par1ipbCEmkSy0dZyyJHBmD3').set(bio)

// db.collection('users2').add(bio);

// // Process the form

// document.querySelector('#submitbtn').addEventListener('click',  (e) => {
//     // Grab the values from the input elements
//     let fname = document.querySelector('#fname').value;
//     let age = document.querySelector('#age').value;

//     // Construct the object

//     let user = {
//         name: fname,
//         age: age
//     };

//     db.collection.add(user);
// });