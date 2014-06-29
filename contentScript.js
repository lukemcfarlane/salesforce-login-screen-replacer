$('head').append($('<script src="https://code.jquery.com/jquery-git2.min.js"></script>'))
$('[src$="/jslibrary/LoginHint.js"]').remove()
$('#chooser').remove();
$('#theloginform').show();

var newContentStr = '<body>' +
	'        <form action="https://test.salesforce.com/" name="login" method="post">' +
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

$('html body').replaceWith(newContentStr);