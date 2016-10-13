import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './client/commarea.app';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
