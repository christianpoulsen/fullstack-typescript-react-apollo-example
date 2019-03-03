# A Fullstack TypeScript React Apollo example

The client and the server should be run separately.

The server connects to a MySQL database hosted by AWS's RDS service. So before you can connect, you need to set the needed environment variables:

<code>RDS_HOSTNAME</code>

<code>RDS_USERNAME</code>

<code>RDS_PASSWORD</code>

<code>RDS_PORT</code>

Ensure both client and server have the necessary packages installed to run the application.
Go inside each folder and run:

<code>npm install</code>

Then to run the server, go inside the server folder and run:

<code>npm run dev</code>

In another terminal go inside the client folder and run:

<code>npm run start</code>

This should install the necessary packages, build and compile the typescript code to javascript and then have NodeJS run our builed server project and have react-scripts run our builed client project.
