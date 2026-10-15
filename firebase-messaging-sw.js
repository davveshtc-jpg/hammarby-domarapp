importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js');
firebase.initializeApp({
 apiKey:'AIzaSyCxTKkdbdMzCWGBJv-h8wK_HE8hCRtCrJE',
 authDomain:'hammarby-future-cup-90d68.firebaseapp.com',
 projectId:'hammarby-future-cup-90d68',
 storageBucket:'hammarby-future-cup-90d68.firebasestorage.app',
 messagingSenderId:'962097727602',
 appId:'1:962097727602:web:feb19b77860d09442f5aeb'
});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(payload=>{
 const n=payload.notification||{};
 self.registration.showNotification(n.title||'Hammarby Domarapp',{
  body:n.body||'Du har fått en uppdatering.',
  tag:payload.data?.tag||'hammarby-domare',
  data:{url:self.registration.scope}
 });
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 event.waitUntil(clients.openWindow(event.notification.data?.url||self.registration.scope));
});
