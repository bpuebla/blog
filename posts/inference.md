---
title: "a broken inference api"
date: "2025-07-20"
---

Remember last week, when I said:

>got an email yesterday: PlayAI is shutting down after being acquired by Meta. endpoints had been working sketchily for the past few weeks, and they finally announced that monthly plans will be cancelled automatically.
>
>so, any project using their api will need to be reworked. 
>
>well, now i've learnt to own my own inference and not rely much on paid endpoints. rather work with self-hosted open source models, and even better if hosted locally without depending on a cloud provider.

I betrayed my own tought piece: I ended up using a different API endpoint. Why? Two reasons:

- I am trying to ship fast. It still is a partial technical debt that might bite me later on (like with PlayHT). 
- The open-source models are not on the same level as the closed alternative (limited to English only, robotic voices).

I still prefer to deploy inference myself, but until some high-fidelity open-source model comes along, this will do.