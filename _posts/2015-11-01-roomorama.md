---
layout: post
title:  "Roomorama"
date:   2015-11-01
categories: work
class: roomorama
---

<figure markdown='1'>
![Roomorama intro]({{ site.baseurl }}/images/work/roomorama-intro.gif)
</figure>

## Vacation rentals in the travel space

High intensity, fast paced, and working within a close neat team; [Roomorama](https://roomorama.com) is a place where the team took pride in what they do. It's a place I truly enjoy the international culture where almost each individual represents a nation on it's own. Travel and culture, what better way to have discover learning and insights every single day!

Similar space to other short term rental, roomorama was a space for hosts (owners) and guests (renters) to fulfill each other's demand. We were however positioned slightly different that other players since it was a shift towards the B2B and B2C space as a property aggregator in recent years.

As with any role, the first was to inherit and get onboarded to task at hand. However without a designer or proper documentation in place, it was my job to work with team to fully understood what the current challenges were. So I rolled up my sleeves and dig into the Rails backend for the first time, couple with multiple sessions of walking through the experience with the product manager.

<figure markdown='1'>
![Roomorama white boarding]({{ site.baseurl }}/images/work/roomorama-whiteboard.jpg)
![Roomorama planning]({{ site.baseurl }}/images/work/roomorama-plan.jpg)
<figcaption>Structure, evaluate, and plan</figcaption>
</figure>

I took this opportunity to put in place some level of documentation of all the userflows we had (aside from the usual code based wiki) as I capture the full scope of functionality we had.

<figure markdown='1'>
![Roomorama site flows]({{ site.baseurl }}/images/work/roomorama-flows.gif)
<figcaption>Capturing multiple userflows</figcaption>
</figure>

As the documentation was conducted, I worked with our data scientist to evaluate some of our analytics on coversations, drop offs, and anywhere we could identify as potential area. While at the same time ran some research to marry both the quantitative and qualitative data.

<figure markdown='1'>
![Roomorama site flows]({{ site.baseurl }}/images/work/roomorama-personas.png)
<figcaption>Data became personas, for better relationship</figcaption>
</figure>

As the challenges, became clear on what to focus on, the roadmap was better defined to solve for some of the key areas for both host and guests. Guest asked for clarity and transparency in content, hosts for easier inventory managment. Both very different problem to tackle.

## First up, the hosts

<figure markdown='1'>
![Roomorama sorting]({{ site.baseurl }}/images/work/roomorama-sorting.jpg)
<figcaption>Sorting content hierachy</figcaption>
</figure>

Sorting through all the data points revealed a structure has to be reworked to better surface important element to the both hosts and guests.

<figure markdown='1'>
![Roomorama host page before]({{ site.baseurl }}/images/work/roomorama-host.png)
<figcaption>Host dashboard before</figcaption>

![Roomorama host page after]({{ site.baseurl }}/images/work/roomorama-host2.png)
<figcaption>Host dashboard after</figcaption>
</figure>

To ensure we deal with the source of the confusion, I focus on improving the flow of the host management tool. Incremental steps help solve for confusion and error, but also help ease the flow by giving plenty of breathing space for the host to focus on each task. Inital test show that hosts now spend an average of 8 mins vs 17 mins before to complete the basic requirement to host.

## Make it easy for guests

<figure markdown='1'>
![Roomorama property page before]({{ site.baseurl }}/images/work/roomorama-guests.jpg)
<figcaption>Property page before</figcaption>

<div class='embed-container'><iframe src='https://player.vimeo.com/video/192870553' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
<figcaption>Property page after. pw: rooms</figcaption>
</figure>

Realising that people where spending too much time browsing and hoping between with bounce at about 60-80%, it was down to 2 factors. People was either shopping around for prices, or they were not finding what they needed.

Changing the content hierachy and surfacing easy to find information has helped reduce the bounce down to 40% and slighltly bump conversation here. It was important to provide clarity on what a guest would be intereted in, but the outcome was actually a realisation of the combination of those 2 factors, if I were to sum it up on a high level.

## Power of design framework

One of the thing that really allowed us to move quickly was down to the fact that I spent alot of time to build a scalable and modular design framework. We had to refactor a lot of our code base using the ``Block--Element__Modifier`` (slightly modified) model.

The outcome was [Aurora Design](https://staging.roomorama.com/design), as we slowly move away from larger more oppinionated framework like bootstrap at the time.

Writing front end work was tedious and tough with a lot of the dependicies from the start, but as we work through and uncouple them one-by-one, we were able to work through stories after stories in a faster pace.

<figure markdown='1'>
<div class='embed-container'><iframe src='https://player.vimeo.com/video/192872796' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>
<figcaption>SVG animation experiements with velocity.js pw: rooms</figcaption>
</figure>

It helped us free up a lot more room to experiment and exploration, which was a huge payoff for the hours spent at the start.

Learning, planning, and executing. This was a great process to went through and one of the transformative journey in my career. I was fortunate to experience it, thanks to the awesome Roomorama team.

<figure markdown='1'>
![Roomorama team]({{ site.baseurl }}/images/work/roomorama-team.jpg)
<figcaption>Diverse working group and a fun bunch to work with</figcaption>

![Roomorama team travelling]({{ site.baseurl }}/images/work/roomorama-travel.jpg)
<figcaption>Development team travels to Cambodia</figcaption>
</figure>

