import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import {Observable, of} from 'rxjs';
import {Notification} from "../../../shared/model/notification";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private shirtCollection: AngularFirestoreCollection<Notification>;
  shirts: Observable<Notification[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.shirtCollection = afs.collection<Notification>('3');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.shirts = this.shirtCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Notification;
        const id = a.payload.doc.id;
        console.log(a);
        return { id, ...data };
      }))
    );
  }
}
