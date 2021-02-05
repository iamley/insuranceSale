import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'entelSafeHtml'
})
export class SafeHtmlPipe implements PipeTransform{

  constructor(private sanitizar: DomSanitizer) {}

  transform(html: string): SafeHtml {
    return this.sanitizar.bypassSecurityTrustHtml(html);
  }
}
