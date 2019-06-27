import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MedikalSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MedikalSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MedikalSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MedikalSharedModule {
  static forRoot() {
    return {
      ngModule: MedikalSharedModule
    };
  }
}
