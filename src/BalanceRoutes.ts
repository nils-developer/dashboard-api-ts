import { CommonRoutesConfig } from "./CommonRoutesConfig"
import express from "express"

export class BalanceRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "BalanceRoutes")
  }

  configureRoutes(): express.Application {
    this.app.route("/balance")
      .get((req: express.Request, res: express.Response) => {
        // TODO
      })

    return this.app
  }
}