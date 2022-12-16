import json
import requests
from os import listdir
from os.path import isfile, join

path = 'categories'
files = [f for f in listdir(path) if isfile(join(path, f))]

jsons = []
for f in files:
  jsons.append(json.load(open(path+'/'+f)))

len(jsons[0])

ids = []
for j in jsons:
  for i in j:
    ids.append(i['id'])

ids = list(set(ids))

movies = []
for id in ids:
  res = requests.get('http://cw-api.eu-west-3.elasticbeanstalk.com/movied/movie/'+str(id))
  if res.status_code == 200:
    movies.append(res.json())
  else:
    print(res.status_code)

jsonString = json.dumps(movies)
jsonFile = open("movies.json", "w")
jsonFile.write(jsonString)
jsonFile.close()
