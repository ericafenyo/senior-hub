import Redis from "ioredis";
import { Session } from "@/types/session";
import Logger from "@/utilities/logger";

Logger.defaultMeta = { tag: "SESSIONS" };

class Sessions {
  redis = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD
  });

  async save(session: Session) {
    Logger.debug(`save(session: ${session})`);
    await this.redis.set(session.userId, JSON.stringify(session), "EX", 50000);
  };

  async retrieve(key: string): Promise<string | null> {
    Logger.info(`retrieve(key: ${key})`);
    this.redis.get(key, (err, result) => {
      console.log(err, result);
    });

    try {
// Attempt to get the value from Redis
      const value = await this.redis.get(key);

      // Check if the value is null or undefined
      if (value === null || value === undefined) {
        Logger.warn(`Key not found in Redis: ${key}`);
        return null; // Or handle the case accordingly
      }

      Logger.info(`Returning value: ${value}`);
      return value; // Return the value safely, as it's guaranteed to be a valid string
    } catch (error) {
      Logger.error(`Error retrieving key from Redis: ${key}`, error);
      return null; // Or handle the case accordingly
    }

  }

  async clear(key: string) {
    Logger.debug(`clear(key: ${key})`);
    await this.redis.del(key);
  };
}

export const sessions = new Sessions();
