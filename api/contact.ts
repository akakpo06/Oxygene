// import type { VercelRequest, VercelResponse } from '@vercel/node';
// import fetch from 'node-fetch';
// import sgMail from '@sendgrid/mail';

// // Simple in-memory rate limiter (ephemeral in serverless — ok for small projects).
// const ipBuckets: Map<string, { count: number; firstSeen: number }> = new Map();
// const RATE_LIMIT = 5; // requests
// const WINDOW_MS = 60 * 60 * 1000; // 1 hour

// sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

//   const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
//   const now = Date.now();

//   // Rate limiting
//   try {
//     const key = String(ip);
//     const bucket = ipBuckets.get(key) || { count: 0, firstSeen: now };
//     if (now - bucket.firstSeen < WINDOW_MS) {
//       if (bucket.count >= RATE_LIMIT) {
//         return res.status(429).json({ error: 'Too many requests' });
//       }
//       bucket.count += 1;
//     } else {
//       bucket.count = 1;
//       bucket.firstSeen = now;
//     }
//     ipBuckets.set(key, bucket);
//   } catch (e) {
//     // continue even if rate limiter fails
//   }

//   const { name, email, subject, message, token, _hp } = req.body || {};

//   // Honeypot check
//   if (_hp) return res.status(400).json({ error: 'Spam detected' });

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: 'Missing required fields' });
//   }

//   // Verify reCAPTCHA if configured
//   const recaptchaSecret = process.env.RECAPTCHA_SECRET;
//   if (recaptchaSecret && token) {
//     try {
//       const r = await fetch('https://www.google.com/recaptcha/api/siteverify', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: `secret=${encodeURIComponent(recaptchaSecret)}&response=${encodeURIComponent(token)}`,
//       });
//       const json = await r.json();
//       if (!json.success || (json.score !== undefined && json.score < 0.5)) {
//         return res.status(400).json({ error: 'Failed captcha verification' });
//       }
//     } catch (e) {
//       return res.status(500).json({ error: 'Captcha verification failed' });
//     }
//   }

//   // Send email via SendGrid
//   const recipient = process.env.CONTACT_RECIPIENT;
//   if (!process.env.SENDGRID_API_KEY || !recipient) {
//     return res.status(500).json({ error: 'Email service not configured' });
//   }

//   const msg = {
//     to: recipient,
//     from: recipient,
//     subject: `[Contact] ${subject || 'Nouveau message'}`,
//     text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
//     html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
//   };

//   try {
//     await sgMail.send(msg as any);
//     return res.status(200).json({ ok: true });
//   } catch (err: any) {
//     console.error('SendGrid error', err?.response?.body || err.message || err);
//     return res.status(500).json({ error: 'Failed to send email' });
//   }
// }
