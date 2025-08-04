export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    console.log("Mensagem recebida:", body);
    res.status(200).json({ message: "Mensagem recebida com sucesso." });
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
