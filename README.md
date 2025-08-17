# LCATO (Next.js 14, Arabic-first)

## تطوير محلي
```bash
npm install
npm run dev
```

## نشر عبر Vercel
1) اربط هذا المستودع في Vercel (New Project → Import Git Repository).
2) Project → Settings → Domains → أضف lcato.com.
3) في GoDaddy DNS:
   - A (@) → 76.76.21.21
   - CNAME (www) → cname.vercel-dns.com
4) اضغط Verify في Vercel وانتظر تفعيل SSL.
5) لا تغيّر سجلات MX الخاصة بالبريد.

## ربط نموذج التواصل
- حل سريع: Formspree.
- حل احترافي: Serverless Function على Vercel بإعداد SMTP لـ info@lcato.com.
