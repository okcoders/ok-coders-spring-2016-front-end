# Setting up an angular seed project from scratch

So for we have served our html files to the browser through the file system (You
have seen me do this whenever I type open someDocument.html from the command
line, and then in chrome it is displayed with
file://User/zach/Desktop/someDocument.html in the address bar. Now that we are
bringing in angular, it is helpful for us to bring some structure to how we layout
our project, and to also bring in a server.

Follow the instructions to install node and npm

```
mkdir angular-seed
cd angular-seed
npm init
```

Keep pressing enter a bunch until it asks you to type yes. Type yes and then
press enter

You should now have a package.json file inside your angular-seed directory.
Check out the package.json file in this repo to see what I typed. Feel free to
change your package.json file at anytime.

let's install a very basic http-server

```
npm install -g --save http-server
```

we just installed the node program http-server globally (that is what the -g
flag did), so that we can run a server from any directory on our computer, and
we also with the --save flag added http-server as a dependency in our
package.json. Check out your package.json to see that.

Now we are going to install bower, which is another popular package manager,
then we are going to use it to install a few packages we will use in our
application.

```
npm install -g --save bower
bower init (just keep hitting enter and saying yes)
bower install --save angular-latest
bower install --save bootstrap
bower install --save angular-moment moment
bower install --save angular-lodash
```

```
mkdir app
cd app
touch index.html
```

