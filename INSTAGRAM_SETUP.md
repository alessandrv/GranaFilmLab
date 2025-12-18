# Instagram Feed Setup

## Easiest Free Option: Using Your Existing API Route

You already have an Instagram API route set up at `app/api/instagram/route.ts`! Let's use it.

### Option 1: Free & Simple - SnapWidget (Recommended for beginners)

1. Go to [SnapWidget.com](https://snapwidget.com/widgets)
2. Choose "Grid" widget (free)
3. Enter your Instagram username: `granafilmlab`
4. Customize to match dark theme
5. Copy the embed code
6. Paste into `components/Gallery.tsx`

**Pros:** No coding, instant setup, free for basic grid
**Cons:** Limited customization, shows SnapWidget branding on free plan

### Option 2: Instagram Basic Display API (What you have set up)

Your existing setup uses the Instagram Basic Display API through the route at `app/api/instagram/route.ts`.

**Next Steps:**
1. Make sure you have your Instagram Access Token set up
2. Update the Gallery component to fetch from `/api/instagram`
3. Display the returned posts in the grid

This is what I'll implement for you - it's free and you have more control!

### Option 3: Juicer.io

Free plan includes 1 social feed with 100 posts.
- Sign up at Juicer.io
- Connect Instagram
- Embed their widget

**Recommendation:** Use your existing API route (Option 2) - it's already set up!
