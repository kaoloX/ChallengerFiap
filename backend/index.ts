import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from  "cors";
import * as  NotificationsController from './src/controller/NotificationsController'

const PORT = 3100;

async function startup () {
    await createConnection();
    const app = express();

    app.use(express.json());
    app.use(cors());

    app.post('/notifications', NotificationsController.save);
    app.get('/notifications', NotificationsController.getAll);

    app.listen(PORT, () => {
        console.log("App running on port " + 3100);
    });
}

startup ();