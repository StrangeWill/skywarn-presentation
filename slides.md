---
# You can also start simply with 'default'
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: images/background.webp
# some information about your slides (markdown enabled)
title: TAG Skywarn
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# open graph
seoMeta:
  # By default, Slidev will use ./og-image.png if it exists,
  # or generate one from the first slide if not found.
  ogImage: auto
  # ogImage: https://cover.sli.dev
---

# TAG Skywarn 

Enhancing Severe Weather Safety Through Amateur and GMRS Radio

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Chattanooga Hamfest, 2025/10/03 - 2025/10/04
</div>

---
transition: fade-out
layout: center
class: text-center
team:
  - name: Philip Sutherland
    ham: KQ4EVW
    img: images/placeholder.webp
  - name: Jim Knight
    ham: KD4EHN
    img: images/placeholder.webp
  - name: James Wells
    ham: KO4MKP
    img: images/placeholder.webp
  - name: William Roush
    ham: W3UWU
    gmrs: WRWF503
    img: images/team/williamroush.png
---

# Meet the Team

<script setup>
const base = import.meta.env.BASE_URL
const pub  = (p) => p ? base + p.replace(/^\/+/, '') : null
</script>

<div class="grid grid-cols-3 gap-6 mt-8">
  <template v-for="person in $frontmatter.team" :key="person.name">
    <div class="flex flex-col items-center text-center">
      <img :src="pub(person.img)" :alt="person.name" class="w-28 h-28 rounded-full object-cover shadow" />
      <div class="mt-3 font-bold">{{ person.name }}</div>
      <div v-if="person.ham || person.gmrs" class="text-sm text-gray-400">
        {{ [person.ham, person.gmrs].filter(Boolean).join(' / ') }}
      </div>
    </div>
  </template>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: fade-out
---

# What Is Skywarn?

Skywarn is a National Weather Service (NWS) volunteer storm spotter program founded in 1965, with over 300,000 trained volunteers across the U.S.

Mission: Provide real-time, on-the-ground observations to help NWS with severe weather forecasting and warning.

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
transition: slide-up
level: 2
---

# Spotter Roles & Reporting

Spotters report rotating wall clouds, funnel clouds, lightning strikes, hail, flooding, winter storms, wildfires, and more

These ground-truth reports empower forecasters, emergency managers, and public safety agencies with localized insights.

---
layout: two-cols
layoutClass: gap-16
---

# Radio Communications: The Backbone

Amateur radio nets have long been crucial during severe events, especially when conventional communications fail

This includes HF, VHF/FM, APRS, Echolink, and integration of internet-based and landline relays.

---
layout: image-right
image: https://cover.sli.dev
---

# AG (TN-AL-GA) Skywarn Today

Weekly Net: TAG Skywarn Net meets every Tuesday at 8:00 PM Eastern on 145.390 MHz with 107.2 Hz tone. GMRS operators join on NGGMRS Northern Core repeaters starting at 7:00 PM.

Training Series: Skywarn' Training Schedule covers a wide range of topics =- from heat/hurricane prep to reporting protocols and technical drills (e.g., What3Words, simplex relay training).

---
level: 2
---

# Strengthening With GMRS

CARC and NGGMRS have built an enhanced Skywarn network via seven new GMRS repeater sites, expanding coverage across Southeast Tennessee, Northwest Georgia, and Northeast Alabama. This partnership broadens participation and tech capability.

---
level: 2
---

# Why It Matters in Chattanooga

Local spotters—hams, GMRS users, public service volunteers—form the frontline of severe weather reporting.

Regular weekly practice, training, and shared infrastructure build resilience ahead of critical weather incidents.

# How to Plug In

Steps for attendees:
- Attend or host Skywarn spotter training (offered frequently by NWS).
- Join Tuesday night nets via hHm or GMRS.
-  Practice proper storm-spotting and reporting protocols.
- Spread awareness and recruit new spotters.