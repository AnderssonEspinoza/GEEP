# GEEP Web

Sitio corporativo en React + Vite con formulario de contacto enviado por función serverless en Vercel.

## Formulario de contacto (envío real)

La web envía el formulario a `POST /api/contact`.
La función usa Resend para enviar el email.

### Variables de entorno en Vercel

Configura estas variables en tu proyecto Vercel:

- `RESEND_API_KEY` (obligatoria)
- `CONTACT_TO` (opcional, por defecto: `Josue.leon@geep-pe.com`)
- `CONTACT_FROM` (opcional, por defecto: `GEEP Web <onboarding@resend.dev>`)

Recomendado para producción:

- Verifica tu dominio en Resend.
- Usa `CONTACT_FROM` con ese dominio, por ejemplo:
  - `GEEP Web <noreply@geep-pe.com>`

## Desarrollo local

`npm run dev` solo levanta Vite (frontend).
La ruta `/api/contact` se ejecuta en Vercel.

Para probar frontend + API localmente, usa:

```bash
vercel dev
```

## Build

```bash
npm run build
```
