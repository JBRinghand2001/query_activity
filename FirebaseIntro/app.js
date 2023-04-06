// ***TASK 1
// Create 7 objects
// let Real_Madrid = {
//     name: "Real Madrid",
//     city: 'Madrid',
//     country: 'Spain',
//     top_scorers: ['Ronaldo', 'Benzema', 'Hazard'],
//     worldwide_fans: 798
// }

// let Barcelona = {
//     name: "Barcelona",
//     city: 'Barcelona',
//     country: 'Spain',
//     top_scorers: ['Messi', 'Suarez', 'Puyol'],
//     worldwide_fans: 738
// }

// let Manchester_United = {
//     name: "Manchester United",
//     city: 'Manchester',
//     country: 'England',
//     top_scorers: ['Cantona', 'Rooney', 'Ronaldo'],
//     worldwide_fans: 755
// }

// let Manchester_City = {
//     name: "Manchester City",
//     city: 'Manchester',
//     country: 'England',
//     top_scorers: ['Sterling', 'Aguero', 'Haaland'],
//     worldwide_fans: 537
// }

// let Brazil_National = {
//     name: "Brazil National Team",
//     city: 'N/A',
//     country: 'Brazil',
//     top_scorers: ['Ronaldinho', 'Cafu', 'Bebeto'],
//     worldwide_fans: 950
// }

// let Argentina_National = {
//     name: "Argentina National Team",
//     city: 'N/A',
//     country: 'Argentina',
//     top_scorers: ['Messi', 'Batistuta', 'Maradona'],
//     worldwide_fans: 888
// }

// let Atletico_Madrid = {
//     name: "Atletico Madrid",
//     city: 'Madrid',
//     country: 'Spain',
//     top_scorers: ['Aragones', 'Griezmann', 'Torez'],
//     worldwide_fans: 400
// }

// db.collection('Teams').add(Real_Madrid);
// db.collection('Teams').add(Barcelona);
// db.collection('Teams').add(Manchester_United);
// db.collection('Teams').add(Manchester_City);
// db.collection('Teams').add(Brazil_National);
// db.collection('Teams').add(Argentina_National);
// db.collection('Teams').add(Atletico_Madrid);

// ***TASK 2
// 1. Show all teams in Spain
// db.collection('Teams').where('country', '==', 'Spain')
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// 2. Show all teams in Madrid, Spain
// db.collection('Teams').where('country', '==', 'Spain').where('city', '==', 'Madrid')
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// 3. Show all national teams
// db.collection('Teams')
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       if (doc.data().name.toLowerCase().includes('national')) {
//         console.log(doc.data().name);
//       }
//     });
//   });

// 4. Show all teams that are not in Spain
// db.collection('Teams').where('country', '!=', 'Spain')
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// 5. Show all teams that are not in Spain or England
// db.collection('Teams').where('country', 'not-in', ['Spain', 'England'])
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// 6. Show all teams in Spain with more than 700M fans
// db.collection('Teams').where('country', '==', 'Spain').where('worldwide_fans', '>', 700)
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// 7. Show all teams with a number of fans in the range of 500M and 600M
// db.collection('Teams').where('worldwide_fans', '>=', 500).where('worldwide_fans', '<=', 600)
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// 8. Show all teams where Ronaldo is a top scorer
// db.collection('Teams').where('top_scorers', 'array-contains', 'Ronaldo')
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// 9. Show all teams where ROnaldo, Maradona, or Messi is a top scorer
// db.collection('Teams').where('top_scorers', 'array-contains-any', ['Ronaldo', 'Maradona', 'Messi'])
// .get().then(response => {
//     let docs = response.docs;
//     // loop through the docs array
//     docs.forEach(doc => {
//         console.log(doc.data().name);
//     });
// });

// ***TASK 3A
// 1. Update Real Madrid to 811M Worldwide fans & change team name to Real Madrid FC
// db.collection('Teams')
//   .where('name', '==', 'Real Madrid')
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//       worldwide_fans: 811,
//       name: 'Real Madrid FC'
//     });
//   });

// 2. Update Barcelona to 747M Worldwide fans & change team name to FC Barcelona
// db.collection('Teams')
//   .where('name', '==', 'Barcelona')
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//       worldwide_fans: 747,
//       name: 'FC Barcelona'
//     });
//   });

// 3. Update the top_scorers array in Real Madrid to remove Hazard
// db.collection('Teams')
//   .where('name', '==', 'Real Madrid FC')
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//       top_scorers: firebase.firestore.FieldValue.arrayRemove('Hazard'),
//     })
//   });
// ...then add Crispo
// db.collection('Teams')
//     .where('name', '==', 'Real Madrid FC')
//     .get()
//     .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//         top_scorers: firebase.firestore.FieldValue.arrayUnion('Crispo'),
//     })
// });

// 4. Update the top_scorers array in Barcelona to remove Puyol
// db.collection('Teams')
//   .where('name', '==', 'FC Barcelona')
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//       top_scorers: firebase.firestore.FieldValue.arrayRemove('Puyol'),
//     })
//   });
// ...then add Deco
// db.collection('Teams')
//     .where('name', '==', 'FC Barcelona')
//     .get()
//     .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//         top_scorers: firebase.firestore.FieldValue.arrayUnion('Deco'),
//     })
// });

// ***TASK 3B
// 1. Create 'color' object
// let color = {
//     home: '',
//     away: ''
// }

// 2. Update all docs in firebase to include the blank 'color' object
// db.collection('Teams').get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       doc.ref.update({
//         color: color
//       });
//     });
//   });

// 3. Add the Jersey Colors for Real Madrid...
// db.collection('Teams')
//     .where('name', '==', 'Real Madrid FC')
//     .get()
//     .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//         'color.home': 'White',
//         'color.away': 'Black'
//     })
// });
// ...and Barcelona
// db.collection('Teams')
//     .where('name', '==', 'FC Barcelona')
//     .get()
//     .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//         'color.home': 'Red',
//         'color.away': 'Gold'
//     })
// });

// 4. Update the jersey colors for Real Madrid...
// db.collection('Teams')
//     .where('name', '==', 'Real Madrid FC')
//     .get()
//     .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//         'color.away': 'Purple'
//     })
// });
// ...and Barcelona
// db.collection('Teams')
//     .where('name', '==', 'FC Barcelona')
//     .get()
//     .then((querySnapshot) => {
//     querySnapshot.docs[0].ref.update({
//         'color.away': 'Pink'
//     })
// });





































// ***IN-CLASS WORK
// // insert data
// let john = {
//     name: "john",
//     age: 25, 
//     married: false,
//     favorites: {
//         color: "green",
//         city: "Madison"
//     },
//     siblings: ['mike', 'amy', 'jackie']
// }

// let derek = {
//     name: "derek",
//     age: 27, 
//     married: true,
//     favorites: {
//         color: "red",
//         city: "Madison"
//     },
//     siblings: ['mike', 'peter', 'neil']
// }

// let sally = {
//     name: "sally",
//     age: 40, 
//     married: false,
//     favorites: {
//         color: "blue",
//         city: "Chicago"
//     },
//     siblings: ['neil']
// }

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