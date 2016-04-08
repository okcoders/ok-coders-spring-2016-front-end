OK Coders: Twitter BootStrap Exercises
====

Complete all homework assignments before coming to the next class or as otherwise instructed.

## Build a Web Site

**Grab the html from this repository**

Copy all the html files from the public directory to your computer. Alternately, for this lesson you could create the html files from scratch, because the html files in this repository are empty placeholders. In either case you should have a *public* directory somewhere on your computer that will contain the html files.

**Install bootstrap**

Download the bootstrap files and place them into the correct directories inside the public directory. You should end up with three additional directories: *css*, *js*, *fonts*. Your directory structure will looke like:

```
public:
  fonts
  css
  js
```

**Create the web site**

For this assignment you create a web site for a made up data analytics firm. You will create all the web site's pages from scratch using bootstrap for layout.

I've added an empty file for each page, but you will generate all the html. Base your html on the Bootstrap Basic Template we used in class. Watch out for mistakes in the `link` and `script` tags!

The site should have the following characteristics:

**Navigation and container**

Each page should have a working bootstrap-based *navigation bar* with links to all the other pages that also indicates the current page. Each page should also have a *container* div that contains the rest of the page.

**Index.html**

The index is the front landing page for the site. Make up marketing copy (text) for a data analysis firm and add images. Use a few of the bootstrap components to make it snazzy.

**About.html**

Create an about page that describes the business and the team. Add images for team members. The images should be circles, but don't edit square images. Use bootstrap's support for making a rectangular image appear circular. Again, make up the copy (text contents).

**Signup.html**

Create a sign up page for the firm's product. Create a form using bootstrap's form classes. Your sign up form should require an email address and password. No username and no password confirmation field. Include a signup button. Center the form on the page so that it doesn't take up the entire width.

**Reports.html**

The reports page uses bootstrap's *grid system* for layout. This is where your customers go to view the data reports available to them. Use bootstrap's grid system to create a two column layout. The left column is the sidebar (width:4) that contains a *list group* component. The right column is the main content area (width:8) and should include a sample report or chart. If you're feeling brave, try incorporating one of the examples from [D3.js](http://d3js.org/).

## Check out Bootswatch

Update your reddit page to use Twitter Bootstrap classes for layout and styling. Remove *all* your custom styling and use bootstrap exclusively.

Have a look at [Bootswatch](http://bootswatch.com/) f you'd like to try different bootstrap themes.

