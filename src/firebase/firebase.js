import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/** REFERENCES  */

//child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database
//     .ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Pet',
//     note: 'for pet',
//     amount: 500,
//     createdAt: 5
// });

// database.ref('notes/-MHaHfgpnGc8hKvlb88r').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//     const person = snapshot.val();
//     console.log(
//         `${person.name} is ${person.job.title} at ${person.job.company}`
//     );
// });

// database.ref('name').set('Joanna');

// const onValuechange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValuechange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(37);
// }, 10500);

// database
//     .ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database
//     .ref()
//     .set({
//         name: 'Mac Ville',
//         age: 26,
//         stressLevel: 6,
//         job: {
//             title: 'Software Developer',
//             company: 'google'
//         },
//         location: {
//             city: 'Mandaluyong',
//             country: 'Philippines'
//         }
//     })
//     .then(() => {
//         console.log('Data is saved!');
//     })
//     .catch((e) => {
//         console.log('This failed', e);
//     });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'seattle'
// });
// database
//     .ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('data removed');
//     })
//     .catch((e) => {
//         console.log('remove failed: ', e.message);
//     });

// database.ref('isSingle').set(null);
