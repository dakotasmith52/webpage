from urllib import request
import contextlib
import io
import json
import os

theapi = 'https://p848p29pz3.execute-api.us-west-2.amazonaws.com/test/threads'

myfile = os.path.join(os.getcwd(), 'threads.json')
f = request.urlopen(theapi).read()
with open(myfile, 'wb') as x:
    x.write(f)
datastore = json.loads(f)

print(datastore)