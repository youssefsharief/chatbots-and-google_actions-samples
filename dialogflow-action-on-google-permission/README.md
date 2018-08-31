## AWS Lambda
* Create a lambda function that has a role of **LambdaFullAccess**. Create one from template if it does not already exist
	* `aws lambda create-function --region us-east-1 --function-name code-lab-2 --profile default --runtime nodejs6.10 --role arn:aws:iam::791347282543:role/LambdaFullAccess --handler index.handler --zip-file fileb://level2-complete.zip`
* To invoke function:
	* `aws lambda invoke --invocation-type Event --function-name code-lab-2 --region us-east-1 --payload file://test_event.json --profile default outputFile.txt`
* To update function code: 
	* Zip the files inside the src directory. Also zip node_modules in case we need external packages. Remeber to have two package.json and two node_modules directories if you have dev dependencies to save upload size and time
	* `aws lambda update-function-code --zip-file fileb://level2-complete.zip --function-name code-lab-2`
## API Gateway
* Create a post method
* Deploye the api
* Make sure lambda proxy is disabled
* Copy the **Invoke Url** value for **created resource** not the parent url

## Dialogflow
* Project name: codelab-2
* Add color entity


## Notes
* Helper intents
    * permission
    * sigin in 
    * place
* Any intent reference in the webhook(lambda function in our case) should have the same name as the one in Dialogflow
* Invocations in Google assistant
    * Explicit
        * User says "Hey Google, talk to Movie Time"
    * Implicit: user says directly what he wants
        * Example: "What is 34 celsius in farenheight"
        * Google has to search on apps
        * You need to add implicit invocations to increase your chances of getting called when the user does not invoke your app directly
  