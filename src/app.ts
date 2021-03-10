import express from 'express';

export class App {
    private express: express.Application;
    private porta = 9000;

    constructor() {
        this.express = express();
        this.services();
        this.listen();
        this.database();
        this.middlewares();
        this.routes();
        
    }

    public getApp(): express.Application {
        return this.express;
    }

    private routes(): void {
    }

    private middlewares(): void {
        this.express.use(express.json());
    }

    private listen(): void {
        this.express.listen(this.porta, () => {
            console.log('Servidor iniciado na porta ' + this.porta);
        });
    }

    private services() {
    }

    private database(): void {
    }
}