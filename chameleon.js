/**
 * ChameleonJS - Error Logger
 * Logging javascript errors and report them
 *
 * @version 1.0
 * @license MIT license
 * @author https://github.com/Noth86
 */

//---------------------CONFIGURABLE SETTINGS---------------------
var parameters = { serverUrlLogger : 'www.fakeurl.com/fakeUrl' };
//---------------------------------------------------------------

var chameleonjs = (function (parameters) {
    'use strict';
    
    var exports = {},
        browser = '',
        protocol = window.location.protocol === 'https:' ? 'https://' : 'http://',
        urlToCall = protocol + parameters.serverUrlLogger.replace('https://', '').replace('http://', '');
        
    
    function getBrowserType() {
        var ua = navigator.userAgent,
            uaRegExp = ua.match(/(opera|chrome|safari|firefox|msie|trident)\/(\S+)/i);
        
        if (uaRegExp) {
            return uaRegExp[0];
        }
        
        return 'UndefinedBrowser';
    }
    
    function reportError(message, file, line, column, error) {
        var request = new XMLHttpRequest(),
            browser = getBrowserType(),
            data =  'browser=' + browser + '&message=' + message + '&file=' + file +
                    '&line=' + line + '&column=' + column + '&error=' + error;
        
        request.open('POST', urlToCall, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(data);
    }

    exports.init = function () {
        window.onerror = function (message, file, line, column, error) {
            reportError(message, file, line, column, error);
            return true;
        };
    };
    
    return exports;
}(parameters));
chameleonjs.init();
