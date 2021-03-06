import {BaseContentModel} from "./base.model";

export interface Epic extends BaseContentModel {
  startDate: Date,
  endDate: Date,
  entityType: EpicEntityType,
  projectId: number,
  timeLeft?: number
}

export type EpicEntityType = 1;
