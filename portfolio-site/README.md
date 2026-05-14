# Your Portfolio Site — Cloudflare Pages Setup Guide

A clean, minimal personal portfolio site for science communication, photography, and freelance work.

---

## Files in this folder

```
portfolio-site/
├── index.html       ← Your main website file
├── style.css        ← All the design and layout
├── script.js        ← Navigation behaviour
├── assets/          ← Put ALL your photos in here
│   ├── film-01.jpg
│   ├── film-02.jpg
│   ... (up to film-06.jpg)
│   ├── digital-01.jpg
│   ... (up to digital-04.jpg)
└── README.md        ← This file
```

---

## Step 1 — Personalise the site before deploying

Open `index.html` in any text editor (Notepad, TextEdit, or VS Code if you have it).

Search for and replace the following placeholders:

| Find this              | Replace with                        |
|------------------------|-------------------------------------|
| `Your Name`            | Your actual name                    |
| `your@email.com`       | Your email address                  |
| `yourhandle`           | Your LinkedIn and Instagram handles |
| `University`           | Your actual university name         |

Also update the hero bio and About text to match your own words — the placeholder text is a starting point.

---

## Step 2 — Add your photos

Put your photos in the `assets/` folder with these exact filenames:

**Film photos:** `film-01.jpg` through `film-06.jpg`
**Digital photos:** `digital-01.jpg` through `digital-04.jpg`

Tips:
- Resize images to max 1500px wide before uploading (keeps the site fast)
- JPG format is fine; aim for under 500KB per image
- If you have fewer photos, the empty cells will just show a placeholder — that's fine

---

## Step 3 — Deploy to Cloudflare Pages

### Option A — Drag and drop (easiest, no GitHub needed)

1. Go to https://dash.cloudflare.com
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application** → **Pages** → **Upload assets**
4. Give your project a name (e.g. `my-portfolio`)
5. Drag and drop the entire `portfolio-site` folder
6. Click **Deploy site**

Cloudflare will give you a free URL like `my-portfolio.pages.dev` — your site is live.

### Option B — Via GitHub (recommended for easy future updates)

1. Create a free GitHub account at github.com if you don't have one
2. Create a new repository called `portfolio`
3. Upload all your files to the repository
4. In Cloudflare: **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
5. Select your GitHub repo
6. Build settings: leave everything blank (no build command needed — it's plain HTML)
7. Click **Save and Deploy**

Benefit: whenever you update a file on GitHub, Cloudflare automatically re-deploys.

---

## Step 4 — Connect your custom domain

1. In Cloudflare Pages, go to your project → **Custom domains** → **Set up a custom domain**
2. Type your domain name (e.g. `yourname.com`)
3. Since your domain is already on Cloudflare, it will automatically add the DNS record
4. Wait 1–2 minutes and your site is live on your own domain

---

## Updating the site later

### To add or change writing entries

Open `index.html`, find the writing section, and copy-paste one of the existing `<article>` blocks. Edit the text inside it.

### To add more photos

Just add more image files to the `assets/` folder with the right filenames, then re-upload to Cloudflare.

### To change your bio or about text

Everything is in `index.html` — just search for the text you want to change and edit it directly.

---

## Customising colours

Open `style.css` and look for the `:root` section near the top:

```css
:root {
  --accent:  #2a5c45;   /* The green accent colour — change this to any hex colour */
  --black:   #0e0e0d;
  --white:   #faf9f7;
  ...
}
```

Change `--accent` to any colour you like. A few nice options:
- Deep navy: `#1a2c4e`
- Warm terracotta: `#8c3d24`
- Slate: `#3a4a5c`

---

## Need help?

If anything isn't working, the most common issues are:

- **Photos not showing**: check the filename matches exactly (e.g. `film-01.jpg` not `Film-01.JPG`)
- **Site looks broken**: make sure `style.css` and `script.js` are in the same folder as `index.html`
- **Domain not connecting**: wait 5–10 minutes and try again — DNS changes take a little time
