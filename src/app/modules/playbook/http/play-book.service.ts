import { Injectable } from '@angular/core';

import { BaseService } from '../../../core/http/base.service';

@Injectable({
  providedIn: 'root',
})
export class PlayBookService {
  constructor(private BaseService: BaseService) {}

  getSlides(fileName) {
    return this.BaseService.GET(fileName);
  }

  getSketches(fileName) {
    return this.BaseService.GET(fileName);
  }
}
