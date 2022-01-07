from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql.expression import func

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
# feature we don't need that is being deprecated upstream by sqlaclchemy
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)



'''
Consider the following schema:
	Forest(forest_no, forest_name, area)
	State(state_name, area)
	Coverage(entry_no, forest_no, state_name, area)

Notice how a forest can span two states
'''


'''
(1) create the tables/models, make sure you set the primary and 
    foreign keys. Look at the '05_db.txt' file to find out
    what the types of each column should be. I only used either
    an integer and a string
'''

'''
(2) populate the tables you created above, you can find the data for 
	the tables in the '05_db.txt' file. The delimiter for an entry/record 
	is ',' and for the tables it is an empty line ('\n'). Remeber to 
	drop all any previosuly created tables to avoid nay problems
'''


'''
(3) find and print the forest name(s) with the largest area (hint: use the func.max)
'''


'''
(4) find and print names of all forests that are located in PA (hint: might have to join 2 tables)
'''


'''
(5) find and print the number of forests for each state in descending order (hint: use func.count)
'''


'''
(6) find and print the percentage of area covered by forests in all states (hint: use func.sum)
'''





