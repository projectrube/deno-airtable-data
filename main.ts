import { Airtable } from "https://deno.land/x/airtable/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const airtable = new Airtable({
  apiKey: Deno.env.get(`AIRTABLE_API_KEY`),
  baseId: Deno.env.get(`AIRTABLE_BASE_ID`),
  tableName: Deno.env.get(`AIRTABLE_TABLE_NAME`),
});

const results = await airtable.select();

console.log(results);