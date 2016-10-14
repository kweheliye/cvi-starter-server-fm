# IBM IoT for Automotive - Fleet Management Starter Application

The IBM IoT for Automotive - Fleet Management Starter Application demonstrates how quickly you can build an app on IBM Bluemix to manage and monitor a fleet of vehicles in real-time.

## Overview

Using the Fleet Management Starter Application, you can easily track and view the following information in real-time:

_* MP Who are the users (the you here) for this app? How many different personas?  *_

- Availability of a fleet of cars on a map
- Location of vehicles
- Overall health of the entire fleet
- Health diagnostics and conditions of a specific vehicle in the fleet
- Condition of vehicles by order of severity or risk
- Event history for the entire fleet
- Event history for a specific vehicle in the fleet

The Fleet Management Starter Application uses the following services that are available on IBM Bluemix:

- [IoT for Automotive (Experimental)](https://console.ng.bluemix.net/catalog/services/iot-for-automotive/)
- [Cloudant NoSQL DB](https://console.ng.bluemix.net/catalog/services/cloudant-nosql-db/)

## Deploying the app on Bluemix

You can deploy the Fleet Management Starter Application automatically in Bluemix by using the [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/ibm-watson-iot/iota-starter-server-fm.git) button or you can deploy the app manually. 

To deploy your own instance of the server component of the Mobility Starter Application on Bluemix, complete all of the following steps:

1. [Register][bluemix_signup_url] an account on Bluemix or use an existing valid account.
2. Download and install the [Cloud-foundry CLI][cloud_foundry_url] tool. 
3. Clone the Fleet Management Starter Application to your local environment by using the following Terminal command:  
```  
git clone https://github.com/ibm-watson-iot/iota-starter-server-fm.git  
```  
4. Change to the directory that you just created. 
5. Edit the `manifest.yml` file and change the values of `<name>` and `<host>` to something unique.  
  ```
  applications:
         :
    host: iota-starter-server-fleetmanagement
    name: iota-starter-server-fleetmanagement
    memory: 512M
    path: .
    instances: 1
         :
  ```
  The host value is used to generate your application URL, which is in the following syntax:  
   `<host>.mybluemix.net`.
6. Install packages in dependencies of package.json:
   ```
  $ cd ./webclient
  $ npm install 
   ```
7. Convert TypeScript to JavaScript:
   ```
   $ npm run tsc
   $ npm run gulp
   $ cd ..
   ```
8. By using the command line tool, connect to Bluemix and log in when prompted:

  ```
  $ cf api https://api.ng.bluemix.net
  $ cf login
  ```
9. Create an instance of the IBM Watson IoT Platform service in Bluemix:
  ```
  $ cf create-service iotforautomotive free_shared FleetIoTForAuto
  ```
10. Create an instance of the Cloudant NoSQL DB service in Bluemix:
  ```
  $ cf create-service cloudantNoSQLDB Lite FleetCloudantDB
  ```
11. Push the starter app to Bluemix by using the following command. Because you will need to perform additional steps when the app is deployed, you must add the option --no-start argument when you run the `push` command.
  ```
  $ cf push --no-start
  ```
Your very own instance of the IBM IoT for Automotive - Fleet Management Starter Application is now deployed on Bluemix.

## Activating the Bluemix services

Before you can use the IBM IoT for Automotive - Fleet Management Starter Application, you need to set up and activate the dependent Bluemix services, as outlined in the following procedure:

- [Activate the **IBM IoT for Automotive** service](#activate)
- [Configure authentication](#authent)

### Activating the IBM IoT for Automotive service
{: #activate}

1. If the app is already running on Bluemix, stop the app.

2. Open the [Bluemix dashboard][bluemix_dashboard_url] in your browser.

3. Open the IBM IoT for Automotive service and then wait for a few seconds until the user credentials show up.

### Configure authentication
{: #authent}

To secure the app, users must authenticate to access the app.

By default, the user credentials for the IoT for Automotive - Fleet Management Starter Application are as follows:

User name | Password
----- | -----
starter | Starter4Iot

- To change the user name or password that is used by the app, edit the values specified for the `APP_USER` and `APP_PASSWORD` environment variables.

- To remove authentication, set both the `APP_USER` and `APP_PASSWORD` environment variables to 'none'.

## Starting the app
{: #run}

1. Open the [Bluemix dashboard][bluemix_dashboard_url].

2. Start the app.

Congratulations! You are now ready to use your own instance of the IBM IoT for Automotive - Fleet Management Starter Application. Open `http://<host>.mybluemix.net` in your browser.

## Usage

## Implementation

## Reporting defects
To report a defect with the IoT for Automotive - Mobility Starter Application mobile app, go to the [Issues section](https://github.com/ibm-watson-iot/iota-starter-server-fm/issues) section.

## Troubleshooting
To debug problems, check the Bluemix app logs. To view the logs, run the following command from the Cloud Foundry CLI:

  ```
  $ cf logs <application-name> --recent
  ```
For more detailed information on troubleshooting your application, see the [Troubleshooting section](https://www.ng.bluemix.net/docs/troubleshoot/tr.html) in the Bluemix documentation.

## Privacy Notice

The IoT for Automotive - Fleet Management Starter Application includes code to track deployments to [IBM Bluemix](https://www.bluemix.net/) and other Cloud Foundry platforms.

For each instance that you deploy, the following information is sent to a [Deployment Tracker](https://github.com/cloudant-labs/deployment-tracker) service:

* Application name (`application_name`)
* Space ID (`space_id`)
* Application version (`application_version`)
* Application URIs (`application_uris`)
* Labels of bound services
* Number of instances for each bound service

The tracked data is collected from the `VCAP_APPLICATION` and `VCAP_SERVICES` environment variables in IBM Bluemix and other Cloud Foundry platforms. The data is used by IBM to track metrics around deployments of sample applications to IBM Bluemix to measure the usefulness of our examples, so that we can continuously improve the content that we offer to you. Only deployments of sample applications that include code to ping the Deployment Tracker service will be tracked.

### Disabling deployment tracking

You can disable the Deployment Tracker service by removing `require("cf-deployment-tracker-client").track();` from the beginning of the `app.js` server file.

## Useful links
[IBM Bluemix](https://bluemix.net/)
[IBM Bluemix Documentation](https://www.ng.bluemix.net/docs/)
[IBM Bluemix Developers Community](http://developer.ibm.com/bluemix)
[IBM Watson Internet of Things](http://www.ibm.com/internet-of-things/)
[IBM Watson IoT Platform](http://www.ibm.com/internet-of-things/iot-solutions/watson-iot-platform/)
[IBM Watson IoT Platform Developers Community](https://developer.ibm.com/iotplatform/)

[bluemix_dashboard_url]: https://console.ng.bluemix.net/dashboard/
[bluemix_signup_url]: https://console.ng.bluemix.net/registration/
[cloud_foundry_url]: https://github.com/cloudfoundry/cli
