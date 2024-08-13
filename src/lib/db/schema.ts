import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('posts', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	text: text('text', { length: 256 }).notNull(),
	createdAt: text('createdAt')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
	updatedAt: text('updatedAt').default(sql`CURRENT_TIMESTAMP`)
});
