// const express = require("express");
// const app = express();
// const port = 3000;

import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 9000;

export function discordAPIListner(client: any) {
  app.use(
    cors({
      origin: "*",
    })
  );
  app.get("/guild/:guildID/roles", async (req: Request, res: Response) => {
    const guild = await client.guilds.fetch(req.params.guildID);
    const roles = await guild.roles.fetch();

    const cleanedRoles = roles.map((role: any) => {
      role;

      let newRole = { idDiscord: role.id, name: role.name };
      return newRole;
    });

    res.send(cleanedRoles);
  });

  app.get(
    "/guild/:guildID/role/:roleID",
    async (req: Request, res: Response) => {
      const guild = await client.guilds.fetch(req.params.guildID);
      const role = await guild.roles.fetch(req.params.roleID);

      let newRole = {
        id: role.id,
        name: role.name,
      };
      res.send(newRole);
    }
  );

  app.get(
    "/guild/:guildID/user/:userID",
    async (req: Request, res: Response) => {
      const guild = await client.guilds.fetch(req.params.guildID);
      const user = await guild.members.fetch(req.params.userID);

      let newUser = {
        idDiscord: user.id,
        name: user.displayName,
        avatar: `https://cdn.discordapp.com/avatars/${user.id}/${user.user.avatar}.webp`,
      };
      res.send(newUser);
    }
  );

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

    res.send(cleanedUsers);
  });

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}
