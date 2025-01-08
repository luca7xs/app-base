import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChatInputCommandInteraction,
} from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export abstract class Button {
  @Slash({
    name: "button",
    description: "Returns a message with one button",
    dmPermission: false,
  })
  async Handler(interaction: ChatInputCommandInteraction) {
    await interaction.deferReply({ flags: ["Ephemeral"] });

    await interaction.editReply({
      embeds: [
        {
          description: "The message with a button",
          color: 0x2b2d31,
        },
      ],

      components: [
        new ActionRowBuilder<ButtonBuilder>({
          components: [
            new ButtonBuilder({
              label: "Button",
              style: ButtonStyle.Primary,
              customId: "button",
            }),
          ],
        }),
      ],
    });
  }
}
