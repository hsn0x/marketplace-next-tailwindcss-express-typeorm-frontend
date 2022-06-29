import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
    res.send("xd");
});

export default handler;
