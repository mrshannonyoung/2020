---
title: Audible and inaudible data transfer – is silence golden?
author:
  - Shannon Young
date: 2019-03-07T10:38:56+00:00
url: /audible-inaudible-/
featured_image: "G9LHyxgE3m"
featured_image_alt: "The world’s most valuable resource is no longer oil, but data"
highlight: true
categories: thoughts
tags:
  - SSG
  - Smart Speakers
  - technology
  - voice
---
I can get behind the accessibility and practical benefits of voice-enabled smart technology. (I even [wrote about designing for Zero/Invisible UI][1]).

However, I have reservations about owning smart speakers and smart home devices like Alexa, Google Home Hub, and Apple HomePod.

Unfortunately, not owning one doesn’t help me to avoid interacting with them. In the age of GDPR, a company has to get my explicit consent to use my data for marketing purposes &#8211; but can I insist that friends get my consent to turn the Alexa on? If I did, I’m sure jokes about lending me a tin foil hat would follow pretty quickly.

Are my misgivings unfounded? Or am I righteous in my smart-speaker-paranoia? I hope this article will help you make up your own mind.

>The world’s most valuable resource is no longer oil, but data

I read that in the [Economist][2]. And it lends weight to the powerful &#8211; but unprovable &#8211; theory that companies like Google and Amazon are willing to sell their smart devices at a loss, just so consumers will have one in their home.

Because it’s the _data_ gathered while listening to what’s going on in our homes that has the real money-making potential. And if they’re after maximum coverage, it seems to be working:

>In December 2018 the Alexa service crashed briefly on Christmas, as thousands of new device owners tried to connect their Echo to Amazon’s servers around the same time.

↳ [Techcrunch][3]

In the first half of 2018, [Ofcom][4] found that 16% of 16-24s, 25-34s, and 35-54s in the UK owned a smart speaker. That’s not exactly a niche age range, or a small chunk of the market.

Even my three-year-old uses voice search on Youtube Kids to find what she wants, with requests such as “Hulk Smash and “Hi-ho the merry-o (more commonly known as “I’ve Got No Strings from Pinocchio).

This is mixed in with the occasional frustration of the wrong results being returned through three-year-old pronunciation, like “bampire returning videos of Papayas.

## But what about the types of data transfer mentioned in the title of this blog post?

<img class="alignnone wp-image-15076 size-full" src="https://www.mark-making.com/wp-content/uploads/2019/03/1000x500_SmartSpeaker.jpg" alt="Apple HomePod" width="1000" height="500"  />

**Let’s have some definitions, shall we?**

## Audible

For many people, the most familiar form of audible sound transfer would be AM/FM/DAB radio. Sound can transmit a huge amount of data very reliably. Good stuff. You ask your smart speaker for the temperature; it responds with a number. That’s audible data transfer. Even better, audible audio is honest and transparent.

## Inaudible (ultrasound)

Ultrasound can be used to silently transfer data from one device to another. They can embed ultrasound communications into other media. Because ultrasound uses a different frequency band, it can be played alongside other audio (even from the same loudspeaker) without interference or loss of reliability.

**This is one of the things that makes me nervous about smart speakers. If I owned one, I wouldn’t just be hyper-aware of what I say within earshot (or should that be mic-shot). I’d also be** worrying **about what it’s saying to other smart devices around the place.**

I looked at ways in which audible and inaudible data transfer are being applied and used in different sectors&#8230;

## Audible applications for good

### Better search results and cute-looking robots

There is no doubt in my mind that voice, natural language processing (NLP)* and conversational user interfaces (CUI) will be the future of search and interaction on the web.

_This_ is why HTML semantics (tags that tell screen readers about styles and emphasis in online text) and ARIA (attributes developers can use on elements when they aren’t screen-reader friendly) are now more important to [conversational semantics][5] than ever.

If a machine can’t respond with the same emphasis and meaning, it falls short of a human-like interaction. Steps to break down this barrier with even more human UX are always welcome &#8211; even if (especially when) the outcome is cute-looking robots.

>Giving human-like traits to voice interaction creates a relationship between human and device. This anthropomorphisation can manifest in various ways: patterns of lights, shapes that bounce, abstract spherical patterns, computer-generated voice, and sounds.

↳ [Source][6]

## Quality of life

<img class=" wp-image-15073" src="https://www.mark-making.com/wp-content/uploads/2019/03/1000x400_Stats.gif" alt="" />

Of people who own smart speakers surveyed by [YouGov][7]:

  * 71% say that they use their smart speaker for playing music.
  * 58% use it to answer general questions.
  * 49% use it to set alarms and reminders.
  * 47% access news or weather forecasts
  * 34% interact with other smart devices using their speaker
  * 26% bought their smart speaker specifically because it can integrate with other devices

### Advertising &#8211; Burger King stunt

>Audio has the power to cut through the clutter — often with a more emotionally resonant and intimate message than other forms of advertising.

↳ [recode.net][8]

Burger King’s “Connected Whopper campaign had a TV spot that took advantage of Google Home, by using the “OK Google prompt to activate Home to read the Whopper’s Wikipedia page (which did eventually back-fire).

{{ e2yYeTlAl5I }}

## Inaudible applications for not-necessarily-good

### Tracking

[Some ads have inaudible sounds in them][9] (sometimes called beacons) which smart devices nearby can pick up. Browser cookies (the things you agree to and ignore on every website ever) use these sounds to keep track of what ads you’ve seen, how long you watched them for, and whether you act by going online to search for or buy the product. Creepy.

