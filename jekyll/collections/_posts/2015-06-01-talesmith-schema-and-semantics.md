---
title: Talesmith – schema and semantics
author:
  - Shannon Young
date: 2015-06-01T10:04:21+00:00
url: /talesmith-schema-and-semantics/
categories: projects
tags:
  - schema
  - semantics
---
I think at times it’s nice to talk about what’s going on the behind the scenes of a website: revealing its skeleton or engine, lifting the curtain, however you want to put it.
<!--more-->

> [<img class=" wp-image-9637" src="https://www.mark-making.com/wp-content/uploads/2015/05/blog-cover.jpg" alt="blog-cover"  />][1]

> mark-making* have been working on a new website for Talesmith that puts the work front and centre, and lets their accumulated prestige speak for itself. With such rich content resources at our disposal, it’s a pleasure but almost more of a challenge to let the work guide the design, whilst maintaining a visual sense of the brand at all times.


**Matchstick-jelly fortress**

Without the careful consideration and care that goes in to how a site is structured, the development can in many ways be compared to the thought process of an architect who decides to support the structure of a building with matchsticks, and cover it with jelly. Sure, it might hold up for a while, but it doesn’t make sense to do this, and no one would take the architect seriously if they knew.

You’d hope that your architect would follow some set of standards, and has a sense of current best practice.

**The right building blocks**

In web development we have these standards: we have semantics. Semantics give structure meaning, so that both humans and robots can make sense of the data, and use it to its full potential.

Some people choose not to follow these standards (sucks to be them).

**Not** doing these things can have a negative impact on your website.

## Structured data = winning in Google

Google and other search engines are favouring sites that use structured data and semantics, in a way that is easy for both robots and humans to understand. These sites are more highly ranked than those that don’t use structured data effectively, and get their <span style="text-decoration: underline;"><a href="https://developers.google.com/structured-data/rich-snippets/" target="_blank">rich content</a></span> like maps, locations, events, or images shown in search results.

I by no means claim to be an expert on using schemas, as they can get very complex, and HTML semantics can be interpreted in many different ways, but only by referencing the <a href="https://www.w3.org/TR/html5/" target="_blank">HTML5 spec</a> and using the <a href="https://www.schema.org/docs/full.html" target="_blank">schema documentation</a> can we start to use them to full effect.

You can test your HTML with the <a href="https://validator.w3.org/" target="_blank">HTML5 Validation service</a>.

You can validate your schema with the <a href="https://developers.google.com/structured-data/testing-tool/" target="_blank">Google Structured data validation tool</a>.

## How we used semantics & schemas for Talesmith.tv

**The company**

On every page, we define the company.

[<img class=" wp-image-9605" src="https://www.mark-making.com/wp-content/uploads/2015/05/Organisation-schema.png" alt="Organisation schema"  />][2]

<a href="https://developers.google.com/structured-data/testing-tool?url=http%3A%2F%2Ftalesmith.tv%2F" target="_blank"><strong>The front page</strong></a>

The schema explicitly states that the specialty of this site is in ‘Filmmaking’, it also has been told there is a video on the page along with its name, caption and thumbnail.

[<img class=" wp-image-9603" src="https://www.mark-making.com/wp-content/uploads/2015/05/Web-page.png" alt="Web page"  />][3]

<a href="https://developers.google.com/structured-data/testing-tool?url=http%3A%2F%2Ftalesmith.tv%2Fabout%2F" target="_blank"><strong>The about page</strong></a>

There is a schema just for about pages, so of course we used it.

[<img class=" wp-image-9607" src="https://www.mark-making.com/wp-content/uploads/2015/05/About-Page.png" alt="About Page"  />][4]

This page also contains a list of social media profiles. You guessed it, we used the ‘ItemList’ schema.

[<img class=" wp-image-9606" src="https://www.mark-making.com/wp-content/uploads/2015/05/Item-List.png" alt="Item List"  />][5]

As the Talesmith site contained video clips from TV broadcasts, we used the ‘TVSeries’ schema.

<a href="https://developers.google.com/structured-data/testing-tool?url=http%3A%2F%2Ftalesmith.tv%2Fwork%2Fdavid-attenboroughs-galapagos-3d%2F" target="_blank"><strong>A single work page</strong></a>

I think the results are quite self explanatory on this one.

[<img class=" wp-image-9604" src="https://www.mark-making.com/wp-content/uploads/2015/05/TV-Series-1.png" alt="TV Series 1"  />][6]

&#8211;

Using schemas allows us to describe the markup into explicitly defined areas, which are easy for search engine robots, and I think even people, to understand. Schema and semantics? Simples.

 [1]: https://www.mark-making.com/wp-content/uploads/2015/05/blog-cover.jpg
 [2]: https://www.mark-making.com/wp-content/uploads/2015/05/Organisation-schema.png
 [3]: https://www.mark-making.com/wp-content/uploads/2015/05/Web-page.png
 [4]: https://www.mark-making.com/wp-content/uploads/2015/05/About-Page.png
 [5]: https://www.mark-making.com/wp-content/uploads/2015/05/Item-List.png
 [6]: https://www.mark-making.com/wp-content/uploads/2015/05/TV-Series-1.png