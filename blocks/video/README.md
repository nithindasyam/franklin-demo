# Video Block

A performance-optimized video component for Franklin sites that uses placeholder images to maintain perfect Lighthouse scores by lazy-loading videos only when needed.

## How to Use

### 1. Create a Table in Google Docs

Create a simple 2-column table:
- **Left column**: Video thumbnail image
- **Right column**: Video URL (YouTube, Vimeo, or direct video file)

### 2. Table Structure Example

| ![Video Thumbnail](thumbnail.jpg) | https://www.youtube.com/watch?v=dQw4w9WgXcQ |

### 3. Apply the Block Style

1. Select your table in Google Docs
2. Apply the "Video" block style
3. The table transforms into an interactive video player with thumbnail

## Features

- ✅ **Perfect Lighthouse Score**: Videos only load when clicked or in viewport
- ✅ **Optimized Thumbnails**: Images are automatically optimized for web
- ✅ **Multi-Platform Support**: YouTube, Vimeo, and direct video files
- ✅ **Lazy Loading**: Uses Intersection Observer for performance
- ✅ **Responsive**: 16:9 aspect ratio maintained across devices
- ✅ **Accessible**: Keyboard navigation and screen reader support
- ✅ **Autoplay Support**: Optional autoplay with reduced motion respect

## Supported Video Platforms

### YouTube
- **Standard**: `https://www.youtube.com/watch?v=VIDEO_ID`
- **Short URL**: `https://youtu.be/VIDEO_ID`
- **Embedding**: Automatically converts to optimized iframe embed

### Vimeo
- **Format**: `https://vimeo.com/VIDEO_ID`
- **Embedding**: Uses Vimeo player with autoplay controls

### Direct Video Files
- **Formats**: MP4, WebM, OGV
- **Example**: `https://example.com/video.mp4`
- **Player**: HTML5 video element with controls

## Usage Variations

### Basic Video (Most Common)
```
| [Thumbnail Image] | https://www.youtube.com/watch?v=VIDEO_ID |
```

### Autoplay Video
Add the "autoplay" class in Google Docs formatting:
```
| [Thumbnail Image] | https://www.youtube.com/watch?v=VIDEO_ID |
```
*Apply "Video Autoplay" style or add autoplay class*

## Content Guidelines

### Thumbnail Images
- **Aspect Ratio**: 16:9 recommended (1280x720px ideal)
- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution (will be optimized automatically)
- **Alt Text**: Descriptive text for accessibility

### Video URLs
- Use the direct video page URL, not embed URLs
- Ensure videos are publicly accessible
- Test URLs before publishing

## Performance Benefits

### Lighthouse Optimization
- **Zero Impact**: No video loading until user interaction
- **Image Optimization**: Thumbnails served as WebP with responsive sizes
- **Lazy Loading**: Intersection Observer prevents unnecessary loading
- **Layout Stability**: Reserved aspect ratio prevents layout shift

### Loading Behavior
1. **Initial Load**: Only thumbnail image loads
2. **User Interaction**: Video replaces thumbnail on click
3. **Autoplay Mode**: Video loads when scrolled into view
4. **Reduced Motion**: Respects user's motion preferences

## Accessibility Features

- **Play Button**: Clear visual indicator with proper ARIA labels
- **Keyboard Support**: Enter/Space key activation
- **Screen Readers**: Proper labeling and focus management
- **Reduced Motion**: Autoplay disabled for users who prefer less motion
- **High Contrast**: Button styling adapts to system preferences

## Technical Details

### CSS Classes
- `.video`: Main block container
- `.video-placeholder`: Thumbnail container
- `.video-placeholder-play`: Play button overlay
- `.video.autoplay`: Enables autoplay behavior

### Data Attributes
- `data-embed-loaded`: Tracks loading state
- Used for CSS visibility controls

### Intersection Observer
- Monitors when video enters viewport
- Triggers loading for autoplay videos
- Improves performance on pages with multiple videos

## Examples

### Single Video
```html
<!-- Generated HTML structure -->
<div class="video block">
  <div class="video-placeholder">
    <picture>
      <img src="thumbnail.jpg" alt="Video description">
    </picture>
    <div class="video-placeholder-play">
      <button type="button" title="Play"></button>
    </div>
  </div>
</div>
```

### Google Docs Table
| Column 1 (Image) | Column 2 (Link) |
|------------------|-----------------|
| ![My Video Thumbnail](path/to/image.jpg) | https://www.youtube.com/watch?v=abc123 |

## Best Practices

1. **High-Quality Thumbnails**: Use clear, engaging images
2. **Consistent Aspect Ratio**: Stick to 16:9 for uniform appearance
3. **Descriptive Alt Text**: Improve SEO and accessibility
4. **Test Video Links**: Verify playback before publishing
5. **Consider Autoplay**: Use sparingly and respect user preferences
6. **Mobile Optimization**: Ensure thumbnails work on small screens

## Troubleshooting

### Video Not Loading
- Check if video URL is correct and publicly accessible
- Verify the video isn't region-locked or private
- Test the URL directly in a browser

### Thumbnail Issues
- Ensure image is properly uploaded to Google Docs
- Check image format compatibility (JPG, PNG, WebP)
- Verify image isn't corrupted or too large

### Play Button Not Appearing
- Confirm the table has exactly 2 columns
- Check that "Video" block style is applied correctly
- Ensure JavaScript is loading properly

### Autoplay Not Working
- Verify "Video Autoplay" style is applied
- Check browser autoplay policies (most require muted videos)
- Ensure user hasn't disabled autoplay in browser settings 