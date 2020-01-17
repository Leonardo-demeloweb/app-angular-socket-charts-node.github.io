import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { hdccalc } from "hdccalc-leo";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, hdccalc],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
