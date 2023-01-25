from flask import Flask, render_template, request, url_for

app = Flask(__name__)

items = [[1, 2, 3], ["a", "b", "c"]]

@app.route("/")
def default():
	return  render_template("theTable.html", items=items)

@app.route("/new_item", methods=["POST"])
def add():
	print("inside new_item route")
	items.append([request.form["one"], request.form["two"], request.form["three"]])
	return "OK!"
				
if __name__ == "__main__":
	app.run()

