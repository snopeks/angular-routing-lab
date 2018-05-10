import { AppRoutingModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InternalDefencesModule } from './internal-defences/internal-defences.module'
import { AppComponent } from './app.component';
import { StarDestroyerComponent } from './star-destroyer/star-destroyer.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { InfoWindowComponent } from './info-window/info-window.component';

@NgModule({
  declarations: [
    AppComponent,

    StarDestroyerComponent,

    TieFighterComponent,

    InfoWindowComponent
  ],
  imports: [
    BrowserModule,
    InternalDefencesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
