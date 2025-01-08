import { database } from "$database/Client.js";
import { ChatInputCommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export abstract class Database {
  @Slash({
    name: "database",
    description: "Interacts with the database",
    dmPermission: false,
  })
  async Handler(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply({ flags: ["Ephemeral"] });

    const data = await database.application_base_table.create({});

    await interaction.editReply({
      embeds: [
        {
          description: `Inserted into the table: ${data.id}`,
          color: 0x2b2d31,
        },
      ],
    });
  }
}
