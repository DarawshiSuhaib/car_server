import { ObjectID } from "@tsed/mongoose";
import {Default, Property, Required} from "@tsed/schema";

export class ComplainModel {
  @ObjectID("id")
  _id: string;

  @Property(Required)
  custumer:string;

  @Property(Required)
  company:string;

  @Property(Required)
  complain:string;

  @Property()
  @Default(Date.now)
  submittedAt:Date;
}
