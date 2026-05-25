import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JsonLdService {
  private readonly document = inject(DOCUMENT);

  setSchema(id: string, schema: object | object[]): void {
    this.removeSchema(id);
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = `json-ld-${id}`;
    script.text = JSON.stringify(Array.isArray(schema) ? schema : schema);
    this.document.head.appendChild(script);
  }

  removeSchema(id: string): void {
    this.document.getElementById(`json-ld-${id}`)?.remove();
  }
}
