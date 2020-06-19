import {createAction, props} from '@ngrx/store';
import {ErrorMessage} from "../../../shared/model/error-message";
import {Notification} from "../../../shared/model/notification";

export const loadNotification = createAction(
  '[Notification Page] Load all notification',
  props<{notifications: Notification[]}>()
);


