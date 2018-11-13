# simple-theme
A simple, light-weight Hexo theme. Featuring syntax highlighting for code samples, and a clean concise desktop and mobile view.

## Features
- mobile-friendly
- configurable css variables
- syntax highlighting (Thanks to [highlight.js](https://highlightjs.org/))

## Installation
### First, set up your Hexo site like you normally would
Instructions [here](https://hexo.io/docs/setup).
### Now add this theme to your site
By running this command

```git clone https://github.com/benTheBike/simple-theme.git $PATH_TO_YOUR_SITE$/themes/simple-theme```
### Set the theme
Open your site's ```_config.yml``` (*NOT* the theme's ```_config.yml```). Change ```theme```'s value (by default it is ```landscape```), to ```simple-theme```). Delete the ```landscape``` theme folder.
### Generate and view your site
Run the following Hexo commands
```hexo clean```

```hexo generate```

```hexo serve```

## Configuration
View ```_config.yml``` and ```source/css/styles.css```

## Page types
### Post
```hexo new post_name```
### Page
```hexo new page page_name```
### Search
Add your Google Custom Search embed code in ```simple-theme/_config.yml``` under ```gsce_cx```.
To create:

```hexo new page search```

In the front-matter, add ```layout: search```.

## @TODO
- add comment system
- download page layouts
