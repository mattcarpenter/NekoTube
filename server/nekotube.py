from flask import Flask, render_template
from flask_restful import Api
from flask_restful_swagger import swagger
from .resources.search import SearchResource
from .resources.video import VideoResource

# create our little application :)
app = Flask(__name__)
app.config.from_object(__name__)
api = swagger.docs(Api(app), apiVersion='0.1')

api.add_resource(SearchResource, '/search')
api.add_resource(VideoResource, '/video')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/video/<string:video_id>')
def video(video_id):
    return render_template('index.html')

