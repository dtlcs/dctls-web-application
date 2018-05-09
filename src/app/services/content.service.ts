import {ComponentFactoryResolver, Injectable, Type, ViewContainerRef} from '@angular/core';

@Injectable()
export class ContentService {

  public contentViewContainerRef: ViewContainerRef;

  public changeContentTitle: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  loadComponent(component: Type<{}>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.contentViewContainerRef.clear();
    const componentRef = this.contentViewContainerRef.createComponent(componentFactory);

    const childContent: any = componentRef.instance;
    this.changeContentTitle(childContent.title);
  }
}
