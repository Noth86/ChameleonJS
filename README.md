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

## Contributors welcome

Contributors are welcome, there is a lot of ideas and new features to implement in the ChameleonJS project.
Feel free to ask any questions or open any issues.

Enjoy it!
