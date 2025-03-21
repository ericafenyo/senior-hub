import { sessions } from "@/services/sessions";

export async function GET(req: Request): Promise<Response> {
  const token = new URL(req.url).searchParams.get("token");

  if (!token) {
    return new Response("Token required", { status: 400 });
  }

  const session = await sessions.retrieve(token);
  console.log("session", session);

  if (session) {
    return new Response(session, { status: 200 });
  } else {
    return new Response(null, { status: 200 });
  }
}