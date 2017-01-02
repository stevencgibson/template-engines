# Template Engines

## EJS
- http://ejs.co/
- <% %> tags
- supports includes
- doesn't support layouts
- low learning curve
- .ejs files

## Handlebars
- http://handlebarsjs.com/
- not compatible with Express out of the box
- https://github.com/pillarjs/hbs is a wrapper that provides the required __express method
- {{ token based system }}
- .hbs files

## Nunjucks
- https://mozilla.github.io/nunjucks/
- compatible with Express out of the box
- {{ token based system }}
- supports includes
- supports layout inheritance
- quite high learning curve
- can use .html file extension

## Pug
- https://pugjs.org/api/getting-started.html
- formerly Jade
- compatible with Express out of the box
- the default template engine for Express
- influenced by HAML
- whitespace-based notation with no brackets
- no closing tags
- supports includes
- supports layout inheritance
- inline JS is cumbersome
- high learning curve
- .pug files
