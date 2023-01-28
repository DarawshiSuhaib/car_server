import { BodyParams, MultipartFile, PlatformMulterFile } from "@tsed/common";
import {Controller, Inject} from "@tsed/di";
import {Get, Post} from "@tsed/schema";
import { UserModel } from "src/models/UserModel";
import { UserService } from "src/services/UserService";
import { runInThisContext } from "vm";

@Controller("/user")
export class UserController {
  constructor(@Inject(UserService)private userService:UserService){}
  @Get("/")
  get() {
    return "hello";
  }
  @Post("/login")
  login(@MultipartFile('file') file:PlatformMulterFile,@BodyParams()user:UserModel){
    return this.userService.auth(user);
  }
  @Post("/create")
  create(@MultipartFile('file') file:PlatformMulterFile,@BodyParams()user:UserModel){
    return this.userService.create(user);
  }
  
}
