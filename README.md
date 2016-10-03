# ChameleonJS
[![Build Status](https://travis-ci.org/Noth86/ChameleonJS.svg?branch=master)](https://travis-ci.org/Noth86/ChameleonJS.svg?branch=master)


ChameleonJS is a minimalist JS server-side errors logger.

## Usage

To use ChamaleonJS, download it and reference the file from your static files folder in the script tag.
Copy and paste the script tag into every web page you want to track the javascript errors. Paste it immediately after the opening <head> tag.

```html
<head>
    <script src="chameleon.min.js"></script>
    ...other tags...
</head>
```

## Configuration

Edit your chameleon.js file to add your server-side url to track the errors.
Don't edit other script parts.

```javascript
//---------------------CONFIGURABLE SETTINGS---------------------
var parameters = { serverUrlLogger : 'www.fake.url.com/fakeUrl' };
//---------------------------------------------------------------
```

## Compatibility

IE7+, Firefox, Chrome, Safari, and Opera.

## Run Test

```bash
- npm install
- ./node_modules/karma/bin/karma start test/karma.config.js --single-run
```

## Server Side Logger

In the server folder there are some example scripts to catch errors and write them in the syslog log file.

Example PHP:
```
Jun 19 15:51:38 vps apache2: [ChameleonJS] Browser: Chrome/43.0.2357.124 Message: Uncaught SyntaxError: Unexpected token ; File: file://ChameleonJS/demo/index.html Line: 8 Column: 20 Error: SyntaxError: Unexpected token ;
```

Example GO:
```
Jun 29 22:43:14 noth logger[38362]: 2015/06/29 22:43:14 Browser: Chrome/43.0.2357.124 Message: Uncaught SyntaxError: Unexpected token ; File: file://ChameleonJS/demo/index.html Line: 8 Column: 20 Error: SyntaxError: Unexpected token ;
```

## Contributors welcome

Contributors are welcome, there is a lot of ideas and new features to implement in the ChameleonJS project.
Feel free to ask any questions or open any issues.

Enjoy it!
