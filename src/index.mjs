import { eq } from 'drizzle-orm';
import { dogs, owners } from './schema.mjs';
import { db } from './db.mjs';

// Delete all records from the tables.
await db.delete(dogs);
await db.delete(owners);

// Insert new rows in the owners table.
let results = await db
  .insert(owners)
  .values({ name: 'Tami' })
  .returning({ id: owners.id });
const tamiId = results[0].id;

results = await db
  .insert(owners)
  .values({ name: 'Amanda' })
  .returning({ id: owners.id });
const amandaId = results[0].id;

// Insert new rows in the dogs table.
await db
  .insert(dogs)
  .values({ name: 'Comet', breed: 'Greyhound', ownerId: tamiId });
await db.insert(dogs).values([
  { name: 'Maisey', breed: 'Treeing Walker Coonhound', ownerId: amandaId },
  { name: 'Ramsay', breed: 'Native American Indian Dog' },
  { name: 'Oscar', breed: 'German Shorthaired Pointer', ownerId: amandaId }
]);

// Modify a row in the dogs table.
await db.update(dogs).set({ breed: 'Whippet' }).where(eq(dogs.name, 'Comet'));

// Delete a row from the dogs table.
await db.delete(dogs).where(eq(dogs.name, 'Ramsay'));

// Get all dogs.
results = await db.select().from(dogs);
console.log('All Dogs');
for (const result of results) {
  console.log('-', result.name);
}

// Get dogs owned by Amanda.
results = await db
  .select()
  .from(dogs)
  .innerJoin(owners, eq(owners.id, dogs.ownerId))
  .where(eq(owners.name, 'Amanda'));
console.log("\nAmanda's Dogs");
for (const result of results) {
  console.log('-', result.dogs.name);
}

process.exit(); // Why needed?
