import { Request, Response } from 'express';
import { nameService } from '../service/nameService';
import { CustomLogger } from '../config/Logger'
let name = new nameService();

export class nameController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
name.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpGetAllValues');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
name.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpSearchForUpdate');
    })}
public GpSearch(req: Request, res: Response) {
name.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
name.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpUpdate');
    })}
public GpDelete(req: Request, res: Response) {
name.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpDelete');
    })}
public GpCreate(req: Request, res: Response) {
name.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GpCreate');
    })}


}