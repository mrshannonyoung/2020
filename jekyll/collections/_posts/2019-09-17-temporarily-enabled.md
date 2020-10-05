---
has-video: true
title: Temporarily enabled
author: Shannon Young
date: 2019-09-17T17:44:11+01:00
categories: accessibility
tags:
  - a11y
  - accessibility
  - impairment
  - technology
  - screen-readers
  - semantics
---
An introduction to users who rely on assistive technologies and how screen readers interpret a webpage, or not in the worst case.
<!--more-->

When I talk about accessibility I always reference this quote, because of its relevance and how the context applies not only to how we interact with the web, but everyday life.

> We are all ‘temporarily-abled’. Someday you, I or a family member could rely on assistive software or hardware to consume information online.
> [Andrew Soderberg][1]{:target="_blank" rel="noopener"}

Even a short-term injury or context affects the way people interact with the world around them, if only for a short time.

## Different types of impairment.

Situational impairment.
: People moving through different environments. For example in a large crowd people can’t hear well, in a car you’re visually impaired or if you’re a new parent many tasks need to be completed one-handed.

Temporary impairment.
: When a person has short-term injury or context affects the way they interact for a short time. This includes wearing a cast or trying to browse in bright light where reflections can impact readability.

Permanent impairment.
: Is those who have a disability such as loss of limb, sight, hearing or speech.

## A quick experiment…

![Take a look at this office space.](/assets/img/utMgZwMkex.jpg){:standalone loading="lazy" width="1350" height="900"}

### Did you:

  * Scan from left to right?
  * Scan from right to left?
  * Looked at key objects, like the door, the people?
  * Randomly looked everywhere?

*It doesn’t really matter.*

Without realising, you would have scanned the room in just seconds to get a sense of the layout. 

## Lights out

Now, let’s re-imagine that the office space is completely dark, but now you have a torch which allows you only to see a small area at a time.

### Now would you:

  * Move the light scanning from left to right?
  * Start at the back and move the light toward you?
  * Point randomly, with no real pattern?

The point is, without being able to see the room and using only a torch this task takes significanlly longer and you have to remember where everything is.

**This is the browsing reality for users who rely on screen-reading software such as JAWS or Voiceover.**{:class="stand-out"}

While keyboard commands or touch gestures can move the screen reading software around the page, it is only possible to read one thing at a time.
There is no way for the visually impaired user to get a quick (1 to 3 second) overview of the page similar to what someone who can see the screen might do.

## Ron McCallum

{%- include /components/html/video-embed.html
type="figure"
reference="X6af3MfsFW"
caption="'How technology allowed me to read'"
webm=true vtt=true -%}

## You're back in the room

It’s still dark however there are ‘landmarks’ above points of interest.

![These landmarks are visual cues.](/assets/img/hGd8VeT2EO.jpg){:standalone loading="lazy" width="1350" height="900"}

## Semantics

We can provide screen readers landmarks, and layout outlines using semantic HTML.

  * Main content is `<main>`
  * Header content is `<header>`
  * A navigation is `<nav>`

## Let’s make the web ~~better~~ more inclusive

Inclusivity is about considering diverse groups of people. It's a methodology that puts people's needs first and foremost to expand the reach to the largest range of users possible.

**Solve for one, extend to many**{:class="stand-out"}

Microsoft have excellent advice and resources in their *Inclusive design guidelines document*. 
In it, they outline three principles of Inclusive design.

1. Recognise exclusion
2. Learn from diversity
3. Solve for one, extend to many

> Inclusive design is for those who want to make great products for the greatest number of people.
> [Microsoft Inclusive design guidelines][2]{:target="_blank" rel="noopener"}

*[a11y]: Accessibility
*[HTML]: Hyper Text Markup Language
*[JAWS]: Job Access With Speech

[1]: https://developer.paciellogroup.com/blog/2018/01/a-tale-of-two-rooms-understanding-screen-reader-navigation/#comment-2464
[2]: https://www.microsoft.com/design/inclusive/