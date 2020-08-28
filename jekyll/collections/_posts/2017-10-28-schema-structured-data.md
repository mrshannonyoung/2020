---
title: 3 invisible – but important – ways we made our website more SEO-friendly
author:
  - Shannon Young
date: 2017-10-28T10:00:01+00:00
url: /schema-structured-data/
featured_image: "2017/10/schema-1000.680.png"
categories: projects
---
As a brand, product, person or anything that lives on the internet, you are striving to make your content and purpose accessible and discoverable, however possible.

![standalone image](https://www.mark-making.com/wp-content/uploads/2017/10/schema-1000.680.png){:standalone loading="lazy" rel="preload" as="image"}

Hey wait, so are we!

In this post, I’m going to explain how we shored up the SEO potential of mark-making*s new case study section, without resorting to any of the following well-known SEO tactics (which range from harmless to significantly dodgy):

  * Keyword stuffing
  * Reporting a competitor (or negative SEO)
  * Sneaky redirects
  * Guest posting networks
  * Link manipulation (including buying links)
  * Article spinning
  * Link farms, link wheels or link networks

## What are the three things?

We used **structured data**, which improves accessibility, makes life easier for search engines trying to ferret out all the details about your content, and does justice to your high quality content by putting the effort in to making it findable.

We also did some **clever stuff with images** to boost loading times.

The last one is kind of a cheat, because it’s not invisible, we did it ages ago, and I'm not going to go into loads more detail. But it is so important! Our website has been [**responsive since 2012**][1]. Good practice anyway, and essential since Google has been <a href="https://webmasters.googleblog.com/2016/11/mobile-first-indexing.html" target="_blank" rel="noopener">indexing mobile-first</a> for almost a year now.

## So structured data. Come again?

### What is it?

Structured data is code that’s full of handy information effectively marked “FAO search engine spiders”. It builds a complete picture of meta information about the content – everything you could possibly want to know about what’s there. What kind of content it is (in our case, creative work), its family friendliness, when it was created, who made it, what it’s about, and a load of other useful things.

### How does it work?

For this section, I’ve enlisted a little help from Kelis…

> ♪♪ My schema brings all the search engine spiders to the yard,
> 
> ♪♪ And they're like, “This web page clearly describes a creative piece of work, thanks, I’ll index that.”
> 
> ♪♪ Damn right, it clearly describes a creative piece of work, attributes the contributors, states when it was published, states on whose behalf the work was done, states the source organisation responsible and oh it’s family friendly (nothing explicit here).
> 
> ♪♪ I can teach you, but I have to charge

And if THAT didn’t make everything obvious, here’s how structured data works.

Handy labels in the code save search engine spiders the effort of digging through all the content and drawing their own (potentially wrong) conclusions about its subject matter, originators, how to display it and whether to index it at all.

It’s like looking at a laptop in a shop window. We can tell it’s a laptop by the characteristics i.e. it has a screen, keyboard, trackpad. That’s what we can see, but what if you wanted to know more about the specifications? For example the hard-drive capacity, or the installed memory. You can’t tell that by looking; this information has to be explicitly presented to you. (Unless you are some kind of Terminator.)

Search engine spiders know when they are crawling a website. Using HTML semantics to mark up the document correctly (for example enclosing text in paragraph tags and using correct sectioning elements like every good developer), tells the spiders the “visible” characteristics. Structured data gives search engine spiders a whole other level of explicit information on top.

### Schema.org – a shared vocabulary (techy, this bit)

Founded by Google, Microsoft, Yahoo and Yandex, Schema.org vocabularies aim to create and support a common set of terms and systems for structured data markup on web pages. They propose using the Schema.org vocabulary along with other formats (Microdata, RDFa, or JSON-LD) to mark up website content with metadata.

The markup is recognised by search engine spiders (and similar programs called parsers), and helps them “understand” the meaning of the content, as intended by the people who know it best – the originator(s). (A side effect of this is a more <a href="https://en.wikipedia.org/wiki/Semantic_Web" target="_blank" rel="noopener">semantic web</a> overall)

### Why do it?

#### 1) SEO benefits

> “One of the latest evolutions in SEO is called schema markup. This new form of optimization is one of the most powerful, but least-utilized forms of SEO available today. Once you grasp the concept and method of schema markup, you can boost your website in the search engine result pages (SERPs).”
  
> &#8211; <a href="https://blog.kissmetrics.com/get-started-using-schema/" target="_blank" rel="noopener">Kissmetrics blog</a>

> “When you use structured data to mark up content, you help Google better understand its context for display in Search, and you achieve better distribution of your content to users from Search.”
  
> &#8211; <a href="https://developers.google.com/search/docs/guides/mark-up-content" target="_blank" rel="noopener">Google developers blog</a>

Our case studies are being recognised as creative work items by Google Search Console, so we must be doing something right. Our markup information contributes to Google’s ‘<a href="https://www.google.com/intl/bn/insidesearch/features/search/knowledge.html" target="_blank" rel="noopener">Knowledge Graph</a>’, increasing the chances of our content being relevant and discoverable, and allowing rich data to be presented directly in the search engine results. Woohoo! Rich data!

<img class="alignnone wp-image-12401 size-full" src="https://www.mark-making.com/wp-content/uploads/2017/11/schemawin.png" alt="Our creative work Structured data schema" width="1161" height="575"  />

#### 2) Accessibility (which is also good for SEO)

> “Accessibility refers to the experience of users who might be outside the narrow range of the typical user, who might access or interact with things differently than you expect. Specifically, it concerns users who are experiencing some type of impairment or disability — and bear in mind that that experience might be non-physical or temporary.”
  
> &#8211; <a href="https://developers.google.com/web/fundamentals/accessibility/" target="_blank" rel="noopener">Google developers blog</a>

Users with visual, auditory or motor impairment need to navigate and consume content using screen readers, keyboards and other assistive methods. You cannot guarantee or promise a really good experience just within a restrictive CMS or off the shelf themes – schema helps to mitigate the risk of a bad deal for assisted users.

Oh, and <a href="https://www.euractiv.com/section/digital/opinion/web-accessibility-will-now-be-the-law-of-the-land-in-europe/" target="_blank" rel="noopener">accessibility is the law</a> for public sector websites. This is a benchmark everyone on the web should aspire to.

#### 3) Developer satisfaction

As a developer, I would be doing my colleagues &#8211; who put the time and effort in to visualise and create this content &#8211; a disservice if I didn’t put in the necessary time and effort to make sure it’s easy to find on the web for both humans and machines.

## Remember that clever imagery stuff I mentioned?

Our case studies are very image heavy, full of lovely work shots. We’ve put in place two different image loading strategies:

  1. **Lazy loading
  
** Lazy loading is a design pattern commonly used in computer programming to defer initialisation of an object until the point at which it is needed.
  2. **picture elements**
  
    The browser will choose the most suitable source according to the current layout of the page (the constraints of the box the image will appear in) and the device it will be displayed on (e.g. a normal or hiDPI device.)

&#8211;

## So there you have it.

Our website is by no means the perfect shining example. A website is a living thing that grows with you, and we are always learning more about using these methods to make our website accessible, discoverable and relevant, allowing users (regardless of any impairment) to come and enjoy our content.

As for the machines, in essence we’re just creating connected nodes of information, with clearly defined meaning and purpose that can be accessed easily by search engines. We give them the ability to extract and present this information in the best way possible.

This is the recommended and most organic way to boost your content.

The end

&#8211;

## Can’t get enough of this Schema stuff?

**Read on for the specific schema we used to achieve all this wonderfulness.**

### Gettin’ my schema face on </p>

 [1]: https://www.mark-making.com/mark-making-website-going-mobile/