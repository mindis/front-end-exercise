# front-end-exercise
[View a live demo here.](http://afader.github.io/front-end-exercise/) Try resizing your browser window to test the
responsive layout.

This app fetches and renders some mock data from [an endpoint](/app/js/config.js). The images are rendered into a fluid
layout using [Masonry](http://masonry.desandro.com/).

## Design Choices:
* Dispaly all of the image in a single page.
* Scale images down to a maximum width.
* Masonry takes care of the fluid/responsive layout.

I tried using [lazyload](http://www.appelsiini.net/projects/lazyload) to make the page load faster, but it ended up
not playing nicely with Masonry. Also, the images load much slower in Safari than in Chrome, but I didn't have a chance to debug this.

## Components
* [App](/app/js/components/App.js) - top-level component, responsible for calling the endpoint and displaying messages
* [PostGrid](/app/js/components/PostGrid.js) - responsible for laying out Post components using Masonry
* [Post](/app/js/components/Post.js) - renders a post as a preloaded image + text
* [PreloadImage](/app/js/components/PreloadImage.js) - component that preloads an image, and displays a spinner while the image is being preloaded.

## Building
These commands will start a local webserver at [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) with automatic refresh.

    npm install
    gulp

