export default function handler(req, res) {
  res.status(200).json({ text: process.env.MONGODB_URI })
}