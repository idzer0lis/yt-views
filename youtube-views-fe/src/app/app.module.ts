import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
    declarations: [
        AppComponent,
        LandingComponent
    ],
    imports: [
        BrowserAnimationsModule,
        // RouterModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ComponentsModule,
        SharedModule,
        CoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
