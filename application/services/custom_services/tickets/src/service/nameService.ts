import { Request, Response } from 'express';
import {nameDao} from '../dao/nameDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let name = new nameDao();

export class nameService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpGetAllValues')
     
     name.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpSearchForUpdate')
     let  nameData = req.body;
     name.GpSearchForUpdate(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public async GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpSearch')
     
     let nameData = {
          
     created_by: '',
          
     };
          
     let jwt_token = req.query.jwt_token;
     let decodedObject: any = await this.verifyToken(jwt_token);
     nameData.created_by = decodedObject.email;
          
     name.GpSearch(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpSearch')
         callback(response);
         });
    }
    verifyToken(jwt_token) {
                    return new Promise(resolve => {
                        jwt.verify(jwt_token, 'geppettosecret', (err, decoded) => {
                            resolve(JSON.parse(JSON.stringify(decoded)));
                        })
                    })
                }

    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpUpdate')
     let  nameData = req.body;
     name.GpUpdate(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpDelete')
     let  nameId = req.params.id;
     name.GpDelete(nameId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GpCreate')
     let  nameData = req.body;
     name.GpCreate(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}