import {Inject, Injectable} from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { create } from "domain";
import { CompanyModel } from "src/models/CompanyModel";
import { UserModel } from "src/models/UserModel";

@Injectable()
export class UserService {
    constructor(@Inject(UserModel)private userModel:MongooseModel<UserModel>,@Inject(CompanyModel)private companyModel:MongooseModel<CompanyModel>){
        
    }
    async create(user:UserModel){
        return await this.userModel.create(user);
    }

    async edit(user:UserModel){
        return await this.userModel.findByIdAndUpdate(user._id,user);
    }
    async auth(user:UserModel){
        let usera=await this.userModel.findOne({username:user.username});
        if(usera==null){
            return 'user not found';
        }
        else if(usera.password!=user.password){
            return 'wrong password';
        }
        let com=await this.companyModel.findById(usera.company);
         if(!com!.active){
            return 'not active';
        }
        return 'accessed';
    }
   
    



}
