import express from 'express';
import path from "path";
import pEvent from 'p-event';

import { Request , Response } from "express";
import { Server} from "http";

import { BackformationApplication } from './application';
import { ApplicationConfig } from '@loopback/core';


export class ExpressServer {

    //
    private app: express.Application;
    private lbApp: BackformationApplication;
    private server : Server | undefined;

    constructor(options: ApplicationConfig = {}) {
        this.app = express();
        this.lbApp = new BackformationApplication(options);

        // mise en place de la gestion racine loopback /api
        this.app.use('/api', this.lbApp.requestHandler);


        // pour les test express
        // Custom Express routes
        this.app.get('/',  (_req: Request, res: Response) =>{
            res.sendFile(path.resolve('public/index.html'));
        });
        this.app.get('/hello',  (_req: Request, res: Response) =>{
            res.send('Hello world!');
        });

    }

    async boot() {
        await this.lbApp.boot();
      }
    
      public async start() {
        await this.lbApp.start();
        const port = this.lbApp.restServer.config.port || 3000;
        const host = this.lbApp.restServer.config.host || '127.0.0.1';
        this.server = this.app.listen(port, host);
        await pEvent(this.server, 'listening');
      }
    
      // For testing purposes
      public async stop() {
        if (!this.server) return;
        await this.lbApp.stop();
        this.server.close();
        await pEvent(this.server, 'close');
        this.server = undefined;
      }


}