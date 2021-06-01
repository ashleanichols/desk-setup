![Image of Desk Setup Project](https://github.com/Th3Wall/assets-cdn/blob/main/DeskSetup/DeskSetup_readme_V2.png)

# Desk Setup

An idea born from a friend of mine and his website re-branding in which he wanted to show his desk setup. So I came up with this. Enjoy! 😉

## 🎯 About

I've configured an environment that handles Pug/SCSS/JS in order to work as quick as possible on this tool that I will adopt also for my personal website in the near future (🤫 Shhht! Spoiler!)

### ▶️ Demo

[https://desksetup.vercel.app/](https://desksetup.vercel.app/)

## :books: How to

In order to add/remove or change the position of the hotspots, you can follow these easy steps:

1. Go inside `/src/views` folder;
2. In this folder you can see the `/mixins` folder which contains `hotspot.pug` that is responsible for the HTML structure of the single hotspot.
It accepts a **title**, the **content** of the hotspot and the classname responsible for the **placement of the hotspot's content** (ie: "placed-left").
In order to determine where to display the hotspot content div you can use the following class names:
   - `placed-left`
   - `placed-right`
   - `placed-top`
   - `placed-bottom`
3. Inside views folder, along with the mixin one, you can find the `/pages` folder that contains `desk.pug`, the content of the page;
4. `desk.pug` contains n `+hotspot` mixins based on user preferences (ie: in this demo I use 9 hotspots);
5. If you want to add new hotspots, you can do that by adding as many hotspots you want inside the `desk.pug`.
6. Then, inside `/src/scss/index.scss` file, under `desk__hotspot` class name, you can find the selectors `nth-of-type(n)` which determines every sigle hotspot placement inside the image.
7. Add a new one for each hotspot you will add.

## :sparkles: Features

:heavy_check_mark: Interactive and configurable hotspots<br/>

## :rocket: Technologies

-   [Pug](https://pugjs.org/)
-   [SCSS](https://sass-lang.com/)
-   [jQuery](https://jquery.com/)
-   [Gulp](https://gulpjs.com/)

## Gulp plugins

-   [Autoprefixer](https://github.com/postcss/autoprefixer) Write CSS rules without vendor prefixes.
-   [BrowserSync](https://github.com/browsersync/browser-sync) Keep multiple browsers in sync after file save.
-   [Concat](https://github.com/contra/gulp-concat) Concatenates .js files into bundle.js.
-   [Imagemin](https://github.com/sindresorhus/gulp-imagemin) Minify PNG, JPEG, GIF and SVG images.
-   [Plumber](https://github.com/floatdrop/gulp-plumber) Prevent pipe breaking caused by errors from gulp plugins.
-   [Pug](https://github.com/pugjs/gulp-pug) Compile your Pug templates into HTML.
-   [SASS](https://github.com/dlmanning/gulp-sass) Compile your SASS or SCSS into CSS.
