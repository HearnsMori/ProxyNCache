# Web Proxy Server in Nodejs with SQUID
## Introduction 
This project shows how to set-up web proxy server using Squid.
## Benefits of Web Proxy Server
It can improve performance, security, and access control for web traffic.
The proxy server caches frequently accessed web content, reducing bandwidth usage and speeding up response times.
It also provides enhanced privacy and control over network requests.
## Installation
Install the required run time environment, nodejs:
```console
pkg install nodejs-lts
```
Install squid:
```console
pkg install squid
```
Clone my git repository:
```console
git clone https://github.com/HearnsMori/ProxyNCache.git
```
## Reconfiguring Squid Config
Find the squid.conf file which usually in
```console
$PREFIX/etc/squid/squid.conf
```
Replace it with the squid.conf cloned from my repository
## Run Squid and Server
Run the squid proxy:
```console
squid
```
Before running the server install the required node package:
```console
npm install
```
Run the server:
```console
node index
```
On seperate session analyze the cache:
```console
tail -f $PREFIX/var/log/squid/access.log
```
Open http://localhost:3000/proxy for https
and http://localhost:3000/proxy2 for http
## Demo
[asciinema demo of my project](https://asciinema.org/a/pBccQI2YdeOq7OxYUA6dlNOtY)
