import * as mongoose from 'mongoose';
import nameModel from '../models/name';
import { CustomLogger } from '../config/Logger'


export class nameDao {
    private name = nameModel;
    constructor() { }
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpGetAllValues')

this.name.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(nameData, callback){
new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpSearchForUpdate')

this.name.findOneAndUpdate({ _id: nameData._id }, nameData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(nameData, callback){
new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(nameData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                            }
                        );;
;
this.name.find({ $and: [and_obj] }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(nameData, callback){
new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpUpdate')

this.name.findOneAndUpdate({ _id: nameData._id }, nameData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(nameId, callback){
new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpDelete')

this.name.findByIdAndRemove(nameId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(nameData, callback){
new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GpCreate')
let temp = new nameModel(nameData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}