>Cross-device tracking can also be performed through the use of ultrasonic inaudible sound beacons. Compared to probabilistic tracking through browser fingerprinting, the use of audio beacons is a more accurate way to track users across devices.

↳ [Center for Democracy and Technology][10]

### Outright malicious intent

Researchers have created a program to translate normal voice commands into frequencies too high for humans to hear, then tested whether those commands would be obeyed by 16 voice control systems, including Siri, Google Now, Alexa, and a number of in-car interfaces.

>The researchers were able to issue a number of commands, including activating Siri to initiate a FaceTime call on iPhone, activating Google Now to switch the phone to the airplane mode, and even manipulating the navigation system in an Audi automobile

  * [Inaudible ultrasound commands can be used to secretly control Siri, Alexa, and Google Now][11]
  * [Malware communicates at a distance of 65 feet using built-in mics and speakers.][12]

### Variation on the not-so-good theme: ‘ambient’ computing (pervasive computing)

Ambient computing devices operate invisibly in the background without the active participation of the user. Their purpose is to identify, monitor and listen to us and respond to ‘perceived’ needs and habits.

### For example:

The ability to analyse facial expressions and detect a range of feelings to personalise app’s responses.

>The emotions detected are anger, contempt, disgust, fear, happiness, neutral, sadness, and surprise. These emotions are understood to be cross-culturally and universally communicated with particular facial expressions. You can use the Emotion API to track how a person or a crowd responds to your content over time.

Companies like Microsoft, Google, Samsung, Apple and Amazon are investing in this next phase of computing, which is the foundation and infrastructure for ambient computing.

>It is an expression of what Tim Cook has described as, &#8216;iOS everywhere'.

Microsoft is working on a dedicated ambient computing device that will be able to sense the presence of the user and respond accordingly. Morbidly curious? Here’s a [list of tech][13] that recognises human emotions.

## Ethics and privacy

<img class="alignnone wp-image-15075 size-full" src="https://www.mark-making.com/wp-content/uploads/2019/03/1000x400_SteveMann.jpg" alt="Steve Mann" width="1000" height="400"  />

It’s this kind of activity that has sparked an effort from some quarters to surveil the surveillance &#8211; recording, monitoring, studying and analysing surveillance systems. This is known as “sousveillance, a term coined by privacy advocate Steve Mann. (Aside: Mann is also one of my heroes. He’s the original cyborg, and he’s regarded as the father of wearable computing. Here’s his [TEDx Talk][14].)

The capabilities of inaudible data transfer and ambient computing do raise some questions. Here’s some further reading:

  * [Police stop people for covering their faces from facial recognition camera then fine man £90.][15]
  * [Your digital identity has three layers, and you can only protect one of them.][16]
  * [How Amazon, Google and Apple use your smart speaker data. In a word, adverts.][17]

## Is it really a choice?

So, am I being paranoid, or is this a bit invasive? When there are tools like Siri in my colleagues’ computers, and Alexas or Sonos bars in the living rooms of half my friends, is there a socially acceptable way for me to opt out of being listened-in to? Is it even that a big deal?

I think it depends on how all this data gets used, and most likely only time will tell.

To round things off, here are a few examples of products being developed to counter the surveillance culture:

  * [Phantom reflectacles][18] (as seen on Luther, sort of)
  * [Stealth Wear: Counter-Surveillance Fashion][19]
  * [Nine Gifts the NSA Will Hate][20]

&#8211;

*Not to be confused with the other NLP: neurolinguistic programming

 [1]: https://www.mark-making.com/design-for-invisible-ui/
 [2]: https://www.economist.com/leaders/2017/05/06/the-worlds-most-valuable-resource-is-no-longer-oil-but-data
 [3]: https://techcrunch.com/2018/12/26/alexa-crashed-on-christmas-day/
 [4]: https://www.ofcom.org.uk/__data/assets/pdf_file/0022/117256/CMR-2018-narrative-report.pdf
 [5]: https://alistapart.com/article/conversational-semantics
 [6]: https://medium.muz.li/voice-user-interfaces-vui-the-ultimate-designers-guide-8756cb2578a1
 [7]: https://yougov.co.uk/topics/politics/articles-reports/2018/04/19/smart-speaker-ownership-doubles-six-months
 [8]: https://www.recode.net/2018/1/25/16929030/voice-interface-google-amazon-echo-assistant-advertising-audio-brand-platform
 [9]: https://arstechnica.com/tech-policy/2015/11/beware-of-ads-that-use-inaudible-sound-to-link-your-phone-tv-tablet-and-pc/
 [10]: https://cdt.org/
 [11]: https://www.theverge.com/2017/9/7/16265906/ultrasound-hack-siri-alexa-google
 [12]: https://arstechnica.com/information-technology/2013/12/scientist-developed-malware-covertly-jumps-air-gaps-using-inaudible-sound/
 [13]: https://azure.microsoft.com/en-us/services/cognitive-services/
 [14]: https://www.youtube.com/watch?v=Z9qiWqRPrcw
 [15]: https://www.independent.co.uk/news/uk/crime/facial-recognition-cameras-technology-london-trial-met-police-face-cover-man-fined-a8756936.html
 [16]: https://qz.com/1525661/your-digital-identity-has-three-layers-and-you-can-only-protect-one-of-them/
 [17]: https://www.the-ambient.com/features/how-amazon-google-apple-use-smart-speaker-
 [18]: https://www.reflectacles.com/phantom
 [19]: https://weburbanist.com/2013/04/01/stealth-wear-counter-surveillance-fashion-protects-privacy/
 [20]: https://www.motherjones.com/politics/2013/12/christmas-presents-nsa/