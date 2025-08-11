---
theme: default
background: images/background.webp
title: TAG Skywarn
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# TAG Skywarn 

Enhancing Severe Weather Safety Through Amateur and GMRS Radio

<div class="mt-12 py-1" hover:bg="white op-10">Oct 3–4, 2025 • Chattanooga Hamfest</div>

<div class="absolute bottom-2 left-4 text-xs text-gray-400">
  SKYWARN® and the SKYWARN® logo are registered trademarks of the 
  National Oceanic and Atmospheric Administration, used with permission.
</div>

---
transition: fade-out
layout: center
class: text-center
glowSeed: 205
team:
  - name: Philip Sutherland
    ham: KQ4EVW
    img: /images/placeholder.webp
  - name: Mark Rose
    ham: KA0YDC
    img: /images/placeholder.webp
  - name: Jim Knight
    ham: KD4EHN
    img: /images/placeholder.webp
  - name: James Wells
    ham: KO4MKP
    gmrs: WRKK629
    img: /images/team/jameswells.jpg
  - name: Stuart Neil
    ham: KQ4KIH
    img: /images/placeholder.webp
  - name: Ronnie Craig
    gmrs: WRKJ453 
    img: /images/placeholder.webp
  - name: Jeff Martin
    ham: W4EMZ
    img: /images/placeholder.webp
  - name: Gary Ownsby
    ham: AK4ZX
    img: /images/placeholder.webp
  - name: Dewayne Siddon
    ham: KE4IDH
    img: /images/placeholder.webp
  - name: William Roush
    ham: W3UWU
    gmrs: WRWF503
    img: /images/team/williamroush.png
---

# Meet the Team

<script setup>
const base = import.meta.env.BASE_URL
const pub  = (p) => p ? base + p.replace(/^\/+/, '') : null
</script>

<div class="grid grid-cols-6 gap-6 mt-8">
  <v-clicks>
    <div
      v-for="(person, index) in $frontmatter.team"
      :key="person.name"
      class="flex flex-col items-center text-center transition-all duration-500 ease-in-out"      
      :class="$clicks < index +  1 ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'"
    >
      <img :src="pub(person.img)" :alt="person.name" class="w-28 h-28 rounded-full object-cover shadow" />
      <div class="mt-3 font-bold">{{ person.name }}</div>
      <div v-if="person.ham || person.gmrs" class="text-sm text-gray-400">
        {{ [person.ham, person.gmrs].filter(Boolean).join(' / ') }}
      </div>
    </div>
  </v-clicks>
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
items:
  - title: Mission & Purpose
    icon: satellite-weather
    color: blue
    sections:
      - head: Support NWS Warning Operations
        text: Provide timely, accurate ground reports to enhance severe weather forecasts and warnings.
      - head: Bridge Between Public & Meteorologists
        text: Deliver the human observations radar can’t capture.    
      - head: Promote Public Safety
        text: Help communities prepare for and respond to severe weather threats.
  - title: Who We Are
    icon: person
    color: blue
    sections:
      - head: Nationwide Network
        text: Over 300,000 trained volunteers across the United States.
      - head: Diverse Backgrounds
        text: Amateur radio operators, emergency responders, weather enthusiasts, and community members.    
      - head: Local & Regional Ties
        text: Organized at county or regional levels, working closely with NWS offices.
  - title: How We Operate
    icon: radio-combat
    color: blue
    sections:
      - head: Real-Time Reporting
        text: Observations sent via ham radio nets, phone hotlines, apps, or online forms.
      - head: Training & Certification
        text: NWS-led courses on severe weather recognition and safe reporting practices. 
      - head: Integration With Emergency Services
        text: Coordinate with local emergency management and first responders.
        

---

# What Is Skywarn?

