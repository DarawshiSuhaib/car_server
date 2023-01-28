import {Inject, Injectable} from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { CompanyModel } from "src/models/CompanyModel";
import { UserModel } from "src/models/UserModel";

@Injectable()
export class CompanyService {
    constructor(@Inject(UserModel)private userModel:MongooseModel<UserModel>,@Inject(CompanyModel)private companyModel:MongooseModel<CompanyModel>){
        
    }
    async create(user:CompanyModel){
        return await this.companyModel.create(user);
    }

    async edit(user:CompanyModel){
        return await this.companyModel.findByIdAndUpdate(user._id,user);
    }

    async active(user:CompanyModel){
        return await this.companyModel.findByIdAndUpdate(user._id,{active:user.active});
    }

    
}
