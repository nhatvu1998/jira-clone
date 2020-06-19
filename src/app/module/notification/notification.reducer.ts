import {createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityState} from "@ngrx/entity";
import {Sprint} from "../../../shared/model/sprint";
import {selectProject} from "../epic/epic.actions";
import {Notification} from "../../../shared/model/notification";
import {sprintEntityAdapter} from "../sprint/sprint.reducer";
import {loadNotification} from "./notification.action";


export const notificationFeatureKey = 'notification';

export interface NotificationState extends EntityState<Notification> {}

export const notificationEntityAdapter = createEntityAdapter<Notification>();

const initialState: NotificationState = notificationEntityAdapter.getInitialState({})

export const reducer = createReducer(
  initialState,
  on(loadNotification, (state, {notifications}) => notificationEntityAdapter.setAll(notifications, {
    ...state
  })),
  )
;

