import {
    ComponentFactoryResolver,
    ElementRef,
    Injectable,
    ViewContainerRef
  } from '@angular/core'
  
  @Injectable({
    providedIn: 'root',
  })
  export class ToastService {
    rootViewContainer: ViewContainerRef;

    setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
      this.rootViewContainer = viewContainerRef
    }
    addToast(success: boolean, message: string, elRef: ElementRef) {
        let element = document.createElement('div');
        element.classList.add('toast');
        element.classList.add(success ? 'success' : 'error');

        element.textContent = message;

    const el = elRef.nativeElement as HTMLElement;
    el.parentNode!.insertBefore(element, el.nextSibling);

        setTimeout(() => element.remove(), 3000);
    }
  }