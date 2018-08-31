

## AWS Lambda
* Create a lambda function that has a role of **LambdaFullAccess**. Create one from template if it does not already exist
	* `aws lambda create-function --region us-east-1 --function-name say-number --profile default --runtime nodejs6.10 --role arn:aws:iam::791347282543:role/LambdaFullAccess --handler index.handler --zip-file fileb://actionssdk-say-number-nodejs.zip`
* To invoke function:
	* `aws lambda invoke --invocation-type Event --function-name say-number --region us-east-1 --payload file://test_event.json --profile default outputFile.txt`
* To update function code: 
	* Zip the files inside the src directory. Also zip node_modules in case we need external packages. Remeber to have two package.json and two node_modules directories if you have dev dependencies to save upload size and time
	* `aws lambda update-function-code --zip-file fileb://actionssdk-say-number-nodejs.zip --function-name say-number`
## API Gateway
* Create a post method
* Deploye the api
* Make sure lambda proxy is disabled
* Copy the **Invoke Url** value for **created resource** not the parent url


## GActions
* Install the gactions cli
* `gactions update --action_package action.json --project say-number-1f9d1`
* Add endpoint url in action.json
  
## Notes
* Notice that we did not need dialogflow for this app since it does not need any NLP logic. This could be noticed that we used the **actionssdk** from the 'actions-on-google' library instead of importing **dialogflow**
