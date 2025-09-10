---
theme: default
background: images/background.webp
title: TAG SKYWARN®
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# TAG SKYWARN® 

Enhancing Severe Weather Safety Through Amateur and GMRS Radio

<div class="mt-12 py-1" hover:bg="white op-10">Oct 3–4, 2025 • Chattanooga Hamfest</div>

<div class="absolute bottom-2 left-4 text-xs text-gray-400">
  SKYWARN® and the SKYWARN® logo are registered trademarks of the 
  National Oceanic and Atmospheric Administration, used with permission.
</div>


<style>
.text-center h1 {
  background-color: #e0e0e0ff;
  background-image: none;
  text-align: center;
}
</style>

---
transition: fade-out
layout: center
class: text-center
glowSeed: 205
team:
  - name: Mark Rose
    title: District Coordinator
    ham: KA0YDC
    img: /images/placeholder.webp
  - name: Philip Sutherland
    title: Net Control
    ham: KQ4EVW
    img: /images/team/philipsutherland.jpg
  - name: Jim Knight
    title: Alt Net Control
    ham: KD4EHN
    img: /images/placeholder.webp
  - name: James Wells
    title: Net Control
    ham: KO4MKP
    gmrs: WRKK629
    img: /images/team/jameswells.jpg
  - name: Stuart Neil
    title: Net Control
    ham: KQ4KIH
    img: /images/team/stuartneil.jpg
  - name: Ronnie Craig
    title: Net Control
    gmrs: WRKJ453 
    img: /images/placeholder.webp
  - name: Jeff Martin
    ham: W4EMZ
    img: /images/placeholder.webp
  - name: Gary Ownsby
    ham: AK4ZX
    img: /images/team/garyownsby.jpg
  - name: Dewayne Siddon
    title: ARES/ACS Emergency Coordinator
    ham: KE4IDH
    img: /images/team/dewaynesiddon.jpg
  - name: William Roush
    title: Net Control
    ham: W3UWU
    gmrs: WRWF503
    img: /images/team/williamroush.png
---

# Meet the Team

<script setup>
const base = import.meta.env.BASE_URL
const pub  = (p) => p ? base + p.replace(/^\/+/, '') : null
</script>

<div class="grid grid-cols-5 gap-6 mt-5">
  <v-clicks>
    <div
      v-for="(person, index) in $frontmatter.team"
      :key="person.name"
      class="flex flex-col items-center text-center transition-all duration-500 ease-in-out"      
      :class="$clicks < index +  1 ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'"
    >
      <img :src="pub(person.img)" :alt="person.name" class="w-28 h-28 rounded-full object-cover shadow" />
      <div class="mt-3 font-bold">{{ person.name }}</div>
      <div v-if="person.title" class="text-sm text-gray-400">
        {{ person.title }} 
      </div>
      <div v-if="person.ham || person.gmrs" class="text-sm text-gray-400">
        {{ [person.ham, person.gmrs].filter(Boolean).join(' / ') }}
      </div>
    </div>
  </v-clicks>
</div>

---
transition: fade-out
class: text-center
---

# SKYWARN® History

<div class="mt-6 grid grid-cols-5 gap-4">
  <v-clicks>
    <div class="rounded-xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:satellite-weather text-blue-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-blue-200/90 font-semibold">1940s</div>
      </div>
      <div class="text-sm font-semibold">Early Spotter Groups</div>
      <div class="text-xs opacity-80">
        Organized volunteers protect critical sites (e.g., munitions plants).  
        ~200+ local networks by 1945.
      </div>
    </div>
    <div class="rounded-xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:rain-drop text-blue-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-blue-200/90 font-semibold">1950s</div>
      </div>
      <div class="text-sm font-semibold">Proving Value</div>
      <div class="text-xs opacity-80">
        Spotters give advance tornado warnings;  
        NWS begins public severe weather forecast products.
      </div>
    </div>
    <div class="rounded-xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:warning-alt text-red-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-red-200/90 font-semibold">1965</div>
      </div>
      <div class="text-sm font-semibold">Palm Sunday Outbreak</div>
      <div class="text-xs opacity-80">
        82 tornadoes, 260 deaths; spotters save lives but networks had dwindled -   
        a wake-up call for national training & recruiting.
      </div>
    </div>
    <div class="rounded-xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:tools text-emerald-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-emerald-200/90 font-semibold">Post-1965</div>
      </div>
      <div class="text-sm font-semibold">Program Built</div>
      <div class="text-xs opacity-80">
        NWS renews training & recruitment, foundation for today’s  
        <span class="font-semibold">SKYWARN® Spotter Program</span>.
      </div>
    </div>
    <div class="rounded-xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:earth text-teal-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-teal-200/90 font-semibold">Today</div>
      </div>
      <div class="text-sm font-semibold">Nationwide Network</div>
      <div class="text-xs opacity-80">
        300,000+ trained volunteers provide ground truth that radar can’t—  
        enabling better warnings & lead time.
      </div>
    </div>
  </v-clicks>
