# from crypt import methods
from colorama import Cursor
from flask import Flask, render_template, globals, request
from flask_cors import CORS
import logging
import mysql.connector as star
import datetime
app = Flask(__name__)

CORS(app)


@app.before_request
def before():
    print("est connection")
    globals.conn = star.connect(host='localhost', user='root',
                                passwd='Mayac129@nk', database='maj')
    globals.cursor = globals.conn.cursor()


@app.teardown_request
def teardown(exception):
    print("Teardown")
    globals.conn.close()
    globals.cursor.close()
    print("close db")


@app.route("/", methods=["GET"])
def home():
    return "Hello"


@app.route("/api/recomms", methods=["GET"])
def get_recomms():
    try:
        query = "SELECT * from recomms WHERE onShowcase=True;"
        globals.cursor.execute(query)
        recomms = globals.cursor.fetchall()
        results = []
        for recomm in recomms:
            recomm_obj = {
                "id": recomm[0],
                "name": recomm[1],
                # "email": recomm[2],
                # "company": recomm[3],
                "desig": recomm[4],
                "recom": recomm[5],
            }
            results.append(recomm_obj)
        return {"isSucessfull": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSucessfull": False, "results": []}


@app.route("/api/skills", methods=["GET"])
def get_skills():
    try:
        query = "SELECT * from skills;"
        globals.cursor.execute(query)
        skills = globals.cursor.fetchall()
        results = []
        for skill in skills:
            skill_obj = {
                "id": skill[0],
                "imageUrl": skill[1],  # name
                "name": skill[2],  # imageUrl
                "starsTotal": skill[3],
                "starsActive": skill[4],
                "color": skill[5],
            }
            results.append(skill_obj)
        return {"isSucessfull": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSucessfull": False, "results": []}


@app.route("/api/projects", methods=["GET"])
def projs():
    try:
        query = "SELECT * from projects;"
        globals.cursor.execute(query)
        projects = globals.cursor.fetchall()
        results = []
        for project in projects:
            project_obj = {
                "id": project[0],  # id
                "imageURL": project[1],  # title
                "exert": project[2],  # exert
                "body": project[3],  # imageURL
                "title": project[6],  # body
            }
            results.append(project_obj)
        return {"isSucessfull": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSucessfull": False, "results": []}


@app.route("/api/blogs", methods=["GET"])
def bloob():
    try:
        query = "SELECT * from blogs;"
        globals.cursor.execute(query)
        blogs = globals.cursor.fetchall()
        results = []
        for blog in blogs:
            blog_obj = {
                "id": blog[0],
                "imageURL": blog[1],
                "exert": blog[2],
                "title": blog[3],
                "body": blog[4],
            }
            results.append(blog_obj)
            return {"isSucessfull": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSucessfull": False, "results": []}


@app.route("/api/project", methods=["POST"])
def add_project():
    try:
        project = request.json
        print(project)
        # SQL query
        query = "INSERT INTO projects VALUES(%s ,%s , %s ,%s ,%s,%s,%s);"
        globals.cursor.execute(query, [project["id"], project["imageURL"], project["exert"],
                               project["body"],  True, datetime.datetime.now(), project["title"]])
        return {"isSucessfull": True}
    except Exception as e:
        logging.error(e)
        return {"isSucessfull": False}


@app.route("/api/blog", methods=["POST"])
def add_blog():
    try:
        blog = request.json
        print(blog)
        # SQL query
        query = "INSERT INTO projects VALUES(%s ,%s , %s ,%s ,%s,%s,%s);"
        globals.cursor.execute(query, [blog["id"], blog["imageURL"], blog["exert"],
                               blog["title"], blog["body"],  True, datetime.datetime.now()])
        return {"isSucessfull": True}
    except Exception as e:
        logging.error(e)
        return {"isSucessfull": False}
