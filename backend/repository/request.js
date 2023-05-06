import Database from '../database/index.js';

const instance = Database.getInstance();

export const getRequestsRepository = async () => {
  const query =
    'SELECT r.id, r.code, r.description, r.summary, e.name employee_name FROM requests r INNER JOIN employees e ON r.employee_id = e.id';
  const { rows } = await instance.executeQuery(query);

  return rows;
};

export const getRequestByIdRepository = async (id) => {
  const query = 'SELECT * FROM requests WHERE id = $1';
  const { rows } = await instance.executeQuery(query, [id]);

  return rows[0];
};

export const createRequestRepository = async (data) => {
  const fields = ['code', 'description', 'summary', 'employee_id'];
  const values = fields.map((field) => data[field]);

  const query = `INSERT INTO requests (${fields.join(
    ', '
  )}) VALUES ($1, $2, $3, $4) RETURNING *`;
  const { rows } = await instance.executeQuery(query, [...values]);

  return rows[0];
};

export const deleteRequestByIdRepository = async (id) => {
  const query = 'DELETE FROM requests WHERE id = $1';
  await instance.executeQuery(query, [id]);
};
