import { Time } from "@angular/common";
import { timestamp } from "rxjs";

export interface classComment {
  id: number;
  created_at:Date;
  class_id:number;
  user_id:number;
  user_name:string;
  comment:string;

}
