# Esports Analytics Platform

A modern, responsive esports analytics website featuring news, schedules, teams, and player information.

## Features

- 📰 Latest esports news and updates
- 📅 Match schedules (Live, Upcoming, Past)
- 👥 Teams and player profiles
- 📊 Match summaries and statistics
- 📱 Fully responsive mobile design
- 🎨 Modern UI with smooth animations

## GitHub Pages Setup

To deploy this website on GitHub Pages:

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under **Source**, select **main** branch
   - Click **Save**
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

3. **Important Notes for GitHub Pages**
   - All image paths are relative (`assets/...`) and will work correctly
   - Make sure the `assets` folder is committed to the repository
   - The site will be served from the root directory
   - If your repository name is not the root, update paths accordingly

## File Structure

```
.
├── index.html          # Home page
├── news.html           # News page
├── schedules.html       # Schedules page
├── teams.html          # Teams listing page
├── team-detail.html    # Individual team detail page
├── player-detail.html  # Individual player detail page
├── about.html          # About page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── news_card_1.png
│   ├── news_card_2.png
│   ├── news_card_3.png
│   ├── news_card_4.png
│   ├── news_hero.png
│   ├── hero_1.png
│   ├── hero_2.png
│   ├── hero_3.png
│   ├── latest_video.png
│   ├── about_bg.png
│   └── bg_texture.png
└── README.md           # This file
```

## Image Paths

All images use relative paths starting with `assets/`. This ensures they work correctly on GitHub Pages:

- HTML: `<img src="assets/news_card_1.png" alt="News">`
- CSS: `background-image: url('assets/bg_texture.png');`
- JavaScript: `image: 'assets/hero_1.png'`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

To run locally:

1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

## Features Implemented

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dynamic animations and transitions
- ✅ Match summary modals
- ✅ Team and player detail pages
- ✅ Mobile-friendly navigation
- ✅ Image lazy loading
- ✅ Form validation
- ✅ Smooth scrolling

## License

This project is for educational purposes.

## Contributing

Feel free to submit issues or pull requests for improvements.

