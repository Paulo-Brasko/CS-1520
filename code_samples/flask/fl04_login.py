from flask import Flask, request, abort, url_for, redirect

app = Flask(__name__)

users = {"alice": "qwert", "bob": "asdfg", "charlie": "zxcvb"}

loginPage = """<!DOCTYPE html>
<html>
	<head>
		<title>Basic form</title>
	</head>
	<body>
		<form action="{}" method="post">
			Username:  <input type="text" name="user" />
			<br />
			Password:  <input type="text" name="pass" />
			<br />
			<input type="submit" value="submit" />
		</form>
	</body>
</html>
"""

curProfile = """<!DOCTYPE html>
<html>
	<head>
		<title>Your profile!</title>
	</head>
	<body>
		Welcome back!
	</body>
</html>
"""

otherProfile = """<!DOCTYPE html>
<html>
	<head>
		<title>{0}'s profile!</title>
	</head>
	<body>
		This is {0}'s profile page.
	</body>
</html>
"""


@app.route("/")
def default():
	print("redirecting to login_controller for the first time")
	return redirect(url_for("login_controller"))


@app.route("/login/")
def login_controller():
	print("going to show the login page")
	return loginPage.format(url_for("profile"))


@app.route("/profile/", methods=["GET", "POST"])
@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username=None):
    print("inside the profile function")
    if request.method == "POST":
        print("post request")
        print(request.form)	

        if "user" in request.form and "pass" in request.form:
            print("checking if the user is one of our clients")	
            if request.form["user"] in users:
                print("user is one of our clients, checking password...")	
                if users[request.form["user"]] == request.form["pass"]:
                    print("password is correct")
                    return curProfile
                else:
                    print("password is incorrect")
                    abort(401)
    else:
        print("GET request")
        print("checking if the user is one of our clients")
        if username and username in users:
            print("user is one of our clients, redirecting page to otherProfile...")
            return otherProfile.format(username)
        else:
            print("user is NOT one of our clients, 404 page...")
            abort(404)
	
if __name__ == "__main__":
	app.run()
