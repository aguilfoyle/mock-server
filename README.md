# mock-server

## Heroku Mock Server

Pushing to the GITHUG develop branch will cause the Heroku mock server at https://mobile-mocks.herokuapp.com/ to be updated.

If you are using the Acuity repo and want to push to GITHUB, you will need to add the GITHUB remote
```
  git remote add github git@github.com:AtriusDev/mock-server.git
  ```
  
## Local Host Mock Server

If you intend to run this as a local mock, you will need to get your local IP address and update the parnterStore under 'Localmock' to point the your actual IP address

Example:
```
  Localmock: {
    name: "Local Mock - PROD",
    apiUrl: "http://10.204.113.100:3000/",
```
    
You can find the local ip by doing ifconfig.  The IP to be used in the example below is 10.204.113.100

Example: 
```
$ ifconfig
...
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	ether 98:01:a7:93:e7:8b 
	inet6 fe80::c8e:35f5:2c28:eb45%en0 prefixlen 64 secured scopeid 0x5 
	inet 10.204.113.100 netmask 0xffffff00 broadcast 10.204.113.255
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect
	status: active
...
```
You can start the local mock server by doing the following command at the command line within the 'mock-server' directory.

```
$ npm start
```

## Building Blocks

This server is based upon the the `mock-json-api` and the `dummy-json` packages.  For more about the `mock-json-api` see https://github.com/jeffflater/mock-json-api
For more information about the `dummy-json` see https://github.com/webroo/dummy-json

