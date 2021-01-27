import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PlaceDetailPage } from "./place-detail.page";
import { CreateBookingComponent } from "../../../bookings/create-booking/create-booking.component";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: PlaceDetailPage,
  },
];
// entryComponents: [CreateBookingComponent] is for modal, it lets angular know
// That one will eventually be created in the future, when you click it
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [PlaceDetailPage, CreateBookingComponent],
  entryComponents: [CreateBookingComponent],
})
export class PlaceDetailPageModule {}
