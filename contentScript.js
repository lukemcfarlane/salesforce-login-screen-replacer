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

var newContentStr = '<body style="display: block !important">' + //display reverses hide_at_start.css
'        <form id="mainForm" action="' + endpoint + '" name="login" method="post">' +
	'            <img src="' + chrome.extension.getURL('sf-logo.png') + '"/> ' +
	'            <h2>Salesforce Login: ' + targetName + '</h2>' +
	'            <div>' +
	'                <label for="un" class="smooth">Username:</label>' +
	'                <input type="email" id="username" name="un" class="smooth"/>' +
	'            </div>' +
	'            <div>' +
	'                <label for="pw" class="smooth">Password:</label>' +
	'                <input type="password" id="password" name="pw" class="smooth"/>' +
	'            </div>' +
	'            <button type="submit" class="smooth btn-small" style="background-color: DimGray; text-align: right;">Log in</button>' +
    '            <a style="display: block; margin-top: 10px;" href="javascript:void(0)" id="revert-link">Go back to standard login page</a>' +
	'        </form>' +
	'    </body>';


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