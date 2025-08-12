import { defineConfig, presetUno, presetAttributify, presetIcons } from "unocss";

const colors = ["amber", "blue", "green", "red", "teal"];
const bgShades = ["800", "800/40", "800/20", "900/30"];
const icons = [
  "download",
  "alert",
  "windy",
  "tornado-warning",
  "thunderstorm-strong",
  "temperature-hot",
  "temperature-frigid",
  "solar-panel",
  "satellite-weather",
  "person",
  "radio-combat",
  "checkbox-checked",
  "close",
  "binoculars",
  "health-cross",
  "events",
  "thunderstorm-severe",
  "police",
  "user-simulation"
];

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  safelist: [
    "border-2", "border-solid",
    ...colors.map(c => `text-${c}-300`),
    ...colors.map(c => `text-${c}-400`),
    ...colors.map(c => `text-${c}-800`),
    ...colors.flatMap(c => bgShades.map(s => `bg-${c}-${s}`)),
    ...colors.map(c => `border-${c}-800`),
    ...icons.map(i => `i-carbon:${i}`),
  ],
});
