// import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    await req.json();

    return res.status(200).json({ messageId: "disabled" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
