const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeBody(rawBody) {
  if (!rawBody) return {};
  if (typeof rawBody === 'string') {
    try {
      return JSON.parse(rawBody);
    } catch {
      return {};
    }
  }
  return rawBody;
}

function escapeHtml(input) {
  return String(input)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = normalizeBody(req.body);
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const message = String(body.message || '').trim();

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ ok: false, error: 'Todos los campos son obligatorios' });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ ok: false, error: 'Correo inválido' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO || 'Josue.leon@geep-pe.com';
  const fromEmail = process.env.CONTACT_FROM || 'GEEP Web <onboarding@resend.dev>';

  if (!apiKey) {
    return res.status(500).json({ ok: false, error: 'Falta RESEND_API_KEY en variables de entorno' });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br/>');

  const html = `
    <h2>Nueva consulta desde la web de GEEP</h2>
    <p><strong>Nombre:</strong> ${safeName}</p>
    <p><strong>Correo:</strong> ${safeEmail}</p>
    <p><strong>Teléfono:</strong> ${safePhone}</p>
    <p><strong>Mensaje:</strong><br/>${safeMessage}</p>
  `;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Nueva consulta web - ${name}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorPayload = await resendResponse.text();
      return res.status(502).json({ ok: false, error: 'Error enviando correo', detail: errorPayload });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Fallo interno enviando correo', detail: String(error) });
  }
}
