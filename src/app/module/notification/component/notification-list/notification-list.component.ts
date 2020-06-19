import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Notification} from "../../../../../shared/model/notification";
import {map} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {loadNotification} from "../../notification.action";
import {notifications, notificationsLoaded} from "../../notification.selector";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements AfterViewInit {
  private notifCollection: AngularFirestoreCollection<Notification>;
  notifs$: Observable<(Notification | {timestamp: string})[] > = of([]);
  initLoading = true;
  loadingMore = false;
  checked = true
  data: any[] = [];
  constructor(
    private readonly afs: AngularFirestore,
    private readonly store: Store
  ) {
    this.notifCollection = afs.collection<Notification>('5');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.notifCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Notification;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(notifications => this.store.dispatch(loadNotification({notifications})));
  }

  ngOnInit(): void {
   this.notifs$ = this.store.pipe(select(notificationsLoaded))
    this.initLoading = false;

  }

  edit(item: any): void {
    // this.msg.success(item.email);
  }

  ngAfterViewInit() {
    this.notifCollection.stateChanges(['added']).pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Notification;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(x => console.log(x))
  }
}
