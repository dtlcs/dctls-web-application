import {ComponentFactoryResolver, Injectable, Type, ViewContainerRef} from '@angular/core';
import {Content} from "../content/content";

@Injectable()
export class ContentService {

  viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  loadComponent(component: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef.clear();
    let componentRef = this.viewContainerRef.createComponent(componentFactory);
    let childContent: Content = componentRef.instance;

    // Can set data to childContent
  }
}
