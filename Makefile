


post:
	curl -X POST https://immense-coast-33915.herokuapp.com/resource

get.state:
	curl -X GET https://immense-coast-33915.herokuapp.com/resource/state/1

put.state:
	curl -X PUT -H "Content-Type: application/json" -d '{"a":"value_a","b":"value_b"}' https://immense-coast-33915.herokuapp.com/resource/state/1


