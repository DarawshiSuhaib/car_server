
import { Model, ObjectID } from "@tsed/mongoose";
import {Property, Required} from "@tsed/schema";
@Model()
export class CustomerModel {
  @ObjectID("id")
  _id: string;
  @Property(Required)
  idNumber:number;

  @Property(Required)
  name:string;

  @Property()
  complains:string[];
  
  @Property()
  rents:string[]
}
