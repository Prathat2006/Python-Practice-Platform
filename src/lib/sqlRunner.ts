import initSqlJs from 'sql.js';

let SQL: any = null;

export async function getSqlJs() {
  if (SQL) return SQL;
  // load wasm file from a CDN for simplicity in AI studio env
  // Using jsDelivr which is often better at serving .wasm with correct MIME types
  const version = '1.14.1'; // Matches package.json
  SQL = await initSqlJs({
    locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/sql.js@${version}/dist/${file}`
  });
  return SQL;
}

export interface SQLTestResult {
  passed: boolean;
  expected?: any[];
  actual?: any[];
  error?: string;
  query: string;
}

export async function runSQLQuery(db: any, query: string, expectedQuery: string): Promise<SQLTestResult> {
  if (!query || query.trim() === '') {
    return {
      passed: false,
      error: "Query is empty",
      query: ""
    };
  }

  try {
    // Run user query
    // We wrap it in a transaction to roll back any accidental mutations 
    // although sql.js is in-memory, we want the "correct" results for comparison
    db.run("BEGIN TRANSACTION;");
    let userRows: any[] = [];
    try {
      const userRes = db.exec(query);
      userRows = userRes.length > 0 ? formatResultSet(userRes[userRes.length - 1]) : [];
    } finally {
      db.run("ROLLBACK;");
    }

    // Run expected query to get target data
    const expectedRes = db.exec(expectedQuery);
    const expectedRows = expectedRes.length > 0 ? formatResultSet(expectedRes[0]) : [];

    // Compare results flexibly (case-insensitive column names)
    const passed = compareResults(userRows, expectedRows);

    return {
      passed,
      expected: expectedRows,
      actual: userRows,
      query
    };
  } catch (err: any) {
    return {
      passed: false,
      error: err.message || String(err),
      query
    };
  }
}

/**
 * Normalizes keys to lowercase and compares result sets
 */
function compareResults(actual: any[], expected: any[]): boolean {
  if (actual.length !== expected.length) return false;
  
  const normalizeRow = (row: any) => {
    const normalized: any = {};
    Object.keys(row).forEach(key => {
      // Normalize column name to lowercase for comparison
      normalized[key.toLowerCase()] = row[key];
    });
    return normalized;
  };

  const normActual = actual.map(normalizeRow);
  const normExpected = expected.map(normalizeRow);

  return JSON.stringify(normActual) === JSON.stringify(normExpected);
}

function formatResultSet(res: { columns: string[], values: any[][] }) {
  const { columns, values } = res;
  return values.map(row => {
    const obj: any = {};
    columns.forEach((col, i) => {
      obj[col] = row[i];
    });
    return obj;
  });
}

export const MOVIE_DB_SCHEMA = `
CREATE TABLE movies (
  id INTEGER PRIMARY KEY,
  title VARCHAR(100),
  genre VARCHAR(50),
  release_year INTEGER,
  imdb_rating DECIMAL(2,1),
  duration_mins INTEGER
);
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username VARCHAR(50),
  subscription_tier VARCHAR(20),
  signup_date DATE
);
CREATE TABLE watch_history (
  watch_id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  movie_id INTEGER REFERENCES movies(id),
  completion_pct INTEGER,
  watch_date DATE
);

INSERT INTO movies (id, title, genre, release_year, imdb_rating, duration_mins) VALUES
(1, 'Inception', 'Sci-Fi', 2010, 8.8, 148),
(2, 'The Matrix', 'Sci-Fi', 1999, 8.7, 136),
(3, 'Avengers: Endgame', 'Action', 2019, 8.4, 181),
(4, 'Toy Story', 'Animation', 1995, NULL, 81),
(5, 'Star Wars: A New Hope', 'Sci-Fi', 1977, 8.6, 121),
(6, 'Die Hard', 'Action', 1988, 8.2, 132),
(7, 'The Dark Knight', 'Action', 2008, 9.0, 152),
(8, 'Spirited Away', 'Animation', 2001, 8.6, 125),
(9, 'Interstellar', 'Sci-Fi', 2014, 8.6, 169),
(10, 'The Room', 'Drama', 2003, 3.6, 99),
(11, 'Avatar', 'Sci-Fi', 2009, 7.8, 162),
(12, 'Finding Nemo', 'Animation', 2003, NULL, 100);

INSERT INTO users (id, username, subscription_tier, signup_date) VALUES
(1, 'Amit_P', 'Premium', '2023-01-15'),
(2, 'Priya_S', 'Basic', '2023-03-22'),
(3, 'Neha_G', 'Premium', '2023-05-10'),
(4, 'Rohan_D', 'Basic', '2023-08-05'),
(5, 'Kabir_K', 'Premium', '2023-11-20');

INSERT INTO watch_history (watch_id, user_id, movie_id, completion_pct, watch_date) VALUES
(1, 1, 1, 100, '2023-09-01'),
(2, 1, 5, 45, '2023-09-05'),
(3, 2, 3, 100, '2023-09-10'),
(4, 2, 2, 10, '2023-09-12'),
(5, 3, 6, 100, '2023-09-15'),
(6, 1, 7, 100, '2023-10-01'),
(7, 3, 8, 80, '2023-10-15'),
(8, 5, 11, 20, '2023-11-25');
`;
