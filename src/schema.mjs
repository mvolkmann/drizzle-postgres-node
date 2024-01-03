import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const dogs = pgTable('dogs', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  breed: text('breed'),
  ownerId: integer('owner_id')
});

export const owners = pgTable('owners', {
  id: serial('id').primaryKey(),
  name: text('name').notNull()
});

// Drizzle Studio requires relations to be specified in both directions.
// In this case that is owners to dogs and dogs to owners.
export const ownersRelations = relations(owners, ({ many }) => ({
  dogs: many(dogs)
}));

export const dogsRelations = relations(dogs, ({ one }) => ({
  owner: one(owners, {
    fields: [dogs.ownerId],
    references: [owners.id]
  })
}));
