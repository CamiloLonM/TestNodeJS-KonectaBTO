import pg from 'pg';
import config from '../config/index.js';

const { Client } = pg;

export default class Database {
  static instance;

  constructor() {
    this.client = new Client({
      user: config.database.user,
      host: config.database.host,
      database: config.database.database,
      password: config.database.password,
      port: config.database.port,
    });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  async connect() {
    try {
      await this.client.connect();
      console.log('Database connected.');
    } catch (error) {
      console.log('Error trying to connect database.', error);
    }
  }

  async executeQuery(query, params) {
    try {
      return await this.client.query(query, params);
    } catch (error) {
      console.log('Error trying to query from database', error);
    }
  }
}
