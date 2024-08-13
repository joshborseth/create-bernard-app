import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/db/schema.ts',
	out: './src/lib/db/migrations/',
	driver: 'turso',
	dialect: 'sqlite',
	dbCredentials: {
		//obv we are gonna swap this out for actual use
		url: 'file:./db.sqlite'
	}
} satisfies Config;
