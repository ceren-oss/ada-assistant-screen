exports.handler = async () => {
  const sbUrl = process.env.SUPABASE_URL || "";
  const sbKey = process.env.SUPABASE_ANON_KEY || "";
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify({ sbUrl, sbKey })
  };
};
