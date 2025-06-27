import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app.component';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideEventPlugins(),
    //...
  ],
}).catch((err) => console.error(err));
