import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {FirebaseAuthService} from "./services/firebase-auth.service";
import {ContentService} from "./services/content.service";
import {AngularFireAuth} from "angularfire2/auth";
import {ConsoleComponent} from "./components/skeleton/console/console.component";
import {SignInComponent} from "./components/skeleton/sign-in/sign-in.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild('dynamicContent', {
    read: ViewContainerRef
  }) contentViewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private angularFireAuth: AngularFireAuth) {
  }

  ngOnInit(){
    this.angularFireAuth.authState.subscribe((auth) => {
      if(auth){
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConsoleComponent);
        this.contentViewContainerRef.clear();
        this.contentViewContainerRef.createComponent(componentFactory);
      }else{
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SignInComponent);
        this.contentViewContainerRef.clear();
        this.contentViewContainerRef.createComponent(componentFactory);
      }
    });
  }
}
