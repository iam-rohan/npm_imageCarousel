# Carousel Component

A lightweight and customizable image carousel component for your web projects. This carousel component supports navigation through images via buttons and indicator dots. It is implemented in plain JavaScript and requires the accompanying CSS for proper styling.

## Features

- Navigate through images using previous and next buttons.
- Click on indicator dots to jump to a specific slide.
- Automatically advances to the next slide every 5 seconds.

## Installation

To use the Carousel component, you need to include the JavaScript and CSS files in your project. Follow these steps:

1. **Install the Package:**

   If you're using npm, you can install the package via:

   ```bash
   npm install carousel-component-rohan
   ```

2. **Include the JavaScript and CSS Files:**

   After installation, you need to include the `carousel.js` and `carousel.css` files in your project. Make sure to add these files to your HTML.

   ```html
   <link rel="stylesheet" href="path/to/node_modules/carousel-component-rohan/carousel.css" />
   <script src="path/to/node_modules/carousel-component-rohan/carousel.js" type="module"></script>
   ```

   Alternatively, if you are using a build tool, you can import the CSS and JS directly into your project's entry file:

   ```js
   import "carousel-component-rohan/carousel.css";
   import Carousel from "carousel-component-rohan/carousel.js";
   ```

## Usage

Add the following HTML structure to your page:

```html
<div class="carousel-container">
  <div class="carousel-wrapper">
    <img src="image1.jpg" class="carousel-image" />
    <img src="image2.jpg" class="carousel-image" />
    <img src="image3.jpg" class="carousel-image" />
    <!-- Add more images as needed -->
  </div>
  <button class="carousel-control prev">Prev</button>
  <button class="carousel-control next">Next</button>
</div>
```

Initialize the carousel in your JavaScript:

```js
import Carousel from "carousel-component-rohan/carousel.js";

const carousel = new Carousel(".carousel-container", ".carousel-image");
```

## Styling

To ensure that the carousel is displayed correctly, you must include the CSS file provided with this package.
The CSS file sets up the basic layout and styling for the carousel component. Without it, the carousel may not appear as intended.
Or you can just copy and paste the stylings into your own stylesheet and then no need to link the given stylesheet to your project.

## API

### Constructor: `Carousel(mainContainer, images)`

- `mainContainer` (string): Selector for the carousel container.
- `images` (string): Selector for the images inside the carousel.

## Customization

For now, this component comes with default styling. Future updates might include customization options.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request.
