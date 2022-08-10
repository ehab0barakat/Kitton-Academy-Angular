import { Time } from "@angular/common";
import { timestamp } from "rxjs";

export interface classComment {
  id: number;
  class_id?:number;
  user_id:number;
  user_name:string;
  comment:string;
  created_at:Date;
}
