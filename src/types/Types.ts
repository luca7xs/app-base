import { ActivityType, GatewayIntentBits, Partials } from "discord.js";

export const ClientIntentsBits: GatewayIntentBits[] = [
  // GatewayIntentBits.AutoModerationConfiguration,
  // GatewayIntentBits.AutoModerationExecution,
  // GatewayIntentBits.DirectMessageReactions,
  // GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.DirectMessages,
  // GatewayIntentBits.GuildBans,
  // GatewayIntentBits.GuildEmojisAndStickers,
  // GatewayIntentBits.GuildIntegrations,
  // GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildMembers,
  // GatewayIntentBits.GuildModeration,
  // GatewayIntentBits.GuildMessageReactions,
  // GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.GuildMessages,
  // GatewayIntentBits.GuildPresences,
  // GatewayIntentBits.GuildScheduledEvents,
  GatewayIntentBits.GuildVoiceStates,
  // GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.MessageContent,
]

export const ClientPartials: Partials[] = [
  Partials.Channel,
  Partials.GuildMember,
  // Partials.GuildScheduledEvent,
  Partials.Message,
  // Partials.Reaction,
  // Partials.ThreadMember,
  Partials.User,
];

export const ClientActivityType = ActivityType;
