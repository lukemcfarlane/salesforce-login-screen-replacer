var hostnameEndpoints = {
  'test.salesforce.com' : 'https://test.salesforce.com/',
  'login.salesforce.com' : 'https://login.salesforce.com/'
};

var endpoint = hostnameEndpoints[window.location.hostname];

var newContentStr = '<body style="display: block !important">' + //display reverses hide_at_start.css
	'        <form action="' + endpoint + '" name="login" method="post">' +
	'            <div>' +
	'                <label for="un">Username:</label>' +
	'                <input type="email" id="username" name="un"/>' +
	'            </div>' +
	'            <div>' +
	'                <label for="pw">Password:</label>' +
	'                <input type="password" id="password" name="pw"/>' +
	'            </div>' +
	'            <button type="submit">Log in</button>' +
	'        </form>' +
	'    </body>';

$('html').html(newContentStr);
