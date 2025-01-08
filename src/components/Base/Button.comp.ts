import { ChatInputCommandInteraction } from "discord.js";
import { Discord, ButtonComponent } from "discordx";

@Discord()
export abstract class Button {
  @ButtonComponent({ id: "button" })
  async Handler(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply({ flags: ["Ephemeral"] });

    await interaction.editReply({
      embeds: [
        {
          description: "Hello, world!",
          color: 0x2b2d31,
        },
      ],
    });
  }
}
