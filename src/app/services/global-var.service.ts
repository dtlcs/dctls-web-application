import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {

  currentJunction: any = {
    name: ''
  };

  constructor() { }

}
