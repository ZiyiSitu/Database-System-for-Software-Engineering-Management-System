from faker import Factory
import json
from random import choice, randint
from datetime import datetime, date

# organization names
ORGN_NAMES = ('Engineering',
              'Research',
              'Marketing',
              'Production',
              'Purchasing',
              'Management',
              'Finance',
              'Costumer Service',
              'IT Management',
              'Distribution'
              )

# priority names
PROY_NAMES = ('Highest',
              'High',
              'Normal',
              'Low',
              'Lowest'
              )

# status names
STAS_NAMES = ('Not started',
              'In progress',
              'Review',
              'On hold',
              'Closed',
              'Cancelled'
              )

# Constants
MIN_TASKSIZE = 2
MAX_TASKSIZE = 10
MIN_TASKTEAMSIZE = 3
MAX_TASKTEAMSIZE = 6

num_users = 0
num_projs = 0
pid = 0

# hash to avoid duplicates
users = []
emails = set()

# Faker generator
generator = Factory.create()

proj_file = open('/Users/situ/Documents/Databasehw4/FakeData/projects.json', 'w')

class project(object):
    def __init__(self, pid, name, manager, tasks):
        self.pid = pid
        self.name = name
        self.manager = manager
        self.tasks = tasks

    def __str__(self):
        projectdict = {}
        projectdict["pid"] = self.pid
        projectdict["name"] = self.name
        projectdict["manager"] = self.manager
        projectdict["tasks"] = self.tasks
        return json.dumps(projectdict, cls = DateEncoder)


# for start_date and end_date of a task
class DateEncoder(json.JSONEncoder):
    def default(self, obj):  
        if isinstance(obj, datetime):  
            return obj.strftime('%Y-%m-%d %H:%M:%S')  
        elif isinstance(obj, date):  
            return obj.strftime("%Y-%m-%d")  
        else:  
            return json.JSONEncoder.default(self, obj) 


# generate all users
def generate_users():
    for i in range(num_users):
        new_user = generate_user()
        users.append(new_user)


# generate one user
def generate_user():
    name = generator.name()
    email = generator.email()
    while email in emails:
        email = generator.email()
    emails.add(email)
    # counter[email] = 0
    return {"name":name, "email":email, "organization":choice(ORGN_NAMES)}


# generate all projects
def generate_projects():
    # generate all users for projects
    generate_users()

    for i in range(num_projs):
        # use a faker username as project name
        pname = generator.user_name()
        manager = choice(users)
        email = manager["email"]
        global pid
        new_proj = project(pid, pname, manager, generate_tasks())
        pid += 1
        proj_file.write(str(new_proj) + '\n')
    proj_file.close()


# generate tasks for a project
def generate_tasks():
    num_tasks = randint(MIN_TASKSIZE, MAX_TASKSIZE)
    used_tname = set()
    tasks = []

    for i in range(num_tasks):
        # generate a new task using ean()
        tname = generator.ean()
        while tname in used_tname:
            tname = generator.ean()
        used_tname.add(tname)
        start_date = date(randint(2010,2019),randint(1,12),randint(1,28))
        end_date = date(randint(2020,2029),randint(1,12),randint(1,28))
        new_task = {"name":tname, "priority":choice(PROY_NAMES), "status":choice(STAS_NAMES),
        "startdate":start_date, "enddate":end_date, "members":generate_members()}
        tasks.append(new_task)

    return tasks


# generate members for a task
def generate_members():
    members = []
    task_mem_email = set()
    task_team_size = randint(MIN_TASKTEAMSIZE, MAX_TASKTEAMSIZE)

    for j in range(task_team_size):
        member = choice(users)
        email = member["email"]
        task_mem_email.add(email)
        members.append(member)

    return members


if __name__ == '__main__':
    import sys

    if len(sys.argv) == 1:
        num = 100000
    else:
        num = int(sys.argv[1])

    num_projs = num
    num_users = 50 * num
    generate_projects()

