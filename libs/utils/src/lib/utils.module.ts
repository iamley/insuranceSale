import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './directives/safe-html.pipe';

@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [CommonModule],
  exports: [SafeHtmlPipe]
})
export class UtilsModule {}
