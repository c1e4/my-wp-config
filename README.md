# my-wp-config
Webpack config to build stuff with it. Works like Parcel, but output directory nice, clean and structurized. Not optimized for React/Vue. Yet.

Based on Colt Steele's Webpack guide, Brad Traversy's Webpack tutorial on youtube and other countless tutorials/guides.

**Goal was:**
1. To configure a Webpack that could be as easy as Parcel to use
2. Would allow extensive customization and great control over the process
3. Resulting build contents should be minimized/optimized as much as possible to improve loading speed
4. Usage of postcss (autoprefixer) that would make CSS code available for maximum browser compatibility
5. Usage of babel to translate JS ES5+ to legacy code for maximum browser compatibility
6. The output directory (dist) should be organized and have inner structure, similar to source directory (src)  

**WP and plugins config files**
```
.babelrc            //config for babel translator for JS (ES5+ -> legacy)
.gitignore          //files for git to ignore
.package.json       //npm stuff/dependencies/wp scenarios
.postcss.config.js  //file for postcss autoprefixer (CSS3 prefixes for maximum compatibility)
.webpack.common.js  //WP config that is shared between dev and prod scenarios
.webpack.dev.js     //config for development scenario
.webpack.prod.js    //config for production scenario
```

**Example of src and dist folders:**
```
src
└───assets            //put images, fonts, etc here
│   │   images/
│   │   fonts/
│   |   ...
|
|   pages/            //other that index html pages go here
|   scss/             //for sass parcials
|   js/               //additional JS files  
|
│   index.js          //JS entry point. Put all imports here
|   template.html     //HTML template
|   fav.svg           //favicon. nuff said
└───

dist
└───assets            //optimized and hashed
│   │   images/
│   │   fonts/
│   |   ...
|
|   pages/            //all other html pages go here (except index.html)
|   css/              //resulting css stylesheet. optimized, minified, with prefixes 
|   js/               //resulting JS file. optimized, minified, legacy-style
|
│   index.html         //resulting HTML file, optimized, minified
|   fav.svg           //favicon
└───
 ```

**Installation:** 
1. Clone this repo:
```console
git clone <URL> && cd .
```

2. Delete package-lock.json
<details>
  <summary>Why should I delete this essential part of a repo?</summary>
  
  For some undetermined reason, if not done it would break dependency installation process to node_modules folder. Probably due to dependency order or similar sht.
  You may skip it if you want, but trust me, you will have to do it again. In case you know how to fix it, PLZ submit pull request. 
</details>

```console
rm -rf ./package-lock.json
```

3. Install dependencies:
```console
npm i -D @babel/core @babel/preset-env autoprefixer babel-loader clean-webpack-plugin css-loader file-loader html-loader html-webpack-plugin image-minimizer-webpack-plugin imagemin imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo mini-css-extract-plugin node-sass css-minimizer-webpack-plugin postcss-loader sass-loader style-loader webpack webpack-bundle-analyzer webpack-cli webpack-dev-server webpack-merge sass semver-regex@4.0.1 trim-newlines@4.0.1 got@12.5.0
```

4. Reintroduce package-lock.json again
```console
curl -O "https://raw.githubusercontent.com/c1e4/website-structure-initializer/master/ws-initializer.sh"
```

5. Update packages. For example, with npm-check-updates:
```console
ncu -u
```
6. Install new versions:
```console
npm i
```
7. Happy coding!
<br>

**Start development process:**
```console
npm run dev 
```
**Build for production:**
```console
npm run build 
```

**Get usage report:**
```console
npm run report 
```
