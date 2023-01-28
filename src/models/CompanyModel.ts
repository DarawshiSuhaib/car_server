import { Model, ObjectID } from "@tsed/mongoose";
import {Default, Property} from "@tsed/schema";
@Model()
export class CompanyModel {
  @ObjectID("id")
  _id: string;
  @Property()
  name:string;
  
  @Property()
  @Default([])
  cars:string[];

  @Property()
  @Default([])
  users:string[];

  @Property()
  @Default(Date.now)
  activeUntil:Date;

  @Property()
  active:boolean;
}
