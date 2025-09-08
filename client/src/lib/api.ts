const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export async function sendInquiry(data: {
  name: string;
  email: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/api/inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send inquiry");
  }

  return res.json();
}