import nc from "nc";

const handler = nc();

handler.get(async (req, res) => {
    const { email, password } = req.query;
});
