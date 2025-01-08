import { Discord, On, RestArgsOf } from "discordx";

@Discord()
export abstract class RateLimit {
  @On.rest({ event: "rateLimited" })
  async Handler([data]: RestArgsOf<"rateLimited">) {
    console.error("✕ Rate Limited", data);
  }
}
