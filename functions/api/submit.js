export async function onRequestPost(context) {
  const { request, env } = context;

  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  const input = await request.json();

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      access_key: env.WEB3FORMS_ACCESS_KEY,
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message,
    }),
  });

  const result = await response.json();
  
  return new Response(JSON.stringify(result), {
    status: response.status,
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*" 
    }
  });
}