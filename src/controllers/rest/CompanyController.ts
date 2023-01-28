import { BodyParams, MultipartFile, PlatformMulterFile } from "@tsed/common";
import {Controller, Inject} from "@tsed/di";
import {Get, Post, Put} from "@tsed/schema";
import { CompanyModel } from "src/models/CompanyModel";
import { CompanyService } from "src/services/CompanyService";

@Controller("/company")
export class CompanyController {
  constructor(@Inject(CompanyService)private companyService:CompanyService){}
  @Get("/")
  get() {
    return "hello";
  }
  @Post("/create")
  create(@MultipartFile("file")file:PlatformMulterFile,@BodyParams()com:CompanyModel){
    return this.companyService.create(com);
  }
  @Put("/activate")
  activate(@MultipartFile("file")file:PlatformMulterFile,@BodyParams()com:CompanyModel){
    return this.companyService.edit(com);
  }
}
