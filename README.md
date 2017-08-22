# Node.js sample for Azure App Service and App Services on Linux

This is a Node.js web app built on the [Express](http://expressjs.com/) framework that you can deploy 
to Azure App Service or Azure App Services on Linux. 

This code is the default app as generated by the 
[Express application generator](https://www.npmjs.com/package/express-generator), using Jade view engine.

## Environment Settings
* The default Message can be modified by setting the Environment Variable / Application setting EVENT_NAME

## Deployment - Azure App Service (on Windows)
To learn how to deploy this starter web app to App Service in a few minutes, go to 
[Get started with web apps in Azure App Service](https://azure.microsoft.com/en-us/documentation/articles/app-service-web-get-started/). 

## Deployment - Azure App Service on Linux
### Deployment using builtin nodejs image
* Follow the steps mentioned in [Creating web app on Linux](https://docs.microsoft.com/en-us/azure/app-service-web/app-service-linux-how-to-create-web-app)
* Select the latest node version where you need to select the built-in image source (App was tested with version 6.9)


### Deploymnet using custom docker image
#### Building Docker Container image
  The following command builds the docker container image for the application using the provided Dockerfile and .dockerignore file.
  ```sh
  # you need to use your own docker hub userid
  docker build -t maninderjit/nodeapp:1.0 .

  # After this you need to push the image to docker hub
  ```

#### Deployment steps
* Follow the steps mentioned in [Creating web app on Linux using custom docker container image](https://docs.microsoft.com/en-us/azure/app-service-web/app-service-linux-using-custom-docker-image)
* Select Image source as docker hub
* Enter the image name and tag (maninderjit/nodeapp:1.0)

### Enable Application logging to File
* Enable Application logging to file following steps mentioned in [Enable Logging](https://docs.microsoft.com/en-us/azure/app-service-web/app-service-linux-intro)
## License

See [LICENSE](LICENSE).
