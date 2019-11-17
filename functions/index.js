

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');



const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
exports.sendAdminNotification = functions.database.ref('/Scof5c2xjEYFXAIxm2A7/waterLevel').onUpdate((snapshot, context)=> {
const Scof5c2xjEYFXAIxm2A7= snapshot.after.val();

const payload = {notification: {
  title: 'Check You',
  body:"data" +Scof5c2xjEYFXAIxm2A7
  }
};
if (Scof5c2xjEYFXAIxm2A7 < 50)
{return admin.messaging().sendToTopic("Scof5c2xjEYFXAIxm2A7",payload)
    .then(function(response){
         console.log('Notification sent successfully:'+Scof5c2xjEYFXAIxm2A7,response);
     return response
    }) 
    .catch(function(error){
         console.log('Notification sent failed:',error);
    });
  }
  else  
  console.log('no Notification ');   
});
