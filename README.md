# Isomorphic React with Spring boot

## Start
- Build and start the app: gradle bootRun (http://localhost:8080)
- Develop a feature and watch for front-end changes: npm run watch (http://localhost:9090) 

## Tech stack
- Java Spring Boot Backend
- Server side rendered frontend with isomorphic React (rendered via .ejs template view engine).
- Progressively enhanced (works without javascript)
- Using Server Sent emitters when javascript is enabled, using post/redirect when javascript is disabled (without noticing any difference in the frontend)

## Setup
- Gradle for Java back-end
- Npm & webpack for bundling Javascript (instead of the default WebJars used in Java/Gradle)

## Prerequisites
- Be sure to use [JDK 8u60 or later](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) in order to have the better Nashorn version available.

## Plusses
- Reusing front-end javascript validation files in the back-end becomes possible
- Serverside rendering of modern javascript libraries/frameworks (like React) becomes possible in Java
- Usage of - easy to implement - Server Sent Emitters in stead of Sockets..for one way communication only

## Downsides, or things to improve:
- Performance of Nashorn for rendering seems very slow
- TO DO: use J2V8 in stead of Nashorn

## Links used to make this possible:

[How to Use javascript in java](http://winterbe.com/posts/2014/04/05/java8-nashorn-tutorial/)

[Isomorphic Webapps on the JVM with React.js and Spring Boot](http://winterbe.com/posts/2015/02/16/isomorphic-react-webapps-on-the-jvm/)

[Server Sent Events](https://infinitescript.com/2015/06/use-server-sent-event-in-spring-4-2/)

[Spring-react-isomorphic presentation](https://speakerdeck.com/sdeleuze/isomorphic-templating-with-spring-boot-nashorn-and-react)

[Webjars](http://www.webjars.org/npm)

[Integrate webpack and npm in this setup](https://www.blackpepper.co.uk/blog/js-java-webpack-workflow)

[Script template views in spring + J2V8 in stead of Nashorn](https://patrickgrimard.io/2016/11/24/server-side-rendering-with-spring-boot-and-react/)

More details about Spring Script Templating in
[Spring Framework reference manual](http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#view-script).