# front-end-exercise
[View a live demo here.](http://afader.github.io/front-end-exercise/) Try resizing your browser window to test the
responsive layout.

This app fetches and renders some mock data from [an endpoint](/app/js/config.js). The images are rendered into a fluid
layout using [Masonry](http://masonry.desandro.com/).

Design choices:
* Dispaly all of the image in a single page.
* Scale images down to a maximum width.
* Masonry takes care of the fluid/responsive layout.

I tried using [lazyload](http://www.appelsiini.net/projects/lazyload) to make the page load faster, but it ended up
not playing nicely with Masonry.

# Building
These commands will start a local webserver at [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) with automatic refresh.

    npm install
    gulp

