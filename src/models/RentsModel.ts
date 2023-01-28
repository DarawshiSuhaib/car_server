import { Model, ObjectID } from "@tsed/mongoose";
import {Default, Property} from "@tsed/schema";

@Model()
export class RentsModel {
  @ObjectID("id")
  _id: string;

  @Property()
  customer:string;
  
  @Property()
  company:string;

  @Property()
  car:string;

  @Property()
  @Default(Date.now)
  startsAt:Date;
  
  @Property()
  @Default(Date.now)
  endsAt:Date;

  @Property()
  payment:number;

  @Property()
  paid:boolean


  
}
