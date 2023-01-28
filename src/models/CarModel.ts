import { Model, ObjectID } from "@tsed/mongoose";
import {Default, Property} from "@tsed/schema";
import { RentsModel } from "./RentsModel";
@Model()
export class CarModel {
  @ObjectID("id")
  _id: string;

  @Property()
  company:string;

  @Property()
  number:string;

  @Property()
  brand:string;

  @Property()
  model:string;

  @Property()
  @Default(false)
  isRented:boolean;

  @Property()
  price:number;

  @Property()
  @Default([])
  damages:string[];

  @Property()
  @Default([])
  rents:string[];

  @Property()
  currentRents:RentsModel;

  @Property()
  @Default(false)
  isDamaged:boolean;

  @Property()
  customer:string;

  @Property()
  licence:string;

  @Property()
  meters:number;

}
