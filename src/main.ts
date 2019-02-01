import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

// initialise the Zendesk JavaScript API client
export const zafClient = (<any>window).ZAFClient.init();
zafClient.invoke("resize", { width: "100%", height: "600px" });
