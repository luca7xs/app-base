import "$helpers/Environment.js";
import "$helpers/Event.js";
import "$helpers/Command.js";
import "$helpers/Component.js";

import { Client } from "$structures/Client.js";

const client = new Client();

client.sync();

export default client;
