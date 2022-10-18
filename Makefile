


post:
	curl -X POST https://immense-coast-33915.herokuapp.com/resource

get.state:
	curl -X GET https://immense-coast-33915.herokuapp.com/resource/state/1

JSON:={"a":"value_a","time": "$(shell date)"}

put.state:
	curl -X PUT -H "Content-Type: application/json" -d '${JSON}' https://immense-coast-33915.herokuapp.com/resource/state/1


heroku.push:
	git push heroku main

heroku.logs:
	heroku logs

