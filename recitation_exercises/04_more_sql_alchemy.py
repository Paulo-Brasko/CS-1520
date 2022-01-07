from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.expression import func

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
# feature we don't need that is being deprecated upstream by sqlaclchemy
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


'''
This exercise is very similar to last weeks exercise but we will focus
more on the many to many relationships among different tables (models). 
'''


'''
Consider the following schema:
	Forest(forest_no, forest_name, area)
	State(state_name, area)
	Coverage(entry_no, forest_no, state_name, area)
	Worker(ssn, name, employing_state)

A forest can span more than one state and a worker can work in multiple
forests (notice how both of these define a many to many relationship)
'''


'''
(1) create the tables/models, make sure you set the primary and 
    foreign keys. Look at the '06_db.txt' file to find out
    what the types of each column should be. I only used either
    an integer and a string
'''

'''
(2) populate the tables you created above, you can find the data for 
	the tables in the '06_db.txt' file. The delimiter for an entry/record 
	is ',' and for the tables it is an empty line ('\n'). Remeber to 
	drop all any previosuly created tables to avoid any problems
'''


'''
(3) As a warmup, find the name(s) of all workers that are employed by the largest state
'''

'''
(4) Find the names of all workers that work in more than one forest
'''


'''
(5) Find the name(s) of the workers that work in the largest forest
'''


'''
(6) Find the name(s) of the workers that manage the largest area of forests
	Remeber workers can work in multiple forests hence you might need to sum
	the areas of those forests
'''

