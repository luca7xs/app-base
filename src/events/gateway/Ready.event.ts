import { ArgsOf, Client, Discord, Once } from "discordx";

@Discord()
export abstract class Ready {
  @Once({ event: "ready" })
  async Handle([_]: ArgsOf<"ready">, client: Client) {
    // Make sure all guilds are cached
    await this.syncGuilds(client);

    // Synchronize applications commands with Discord
    await this.syncCommands(client);

    // Clear Commands
    // this.clearCommands(client);

    // When connected
    console.info(`✓ Connected to the gateway as ${client.user?.tag}`);
  }

  // Sync Guilds
  async syncGuilds(client: Client) {
    // WARN
    console.warn("‼ Synchronizing guilds...");

    // Fetch Guilds
    await client.guilds
      .fetch()
      .then(() => console.info("✓ Synchronized guilds..."))
      .catch((err: unknown) => {
        console.error("✕ Error when synchronizing guilds...", err);
      });
  }

  // Sync Commands
  async syncCommands(client: Client) {
    // WARN
    console.warn("‼ Synchronizing global commands...");

    // Init App Commands Guilds
    await client
      .initApplicationCommands()
      .then(() => console.info("✓ Synchronized global commands..."))
      .catch((err: unknown) => {
        console.error("✕ Error when synchronizing global commands...", err);
      });
  }

  // async clearCommands(client: Client) {
  //   // Clear Application Commands
  //   await client.clearApplicationCommands(
  //     ...client.guilds.cache.map((g) => g.id)
  //   );
  // }
}
