export default async function handler(req: any, res: any) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const question = typeof req.body?.question === "string" ? req.body.question.trim().slice(0, 700) : "";
  if (!question) return res.status(400).json({ error: "A question is required." });
  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.status(503).json({ error: "AI API is not configured. The portfolio's built-in assistant will answer instead." });
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.35,
        max_tokens: 260,
        messages: [
          { role: "system", content: "You are the portfolio assistant for Loganathan S, a final-year B.Tech Artificial Intelligence & Data Science student at Mahendra Engineering College, CGPA 8.50. Answer only from these facts. Skills: Python, Java, SQL, JavaScript, React, Flutter, TensorFlow, PyTorch, YOLO, n8n, Supabase, PostgreSQL, MySQL, MongoDB, ESP32 and IoT. Projects: Personal AI Chat App, Doodle Alive, AI-Based Smart Traffic Management, AI-Enabled Healthcare Monitoring, Hand Pen, RNN Voice & Next-Word Prediction, Academic Assessment & Performance Analysis, Fake News Detection & Verification, LOGU GAMES, Mistry Worker & Salary Manager, and ongoing AI-Powered Disaster Monitoring using satellite and drone imagery. Experience: Ethiroli Private Limited (Salem) and Shanks Code (remote), full-stack development. Education: Mahendra Engineering College, B.Tech AI & DS, CGPA 8.50. Contact: logan970105@gmail.com; GitHub github.com/sloganathan288-dev; LinkedIn linkedin.com/in/loganathan-data. Be concise, friendly and professional. Never invent achievements, dates, links or skills. If asked something unknown, say so and suggest contacting Loganathan." },
          { role: "user", content: question }
        ]
      })
    });
    if (!response.ok) return res.status(502).json({ error: "AI service is temporarily unavailable." });
    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content;
    if (!answer) return res.status(502).json({ error: "No answer was returned." });
    return res.status(200).json({ answer });
  } catch {
    return res.status(500).json({ error: "Unable to process the question right now." });
  }
}
