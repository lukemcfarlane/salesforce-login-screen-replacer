// Get URL Parameters
var url = document.location.href;
 
// if url ends with '#', trim
if(url.lastIndexOf('#') == url.length - 1) {
    url = url.substr(0, 91); 
}
 
var i = url.indexOf('?');
url = url.substr(i+1, url.length);
var tokens = url.split('&');
var params = {};
var numParams = 0;
for(var j = 0; j < tokens.length; j++) {
    var token = tokens[j];
    var keyVal = token.split('=');
    var param = {
        key: keyVal[0],
        val: keyVal[1]
    };
    params[keyVal[0]] = keyVal[1];
    numParams++;
}


var hostnameTargetNames = {
	'test.salesforce.com': 'Sandbox',
	'login.salesforce.com': 'Production'
};

var endpoint = window.location.href;
var targetName = hostnameTargetNames[window.location.hostname];

var html = new EJS({
    url: chrome.extension.getURL('loginTemplate.html')
}).render({
    endpoint: endpoint,
    targetName: targetName,
    logoUrl: chrome.extension.getURL('sf-logo.png')
});

replaceHTMLContent(html);

function replaceHTMLContent(newContentStr) {
    if(params.replacePage !== 'false') {
        $('html').html(newContentStr);
    } else {
        $(document).ready(function() {
            $('body').attr('style', 'display: block !important')
        });
    }

    $('#revert-link').click(function() {
        var hasParams = location.search !== '' ;
        location.href += (hasParams ? '&' : '?') + 
                        'replacePage=false';
    });
}