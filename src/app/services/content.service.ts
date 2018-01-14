import {ComponentFactoryResolver, Injectable, Type, ViewContainerRef} from '@angular/core';

@Injectable()
export class ContentService {

  public contentViewContainerRef: ViewContainerRef;

  public changeContentTitle: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  loadComponent(component: Type<{}>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.contentViewContainerRef.clear();
    let componentRef = this.contentViewContainerRef.createComponent(componentFactory);

    let childContent: any = componentRef.instance;
    this.changeContentTitle(childContent.title);
  }
}
