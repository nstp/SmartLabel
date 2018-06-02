from flask import Flask

app = Flask(__name__)

@app.route("/sl/")
def hello():
    return "I am Smart Label"

if __name__ == "__main__":
    app.run(host="0.0.0.0")