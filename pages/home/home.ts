import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, private file: File) {
    this.openFile();
  }

  openFile() {
    this.file
      .checkDir(this.file.dataDirectory, 'mydir')
      .then(_ => console.log('Directory exists'))
      .catch(err => console.log("Directory doesn't exist"));
  }
}
