#ChameleonJS

ChameleonJS is a minimalist JS server-side errors logger.

## Usage

To use ChamaleonJS, download it and reference the file from your static files folder in the script tag.
Copy and paste the script tag into every web page you want to track of javascript errors. Paste it immediately after the opening <head> tag.

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

## Test Dependencies

- karma@0.12.36
- karma-cli@0.0.4
- karma-jasmine@0.3.5
- karma-phantomjs-launcher@0.2.0
- jasmine-core@2.3.4
- phantomjs@1.9.17

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
