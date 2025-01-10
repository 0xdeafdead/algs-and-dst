// Implement a SQL Query Parser
// Problem: Write a function that parses a SQL SELECT query and extracts the columns, table, and conditions.
// Required Time Complexity: O(n).

function queryParser(query: string) {
  const rules = new RegExp(/SELECT ([\w+, ]+) FROM ([\w]+) WHERE (.*)/g);
  const match = rules.exec(query);
  if (!match) return null;
  console.log(",match", match);
  return {
    fields: match[1].split(","),
    table: match[2],
    conditions: match[3].split(/AND|ORG/) ?? undefined,
  };
}

const x = queryParser(
  "SELECT Name, Age FROM User WHERE Age >= 18 AND Age <=100"
);
console.log("x", x);
