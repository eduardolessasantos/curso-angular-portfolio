import { ApplicationConfig } from '@angular/core';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideAnimations()]
};