<div grid grid-cols-3 gap-3 h-75>
  <v-clicks>
    <div border="2 solid white/5" rounded-lg overflow-hidden bg="white/5" backdrop-blur-sm h-full
      v-for="(item, index) in $frontmatter.items"
      class="transition-all duration-500 ease-in-out"      
      :class="$clicks < index +  1 ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'">
      <div flex items-center bg="white/10" backdrop-blur px-3 py-2 rounded-md>
        <div :class="`i-carbon:${item.icon} text-${item.color}-300`" text-sm mr-2 />
        <div font-semibold>
          {{ item.title }}
        </div>
      </div>
      <div px-4 py-3>
        <div flex flex-col gap-3>
          <div v-for="(section, index) in item.sections">
            <div text-sm font-medium>{{ section.head }}</div>
            <div text-xs opacity-70>{{ section.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </v-clicks>
</div>

<div class="text-xs opacity-70 mt-4">
  Skywarn began in the 1960s after deadly tornado outbreaks highlighted the need for trained spotters.
</div>

---
layout: image-left
image: /images/hamradio.webp
---

# TAG (TN-AL-GA) Skywarn Today

Weekly Net: TAG Skywarn Net meets every Tuesday at 8:00 PM Eastern on 145.390 MHz with 107.2 Hz tone. GMRS operators join on NGGMRS Northern Core repeaters starting at 7:00 PM.

Training Series: Skywarn Training Schedule covers a wide range of topics - from heat/hurricane prep to reporting protocols and technical drills (e.g., What3Words, simplex relay training).

---
transition: slide-up
level: 2
items:
  - title: What We Do
    icon: checkbox-checked
    color: green
    items:
      - icon: binoculars
        text: Observe & Report
        subtext:  Watch for severe weather hazards (tornadoes, hail, flooding, damaging winds) and report promptly with location and time.
      - icon: health-cross
        text: Stay Safe
        subtext: Observe from safe locations - never put yourself in harm’s way.
      - icon: events
        text: Coordinate
        subtext:  Work with net control, emergency management, and fellow spotters to share accurate updates.
  - title: What We Don't Do
    icon: close
    color: red
    items:
      - icon: thunderstorm-severe
        text: No Storm Chasing for Thrills
        subtext: Spotting is not recreational storm chasing - safety & service come first.
      - icon: police
        text: No Emergency Response
        subtext:  Do not enter damaged areas or perform rescues unless you are trained and authorized.
      - icon: user-simulation
        text: No Off-Criteria Reports
        subtext:  Report only significant severe weather or damage as outlined in training.
---

# Spotter Roles & Reporting
<div mt-6 grid grid-cols-2 gap-6>
  <div
    v-for="(item, index) in $frontmatter.items"
    :key="item.title"
    v-click
    border="2 solid"
    rounded-lg overflow-hidden
    class="transition-all duration-500 ease-in-out"
    :class="[
       `border-${item.color}-800`,
       `bg-${item.color}-800/20`,
        $clicks < index + 1 ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
    ]"
  >
    <div :bg="`${item.color}-800/40`" px-4 py-2 flex items-center>
      <div :class="`i-carbon:${item.icon} text-${item.color}-300`" text-xl mr-2 aria-hidden="true" />
      <span font-bold>{{ item.title }}</span>
    </div>
    <div px-4 py-3 flex flex-col gap-2>
      <div
        v-for="childItem in item.items"
        :key="childItem.text"
        flex items-center gap-2 py-1 rounded-lg p-2
        :class="`bg-${item.color}-900/30`"
      >
        <div
          style="min-width: 2rem"
          :class="`i-carbon:${childItem.icon} text-${item.color}-400`"
          text-xl aria-hidden="true"
        />
        <div>
          <div font-bold>{{ childItem.text }}</div>
          <div text-sm opacity-80>{{ childItem.subtext }}</div>
        </div>
      </div>
    </div>
  </div>
</div>


---
layout: default
---

# Radio Communications: The Backbone

Amateur radio nets have long been crucial during severe events, especially when conventional systems fail.  
**NWS Morristown (MRX)** actively monitors these nets and relies on spotter reports.

This includes HF, VHF/UHF, APRS, EchoLink, AllStarLink, and internet links.

When radio isn’t available, reports can also be sent via the mPING app, NWS spotter forms, or by phone.

## Strengthening With GMRS

North Georgia GMRS (NGGMRS) has built an enhanced Skywarn network, expanding coverage across SE Tennessee, NW Georgia, and NE Alabama.  

✅ Redundant paths matter:  
- Primary: 145.390 MHz (-, 107.2 Hz)  
- Backups: 146.610 MHz (-, 107.2 Hz) or simplex 146.535/565/580/147.555  


---
level: 2
---

# Why It Matters in Chattanooga

Local spotters—hams, GMRS users, public service volunteers—are the **frontline eyes & ears** for the NWS.  

Weekly practice and shared infrastructure build resilience before critical weather strikes.

**When Nets Activate**  
- Triggered by NWS MRX or Emergency Management during severe watches/warnings.  
- Activation notices pushed via the *TN-AL-GA Regional Skywarn Net* Telegram channel.  
- Reports relayed directly to NWS offices.


# How to Plug In

- 📚 Attend/host NWS Skywarn training *(covers storm ID, reporting methods, and safety)*  
- 📻 Join Tuesday nets (Ham 8:00 PM / GMRS 7:00 PM).  
- 📝 Practice correct, criteria-based reporting.  
- 📢 Recruit & spread awareness - more trained spotters = stronger coverage.