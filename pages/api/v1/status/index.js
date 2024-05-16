function status(request, response) {
  return response.status(200).json({ mesage: "Olá, eu sou uma API" });
}

export default status;
