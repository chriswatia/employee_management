FROM openjdk:11
EXPOSE 8181
ADD target/docker-jenkins-employee-management.jar docker-jenkins-employee-management.jar
ENTRYPOINT [ "java", "-jar", "/docker-jenkins-employee-management.jar" ]