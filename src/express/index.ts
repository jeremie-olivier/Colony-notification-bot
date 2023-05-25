// const express = require("express");
// const app = express();
// const port = 3000;

import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 9000;

export function discordAPIListner(client: any) {
  app.use(cors);
  app.get("/guild/:guildID/roles", async (req: Request, res: Response) => {
    const guild = await client.guilds.fetch(req.params.guildID);
    const roles = await guild.roles.fetch();

    const cleanedRoles = roles.map((role: any) => {
      role;

      let newRole = { idDiscord: role.id, name: role.name };
      return newRole;
    });

    res.json(cleanedRoles);
  });

  app.get("/guild/:guildID/users", async (req: Request, res: Response) => {
    const guild = await client.guilds.fetch(req.params.guildID);

    const users = await guild.members.fetch();

    const cleanedUsers = users.map((user: any) => {
      user;

      let newUser = {
        idDiscord: user.id,
        name: user.displayName,
        avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.user.avatar}.webp`,
      };
      return newUser;
    });

    res.json(cleanedUsers);
  });

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}
