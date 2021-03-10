"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

 class App {
    
     __init() {this.porta = 9000}

    constructor() {;App.prototype.__init.call(this);
        this.express = _express2.default.call(void 0, );
        this.services();
        this.listen();
        this.database();
        this.middlewares();
        this.routes();
        
    }

     getApp() {
        return this.express;
    }

     routes() {
    }

     middlewares() {
        this.express.use(_express2.default.json());
    }

     listen() {
        this.express.listen(this.porta, () => {
            console.log('Servidor iniciado na porta ' + this.porta);
        });
    }

     services() {
    }

     database() {
    }
} exports.App = App;