node version should be greater that 10.0.0

Two Command to run the project : 

1st :  ```yarn```

2nd : ```npm start```


Add Your Own FireBase Configurations In : ``````/src/config/fb.js``````


Add Rules in Firebase :
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /project/{project} {
      allow read, write: if request.auth.uid != null
    }
    match /users/{userId}{
    allow create
    allow read : if request.auth.uid != null
    allow write: if request.auth.uid == userId
    }
    match /notifications/{notification} {
      allow read, write: if request.auth.uid != null
    }
  }
}
```
