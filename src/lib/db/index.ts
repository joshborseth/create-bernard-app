import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

const client = createClient({
	//obv we are gonna swap this out for actual use
	url: 'file:./db.sqlite'
});
export const db = drizzle(client, {
	schema
});
