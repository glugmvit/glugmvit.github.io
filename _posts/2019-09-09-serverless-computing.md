---
layout: post
title:  "Introduction to Serverless Computing"
author: shashwat
categories: [ cloud, aws ]
image: assets/images/aws-cli/Serverless-Architecture-Market.jpg
featured: false
excerpt: Serverless computing is a cloud-computing execution model which runs the server, and dynamically manages the allocation of machine resources.
---
<!-- Add post written in markdown or html below -->
Serverless Computing is a cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity. It can be a form of utility computing.

Serverless computing can simplify the process of deploying code into production. Scaling, capacity planning and maintenance operations may be hidden from the developer or operator. Serverless code can be used in conjunction with code deployed in traditional styles, such as microservices. Alternatively, applications can be written to be purely serverless and use no provisioned servers at all. [2]

This should not be confused with computing or networking models that do not require an actual server.

There are many providers for this such as AWS Lambda. A FaaS offering that belongs to Amazon Web Services was introduced in 2014. Azure Functions by Microsoft. The service launched in 2016 to compete with AWS Lambda. Google Cloud Functions (GCF). IBM Cloud Functions. We'll discuss AWS Lambda.


# What Is AWS Lambda?
AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. You pay only for the compute time you consume - there is no charge when your code is not running. With AWS Lambda, you can run code for virtually any type of application or backend service - all with zero administration. AWS Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring and logging. All you need to do is supply your code in one of the languages that AWS Lambda supports.

You can use AWS Lambda to run your code in response to events, such as changes to data in an Amazon S3 bucket or an Amazon DynamoDB table; to run your code in response to HTTP requests using Amazon API Gateway, or invoke your code using API calls made using AWS SDKs. With these capabilities, you can use Lambda to easily build data processing triggers for AWS services like Amazon S3 and Amazon DynamoDB, process streaming data stored in Kinesis, or create your back end that operates at AWS scale, performance, and security.

You can also build serverless applications composed of functions that are triggered by events and automatically deploy them using CodePipeline and AWS CodeBuild.


# Cloud servers – Are they utilized properly?
The cloud eliminates the need for companies to own their hardware and maintain expensive server-based architectures to run their business processes. However, a need remains to scale applications and maintain their reliability at the time of deployment. As business needs evolve and more processes are required to automate operations, companies have to scale up their cloud architecture by availing additional resources on their existing servers, or even order a new set of servers – virtual or physical – as and when required. Efforts have to be made to maintain good access times during peak hours and manage other activities when the traffic levels are low. From the operations point of view, there can be nothing more non-productive for a company than a server that remains idle most of the times. As per market findings, almost eighty-five per cent of servers remains underutilized in a typical cloud setup.


# AWS Lambda – The solution
Lambda removes the complexity of dealing with cloud-based servers at all levels of the technology stack and offers a pay-per-request billing model where you don’t have to pay for idle computing time. AWS Lambda is offered as a compute service. It lets you run your code without provisioning or managing any other server. It executes the code only when needed. It can scale automatically to handle a few requests per day and even support more than thousands of requests per second. You have to pay only for the server time you consume – there’s no billing if your code is not being executed by the service. Moreover, you can run your code for almost any type of application and/or backend services with zero administration costs.

Lambda runs your code on a high-availability compute infrastructure.
It performs administration of all resources availed, including any server or operating system maintenance activities, capacity provisioning, automatic scaling, code monitoring and code logging.
You merely have to supply your code in any of the supported languages – Node.js, Java, C# and Python are supported now.



# Lambda applications use cases
Lambda’s serverless application model is generic and can be applied to almost any type of application – From a startup venture’s simple web application to a Fortune 100 company’s stock trade-analysis platform. Here are a few examples where Lambda can be used:

## Web apps and websites
By eliminating servers, it is possible to design web apps that don’t cost anything when there’s no traffic. The server can scale dynamically at peak hours to handle excessive traffic loads.

## Mobile backends
Serverless mobile backends facilitate developers to easily create secure, available, and perfectly scaled backends without having to gain special expertise in designing robust apps.

## Media and log processing
A serverless approach offers natural parallelism so it becomes easier to process workloads. You don’t need a complex multi-threaded system or require to scale entire compute fleets to handle heavy workloads.

## IT automation
Serverless functionality can be easily availed and customized as per need, as and when needed. It becomes very easy and simple to scale applications when the nature and scope of your business changes. If you’re required to add or remove certain operational processes within your business model to adapt to changing market conditions, you can design and set up new modules without much hassles to automate your business the related IT processes.

## IoT backends
You can incorporate any code and native libraries to simplify the creation of cloud-based device-specific algorithms.

## Chatbots, voice-enabled assistants and other webhook based systems
A serverless approach can be a perfect fit for any webhook based system, including a chatbot tool. Since code is executed to perform certain actions only when needed, such as when an end-user requests some information from a chatbot, AWS Lambda can be the perfect choice for such applications as permanent threads are not required to keep communication channels open 24×7. The majority of Alexa Skills for Amazon Echo are implemented using AWS Lambda.


#### References
- <https://docs.aws.amazon.com/lambda/latest/dg/welcome.html>
- <https://www.thesunflowerlab.com/blog/benefits-aws-lambda-serverless-computing/>
