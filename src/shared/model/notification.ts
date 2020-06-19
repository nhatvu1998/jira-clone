import {IssueEntityType} from "./issue";
import {ProjectEntityType} from "./project";
import {EpicEntityType} from "./epic";
import {SprintEntityType} from "./sprint";

// import Timestamp = firebase.firestore.Timestamp;

export interface Notification {
  producerId: number;
  message: string;
  entityId: number;
  entityType: EntityType;
  createdAt: Date;
  status: NotifStatus;
}

export enum NotifEventType {
  Created,
  Updated,
  AddedToProject,
  RemovedFromProject,
  IssueStatusChanged,
  StartSprint,
  FinishSprint,
  Assigned,
  AssigneeRemoved,
  ReporterRemoved,
  Reported,
  Deleted,
}

export interface Notification {
  producerId: number;
  message: string;
  entityId: number;
  entityType: EntityType;
  createdAt: Date;
  status: NotifStatus;
  entityName: string;
  watched: boolean
}

export type EntityType = IssueEntityType | ProjectEntityType | EpicEntityType | SprintEntityType;

export enum NotifStatus {
  Unread,
  Read,
}
