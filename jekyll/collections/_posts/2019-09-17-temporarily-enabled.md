---
title: Temporarily enabled
author:
  - Shannon Young
date: 2019-09-17T17:44:11+01:00
categories: accessibility
tags:
  - a11y
  - accessibility
  - technology
  - impairments
---
How users who rely on assistive technologies use screen readers.
How a screen reader interprets the page (or not in the worst case).
What we can do to make our designs and the web a more inclusive platform.
<!--more-->

> If there is a named line with the name `<custom-ident>-start`/`<custom-ident>-end`, it contributes the first such line to the grid item’s placement.
> – [MDN Web Docs][1]{:target="_blank" rel="noopener"}

For this example I will define grid columns (using [SASS][2]{:target="_blank" rel="noopener"}) as follows:

~~~ SASS
.container
  grid-template-columns: [content-main-start] repeat(10, 1fr) [content-main-end]
~~~

I have been using (probably you too) line numbers with a negative value:

~~~ SASS
.content
  grid-column: 1 / -1
~~~

Or using named lines:

~~~ SASS
.content
  grid-column: content-main-start / content-main-end
~~~

Simplfying this further with CSS variables:

~~~ SASS
:root
  --content-span: content-main-start / content-main-end
.content  
  grid-column: var(--content-span)
~~~

But there is actually another way:

> If there is a named line with the name `<custom-ident>-start`/`<custom-ident>-end`, it contributes the first such line to the grid item’s placement.
> – [MDN Web Docs][1]{:target="_blank" rel="noopener"}

With this in mind we can write the following:

~~~ CSS
.content  
  grid-column: content-main
~~~

Less CSS is always good CSS :)

*[CSS]: Cascading Style Sheets
*[SASS]: Syntactically Awesome Style Sheets

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column#Values
[2]: https://sass-lang.com/