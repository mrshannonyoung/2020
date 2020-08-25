---
title: Responsive, but not as you may know it
author:
  - Shannon Young
date: 2013-05-28T09:45:41+00:00
url: /responsive-but-not-as-you-may-know-it/
featured_image: "2013/05/shannon@responsiveconference.jpg"
categories: design-culture

---
This blog post is the first part of a series of posts that go through what I learnt and absorbed from <a href="https://responsiveconf.com/" target="_blank">Responsive Day Out &#8211; Brighton</a>, 2013, hosted by <a href="https://adactio.com/" target="_blank">Jeremy Keith</a> (who was fantastic), author of <a href="https://html5forwebdesigners.com/" target="_blank">HTML5 For Web Designers</a>.



My first post will speak about ideas and methodologies on responsive design, highlighted by the last speaker, <a href="https://www.markboulton.co.uk/ " target="_blank">Mark Boulton</a>, but also mentioned by other speakers on the day, and which are hot topics in the industry.

## Mark Boulton

My first impression of <a href="https://www.besquare.me/session/in-between/" target="_blank">Mark on the stage</a> was one of a confident man, who believed in exactly what he was saying. The slideshow was minimal but not lacking, as he himself was the focal point.

Everything Mark said made sense, and was absorbed by the [400][1]+ strong crowd who all shared one passion: [web design][2] and development. I would recommend following <a href="https://twitter.com/markboulton" target="_blank">Mark on Twitter</a>.

[**Break Point**][3]
  
_Noun_
  
A place or time at which an interruption or change is made.

## Media queries

We use CSS media queries to target specific viewport sizes, where we can introduce a new style or modify an existing style. These are known as break points as defined above and shown below.

[<img class="size-full wp-image-5250 alignnone" alt="Responsive break points on the TIME website." src="https://www.mark-making.com/wp-content/uploads/time-responsive.png" width="1050" height="320" />][4]

## If you have used media queries, this should look familiar

<pre>/* Large desktop */
@media (min-width: 1200px) { ... }

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) { ... }

/* Landscape phone to portrait tablet */
@media (max-width: 767px) { ... }

/* Landscape phones and down */
@media (max-width: 480px) { ... }</pre>

The above snippet is taken from [Twitter Bootstrap][5], and the comments provide an indication as to what it will do. The media queries target known viewport sizes so we can change, or introduce, the styling of elements when that break point is active.

## To the point

The message that was being delivered from the speakers, and interpreted by me, was not to constrain our designs to these specific widths, but use them to control the more drastic layout changes and use smaller breakpoints to control the more subtle changes.

The idea is to look at the content and its structure to define where our constraints will be and break the design when it’s needed, not when some known viewport size dictates it should change. Saying, “this is iPhone, this is iPad”, echos the constant message throughout the whole day, which is we must remain device agnostic.

As put by Mark Boulton in his talk at Responsive Day Out,

> We don't have pages and we don't have edges in the way we think we do. When did RWD become multiple page design? We're reverting to a set of 320px, 768px, 1024px layouts and putting everything into those breakpoints.

This is expanded upon in his <a href="https://www.markboulton.co.uk/journal/theinbetween" target="_blank">supporting blog post</a> from the talk, by suggesting we use smaller and more defined breakpoints to enhance and optimise the content with more subtle changes.

> A breakpoint should not necessarily be a point at which we wholesale swap out to another layout. It can be – and I think there are good reasons to make some of those big, macro changes to grid system or navigation patterns. BUT, I think we’re missing a trick for using breakpoints to make lots of subtle design optimisations.

## We don’t really know our users

As much as we like to think we know who will be using our website and why, through various analytics, we cannot definitively assume we know their viewport size, motive or circumstance.

> 800px width doesn't mean that someone is using a tablet. The user might have adjusted the display due to low-vision.

&#8211; <a href="https://twitter.com/feather" target="_blank">@feather</a> <a href="https://twitter.com/search?q=%23mobilism" target="_blank">#mobilism</a>

So the inevitable question is “what do I do then?”

Herein lies the crux of the situation (which again echos an underlining theme from Responsive Day Out), nobody knows yet. As designers and developers we are still learning the most efficient processes and workflows, and these will change from person to person. It’s no shame on you or your company to admit this. Responsive design shook the whole community and turned our comfortable methods upside down, then diagonally for some fun.

As Mark Boulton requoted from Mike Tyson,

> Everyone has a plan until they get punched in the face .
  
> &#8211; Mike Tyson
  
> Responsive design was that punch in the face.
  
> &#8211; Mark Boulton

## We have help

One of the reasons I love being in this industry is the willingness of individuals to share their knowledge.

<a href="https://www.lukew.com/ " target="_blank">Luke Wroblewski</a> was the first to define the _mobile first_ concept back in 2009, and has written a book about the subject. The concept is that websites should first be designed for mobile devices.

Mark Boulton’s <a href="https://www.markboulton.co.uk/journal/theinbetween" target="_blank">content out approach</a> starts by defining your underpinning design structure from your content, and then focusing on what happens in between _layouts_.

<a href="https://bradfrostweb.com/" target="_blank">Brad Frost</a>, a figure I greatly admire, was not part of the speaking panel but nonetheless his <a href="https://vimeo.com/63437853" target="_blank">talks</a> and <a href="https://bradfrost.github.io/this-is-responsive/" target="_blank">resources</a> are invaluable.

## So what is the core message?

From the talks at <a href="https://www.besquare.me/conferences/responsive-day-out/" target="_blank">Responsive Day Out</a> from <a href="https://www.besquare.me/session/in-between/" target="_blank">Mark Boulton</a>, <a href="https://www.besquare.me/session/antiphonal-geometry/" target="_blank">Owen Gregory</a> and <a href="https://www.besquare.me/session/the-edge-of-the-web/" target="_blank">Paul Robert Lloyd</a>, who are all respected figures in the industry, the message is we have edges, we know there are boundaries (viewport widths) but we don’t know where they are, and should not assume we know.

Instead, we should design based around the content and let that define how we structure our pages, and when screen real estate increases, so should the content presentation.

Responsive design should not be an afterthought, it will show, and the user experience will suffer. Cramming content where it does not fit naturally can work, but it will sure be messy.

Image source: [Marc Thiele][6]

 [1]: https://twitter.com/adactio/status/336797276011905024
 [2]: https://www.mark-making.com/services/web-design/
 [3]: https://oxforddictionaries.com/definition/english/break-point?q=breakpoint
 [4]: https://www.mark-making.com/wp-content/uploads/time-responsive.png
 [5]: https://twitter.github.io/bootstrap/scaffolding.html#responsive
 [6]: https://www.flickr.com/photos/marcthiele/8520113635/in/set-72157632886161499