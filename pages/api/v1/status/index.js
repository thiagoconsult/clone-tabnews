import database from "../../../../infra/database";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  return response.status(200).json({ mesage: "Olá, eu sou uma API" });
}

export default status;
