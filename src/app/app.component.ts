import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LipstickList';

  constructor() {
      // Your web app's Firebase configuration
      var firebaseConfig = {
          apiKey: "AIzaSyBlETnXMPVx0MObCzjyb9iGRgu0p_b0pe8",
          authDomain: "lipsticklist.firebaseapp.com",
          databaseURL: "https://lipsticklist.firebaseio.com",
          projectId: "lipsticklist",
          storageBucket: "lipsticklist.appspot.com",
          messagingSenderId: "780574066387",
          appId: "1:780574066387:web:ed944c75128d7e02"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }

}
