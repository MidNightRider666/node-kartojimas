const mysql = require('mysql2/promise');
const { dbConfig } = require('../dbConfig');

const tableName = 'products';

async function GetProducts() {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `
        SELECT * from ${tableName}`;
    const [products] = await conn.query(sql, []);
    await conn.close();
    return products;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function InsertIntoNewProduct(NewProductData) {
  try {
    const { image_url, title, description, price } = NewProductData;
    const conn = await mysql.createConnection(dbConfig);
    const sql = ` INSERT INTO ${tableName} (image_url, title, description, price) VALUES (?, ?, ?, ?)
        `;
    const [insertResult] = await conn.execute(sql, [
      image_url,
      title,
      description,
      price,
    ]);
    await conn.close();
    return insertResult;
  } catch (error) {
    return false;
  }
}

async function DeleteProduct(id) {
  try {
    const conn = await mysql.createConnection(dbConfig);
    const sql = `DELETE FROM ${tableName} WHERE id = ? LIMIT 1`;
    const [singleDeleteData] = await conn.execute(sql, [id]);
    await conn.close();
    return singleDeleteData
  } catch (error) {
    console.log('SingleDeteData', error);
    return false;
  }
}

async function CountProducts() {
  try {
  const conn = await mysql.createConnection(dbConfig);
  const sql = `SELECT COUNT(*) FROM ${tableName}` 
  const [CountResult] = await conn.execute();
  await conn.close();
  return CountResult
} catch (error) {
  console.log('CountResult', error);
  return false;
}
}

module.exports = {
  GetProducts,
  InsertIntoNewProduct,
  DeleteProduct,
  CountProducts
};
