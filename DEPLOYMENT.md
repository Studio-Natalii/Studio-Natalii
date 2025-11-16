# GitHub Pages Deployment Guide for Studio Natalii

## Quick Setup

### Step 1: Create GitHub Repository

1. Go to GitHub and create a new repository named `studio-natalii`
2. Make it public (required for free GitHub Pages)

### Step 2: Push Code to GitHub

```bash
cd /workspace/shadcn-ui
git init
git add .
git commit -m "Initial commit: Studio Natalii website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/studio-natalii.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The workflow will automatically run and deploy your site

### Step 4: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/studio-natalii/
```

## Important Notes

### If You Use a Different Repository Name

If your repository is named differently (e.g., `my-salon`), update `vite.config.ts`:

```typescript
base: mode === 'production' ? '/my-salon/' : '/',
```

Then rebuild:
```bash
pnpm run build
git add .
git commit -m "Update base path"
git push
```

### Custom Domain (Optional)

To use a custom domain like `studionatalii.pl`:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   studionatalii.pl
   ```

2. Update `vite.config.ts`:
   ```typescript
   base: mode === 'production' ? '/' : '/',
   ```

3. Configure DNS records with your domain provider:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

4. In GitHub Settings → Pages, enter your custom domain

## Troubleshooting

### Assets Not Loading

If images or CSS aren't loading:
- Check that the `base` path in `vite.config.ts` matches your repository name
- Ensure all asset paths use relative paths (starting with `/assets/`)

### 404 Errors on Refresh

GitHub Pages doesn't support client-side routing by default. The current setup uses hash routing which works correctly.

### Build Fails

Check the Actions tab in your GitHub repository for error details. Common issues:
- Node version mismatch (ensure Node 20+ is used)
- Missing dependencies (run `pnpm install` locally first)

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
pnpm run build

# The dist folder contains your website
# Upload it to any static hosting service
```

## Updating the Website

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Actions will automatically rebuild and redeploy your site.

## Performance Optimization

The build is configured with:
- Code splitting for React and UI vendors
- Gzip compression
- Asset optimization
- Total size: ~170 KB (gzipped)

## Support

For issues or questions:
- Check GitHub Actions logs for deployment errors
- Verify the base path configuration
- Ensure all dependencies are installed