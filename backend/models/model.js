const supabase = require('../config/supabase');

// Small Supabase-backed stand-in for the Mongoose model methods this app uses.
// `fields` maps the field names the API returns (_id, userId, createdAt, ...) to the
// snake_case Postgres columns, so the frontend keeps receiving the same JSON as before.
// Filters are simple equality matches, e.g. find({ userId: id, Live: true }).
module.exports = (table, fields) => {
  const columns = Object.entries(fields)
    .map(([field, column]) => (field === column ? column : `${field}:${column}`))
    .join(',');

  const toRow = (doc) =>
    Object.fromEntries(
      Object.entries(doc)
        .filter(([field]) => Object.hasOwn(fields, field))
        .map(([field, value]) => [fields[field], value])
    );

  const run = async (query) => (await query.throwOnError()).data;

  return {
    columns,
    find: (filter = {}) => run(supabase.from(table).select(columns).match(toRow(filter))),
    findById: (id) => run(supabase.from(table).select(columns).eq('id', id).maybeSingle()),
    create: (doc) => run(supabase.from(table).insert(toRow(doc)).select(columns).single()),
    insertMany: (docs) => run(supabase.from(table).insert(docs.map(toRow)).select(columns)),
    findByIdAndUpdate: (id, update) =>
      run(supabase.from(table).update(toRow(update)).eq('id', id).select(columns).maybeSingle())
  };
};
