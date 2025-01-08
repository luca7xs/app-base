import {
  ClientIntentsBits,
  ClientPartials,
  ClientActivityType,
} from "$types/Types.js";

import { GatewayIntentBits } from "discord.js";
import { Client as DiscordClient } from "discordx";

export class Client {
  protected token: string;
  protected intents!: Array<GatewayIntentBits>;
  public client: DiscordClient;

  constructor() {
    this.token = process.env["CLIENT_TOKEN"]!;
    // Log in the console
    console.warn("‼ Loading");
    // Set Intents
    this.intents = ClientIntentsBits;

    this.client = new DiscordClient({
      // To use only guild command
      botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],

      // Discord intents
      intents: this.intents,

      // Discord partials
      partials: ClientPartials,

      // Bot Presence
      presence: {
        activities: [
          {
            name: ".",
            type: ClientActivityType.Watching,
          },
        ],
        status: "dnd",
      },

      // Other
      closeTimeout: 10,
      failIfNotExists: true,
      silent: true,
    });
  }

  async sync() {
    await this.client.login(this.token);
  }
}
