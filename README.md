# Academic Homepage — GitHub Pages

A traditional, responsive academic personal homepage built with plain HTML, CSS, and JavaScript. No build tools, package installation, or server are required.

## 1. Create your GitHub Pages repository

1. Sign in to GitHub.
2. Create a **public** repository named exactly `YOUR-USERNAME.github.io`.
3. Upload the contents of this folder to the repository root (the `index.html` file must be at the root).
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. After deployment, visit `https://YOUR-USERNAME.github.io`.

## 2. Personalize the homepage

Open `index.html` and replace the sample content:

- `Your Name`, position, department, and university
- Profile and social links
- About Me and Research Interests
- Publications: title, authors, venue, year, abstract, PDF/code/project URLs
- Projects, education, awards, and contact information

Search for square-bracket placeholders such as `[Year]`, `[Project Title]`, and `[Organization]`.

## 3. Add your profile photo

Replace `assets/images/profile-placeholder.svg` with your own image, or upload a photo named `profile.jpg` to `assets/images/` and update the image path in `index.html`:

```html
<img class="portrait" src="assets/images/profile.jpg" alt="Your Name">
```

A square image (at least 400 × 400 px) works best.

## 4. Add publication links

In each publication entry, replace the `href="#"` values with real URLs. Remove links that do not apply. For example:

```html
<p class="pub-links">
  <a href="https://doi.org/..." target="_blank" rel="noopener">DOI</a>
  <a href="https://github.com/username/project" target="_blank" rel="noopener">Code</a>
  <a href="papers/paper.pdf">PDF</a>
</p>
```

For PDFs, create a `papers/` folder in the repository and upload the paper PDF there. Only upload papers you are permitted to share.

## 5. Customize colors

Edit the CSS variables at the top of `assets/css/style.css`. The current design uses a restrained navy-blue academic palette.

## Notes

- This is a static website. It does not collect visitor information or require a backend.
- Keep the email and contact details you publish in mind; they will be publicly visible.
- GitHub Pages may take a few minutes to publish changes.
