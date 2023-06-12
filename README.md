# Todo List Manager Microservice

This is a Node.js microservice called Todo List Manager that utilizes Sequelize and MySQL as its database. It provides functionality to manage a list of todos.

## Setup

To run this microservice, follow these steps:

1. Clone the repository: [GitHub Repository](https://github.com/fulltechstack/NAGP-Assignment)

2. Set up the required configurations and secrets:

   - todos-configMap.yaml: Provides configuration data for the microservice and MySQL, including the host, database, and username values.
   - todos-secret.yaml: Contains sensitive data, such as the root password and password, which are base64-encoded.

3. Deploy the microservice and MySQL database:

   - nodejs-deployment.yaml: Defines a Deployment with four replicas of the Node.js container. It supports rolling updates and retrieves environment variables from the ConfigMap and Secret.
   - mysql-deployment.yaml: Deploys a MySQL database with a single replica. It includes a Service to expose port 3306 for communication with the database.

4. Set up the persistent storage for the MySQL database:

   - mysql-pvc.yaml: Creates a PersistentVolumeClaim (PVC) named "mysql-pv-claim" with a storage request of 1Gi.

5. Access the microservice:

   - The microservice exposes two endpoints:
     - GET /todos: Fetches the list of todos from the database.
     - POST /todos: Inserts dummy data into the database.

   - External IP for accessing the service: [http://104.197.218.119:3000/todos](http://104.197.218.119:3000/todos)

## Repository

Find the complete code and configurations in the [GitHub repository](https://github.com/fulltechstack/NAGP-Assignment).
