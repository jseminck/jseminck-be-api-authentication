#!/bin/sh

mkdir jseminck-be-api-authentication
mv ./jseminck-be-api-authentication.tgz jseminck-be-main/jseminck-be-api-authentication.tgz
cd jseminck-be-api-authentication
tar -zxvf jseminck-be-api-authentication.tgz
npm i
npm run start
rm jseminck-be-api-authentication.tgz
