var hostnameEndpoints = {
	'test.salesforce.com': 'https://test.salesforce.com/',
	'login.salesforce.com': 'https://login.salesforce.com/'
};
var hostnameTargetNames = {
	'test.salesforce.com': 'Sandbox',
	'login.salesforce.com': 'Production'
};

var endpoint = hostnameEndpoints[window.location.hostname];
var targetName = hostnameTargetNames[window.location.hostname];

var newContentStr = '<body style="display: block !important">' + //display reverses hide_at_start.css
'        <form id="mainForm" action="' + endpoint + '" name="login" method="post">' +
	'            <img src="' + chrome.extension.getURL('trineo-logo.png') + '"/> ' +
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
	'        </form>' +
	'    </body>';

$('html').html(newContentStr);