</div>
<div class="mt-6 grid grid-cols-4 gap-4">
  <v-clicks>
    <div class="rounded-xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:radar text-cyan-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-cyan-200/90 font-semibold">Lesson</div>
      </div>
      <div class="text-sm font-semibold">Radar Alone Isn’t Enough</div>
      <div class="text-xs opacity-80">
        Spotters provide confirmation radar can’t -   
        e.g., tornado on the ground vs. aloft.
      </div>
    </div>
    <div class="rounded-xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:favorite text-green-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-green-200/90 font-semibold">Lesson</div>
      </div>
      <div class="text-sm font-semibold">Volunteers Save Lives</div>
      <div class="text-xs opacity-80">
        Reports lead to faster warnings, reduced casualties,  
        and stronger community trust.
      </div>
    </div>
    <div class="rounded-xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:education text-lime-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-lime-200/90 font-semibold">Lesson</div>
      </div>
      <div class="text-sm font-semibold">Training = Trust</div>
      <div class="text-xs opacity-80">
        Consistent, criteria-based reports make  
        NWS warnings more accurate & actionable.
      </div>
    </div>
    <div class="rounded-xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:group text-teal-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-teal-200/90 font-semibold">Lesson</div>
      </div>
      <div class="text-sm font-semibold">Community Resilience</div>
      <div class="text-xs opacity-80">
        Local nets + ham & GMRS partnerships =  
        stronger backbone for emergency response.
      </div>
    </div>

  </v-clicks>
</div>

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

# What Is SKYWARN®?

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
  SKYWARN® began in the 1960s after deadly tornado outbreaks highlighted the need for trained spotters.
</div>

---
layout: image-left
image: /images/hamradio.webp
---

# TAG (TN-AL-GA) SKYWARN® Today

Weekly Net: TAG SKYWARN® Net meets every Tuesday at 8:00 PM Eastern on 145.390 MHz with 107.2 Hz tone. GMRS operators join on NGGMRS Northern Core repeaters starting at 7:00 PM.

Training Series: SKYWARN® Training Schedule covers a wide range of topics - from heat/hurricane prep to reporting protocols and technical drills (e.g., What3Words, simplex relay training).

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

North Georgia GMRS (NGGMRS) has built an enhanced SKYWARN® network, expanding coverage across SE Tennessee, NW Georgia, and NE Alabama.  

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
- Activation notices pushed via the *TN-AL-GA Regional SKYWARN® Net* Telegram channel.  
- Reports relayed directly to NWS offices.


# How to Plug In

- 📚 Attend/host NWS SKYWARN® training *(covers storm ID, reporting methods, and safety)*  
- 📻 Join Tuesday nets (Ham 8:00 PM / GMRS 7:00 PM).  
- 📝 Practice correct, criteria-based reporting.  
- 📢 Recruit & spread awareness - more trained spotters = stronger coverage.

---
transition: fade-out
class: text-center
---

# August 12, 2025 - Chattanooga Flash Flooding

<div class="mt-6 grid grid-cols-2 gap-6">
  <v-clicks>
    <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:warning-alt text-red-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-red-200/90 font-semibold">Impact</div>
      </div>
      <div class="text-sm font-semibold">Second-Wettest Day on Record</div>
      <div class="text-xs opacity-80 space-y-2">
        • Over 6 in (~6.4 in) of rain in a single day.<br>
        • Widespread flash flooding closed I-24, submerged roads, and triggered dozens of rescues.<br>
        • A state of emergency was declared in Hamilton County.
      </div>
    </div>
    <div class="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur">
      <div class="flex items-center gap-2 mb-2">
        <div class="i-carbon:ambulance text-orange-300 text-lg"></div>
        <div class="text-xs uppercase tracking-wide text-orange-200/90 font-semibold">Tragedy & Response</div>
      </div>
      <div class="text-sm font-semibold">Fatalities & Rescues</div>
      <div class="text-xs opacity-80 space-y-2">
        • A mother, father, and child were killed when a water-saturated tree fell on their car in East Ridge.<br>
        • A fourth individual was swept away after bypassing rescue barricades.<br>
        • Fire & sheriff’s deputies performed dozens of high-water rescues - including stranded motorists and homeowners - using boats and rapid-response teams.
      </div>
    </div>
  </v-clicks>
</div>
<div class="mt-6 grid grid-cols-3 gap-4">
  <v-clicks>
    <img src="/images/flood/flood-1.png" alt="Flooded road" class="rounded-lg shadow-md object-cover h-40 w-full" />
    <img src="/images/flood/flood-2.jpg" alt="Rescue crews" class="rounded-lg shadow-md object-cover h-40 w-full" />
    <img src="/images/flood/flood-3.jpg" alt="Cars submerged" class="rounded-lg shadow-md object-cover h-40 w-full" />
  </v-clicks>
</div>


