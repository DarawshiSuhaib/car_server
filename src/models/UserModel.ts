import { Model, ObjectID } from "@tsed/mongoose";
import {Default, Property, Required} from "@tsed/schema";
import { CarModel } from "./CarModel";
@Model()
export class UserModel {
  @ObjectID("id")
  _id: string;

  @Property()
  name:string;

  @Property()
  username:string;
  
  @Property()
  password:string;

  
  @Property()
  role:string;

  @Property()
  phone:string;
  
  @Property()
  email:string;

  @Property()
  company:string;

  

}
