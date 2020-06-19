import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationListComponent } from './component/notification-list/notification-list.component';
import {
  NzAvatarModule, NzCheckboxModule,
  NzDropDownModule,
  NzGridModule,
  NzIconModule,
  NzListModule,
  NzSkeletonModule
} from "ng-zorro-antd";
import {StoreModule} from "@ngrx/store";
import * as fromNotification from "./notification.reducer";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [NotificationListComponent],
  exports: [
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    NzDropDownModule,
    StoreModule.forFeature(fromNotification.notificationFeatureKey, fromNotification.reducer),
    NzIconModule,
    NzGridModule,
    NzAvatarModule,
    NzListModule,
    NzSkeletonModule,
    FormsModule,
    NzCheckboxModule
  ]
})
export class NotificationModule { }
