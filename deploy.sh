#!/bin/sh

mkdir jseminck-be-api-authentication
mv ./jseminck-be-api-authentication.tgz jseminck-be-api-authentication/jseminck-be-api-authentication.tgz
cd jseminck-be-api-authentication
tar -zxvf jseminck-be-api-authentication.tgz
docker build -t jseminck/api-authentication .
docker run -p 9200:8080 -d jseminck/api-authentication
rm jseminck-be-api-authentication.tgz
