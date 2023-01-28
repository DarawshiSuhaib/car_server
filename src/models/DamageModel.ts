import { ObjectID } from "@tsed/mongoose";
import {Default, Property} from "@tsed/schema";

export class DamageModel {
  @ObjectID("id")
  _id: string;

  @Property()
  car:string;

  @Property()
  damage:string;

  @Property()
  @Default(Date.now)
  date:Date;

  
}
