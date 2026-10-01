/**
 * Project data for the portfolio.
 *
 * This is the ONLY file you need to touch to add, remove, or edit a project —
 * main.js reads this array and builds the cards automatically.
 *
 * Fields:
 *   tag      - short category label shown above the title (e.g. "TEAM PROJECT")
 *   title    - project name
 *   summary  - 2-4 sentence description. Replace the placeholder text with
 *              real specifics: what it does, what you built, what the result was.
 *   tags     - array of short strings for the tech/skill chips
 *   link     - URL to this project's detail page (in /projects/), a repo, or a
 *              demo. Each personal project already has a page in /projects/ —
 *              point link at it (e.g. "projects/your-project.html") and it
 *              opens in the same tab. Use "#" if you don't have a page yet.
 *   linkText - label for the link, e.g. "View full write-up" or "View on GitHub"
 *   placeholder - true/false. If true, a small note is shown reminding you (or a
 *                 visitor) that this entry is still a draft. Set to false once
 *                 you've filled in the real details.
 */

const PROJECTS = [
  {
    tag: "Personal Project",
    title: "ESP32 Ethylene-Sensing Fruit Ripener",
    summary:
      "A prototype device that uses ethylene gas to cut fruit-ripening time from days to under 24 hours, combining a gas sensor, control electronics, and an enclosed ripening chamber — with a companion app in progress.",
    tags: ["ESP32", "Gas Sensing", "IoT", "Firmware"],
    link: "projects/esp32-fruit-ripener.html",
    linkText: "View full write-up",
    placeholder: false,
  },
  {
    tag: "Personal Project",
    title: "Green Hydrogen for Cargo Ships",
    summary:
      "A solar-powered electrolysis prototype modeling how cargo ships and ports could convert seawater into hydrogen fuel, built for a robotics competition and backed by research into green hydrogen as a maritime and transportation fuel.",
    tags: ["Electrolysis", "Renewable Energy", "Prototyping", "Robotics"],
    link: "projects/green-hydrogen-cargo-ships.html",
    linkText: "View full write-up",
    placeholder: false,
  },
   {
    tag: "Personal Project",
    title: "Halloween Hand Launcher",
    summary:
      "An automated prop that launches a skeleton hand into the air when it senses someone nearby, with a band-driven linear launch track and an auto-reset feature built for repeat use on Halloween night.",
    tags: ["Mechanical Design", "3D Modeling", "Embedded C", "Sensors"],
    link: "projects/halloween-hand-launcher.html",
    linkText: "View full write-up",
    placeholder: false,
  },
  {
    tag: "Personal Project",
    title: "Ultrasonic Scanning Radar",
    summary:
      "A 180° ultrasonic scanning radar built from an HC-SR04 sensor on a micro-servo, with a real-time polar-coordinate mapping dashboard and ±1 cm detection accuracy.",
    tags: ["Embedded C", "Ultrasonic Sensing", "Signal Processing", "Motor Control"],
    link: "projects/ultrasonic-scanning-radar.html",
    linkText: "View full write-up",
    placeholder: false,
  },
  {
    tag: "Personal Project",
    title: "Plasma-Activated Water Generator",
    summary:
      "A device that runs a plasma discharge through water to produce plasma-activated water, exploring its use for applications like seed germination and sanitation.",
    tags: ["High Voltage", "Plasma Physics", "Electronics", "Experimentation"],
    link: "projects/plasma-water-generator.html",
    linkText: "View full write-up",
    placeholder: true,
  },
  {  
  tag: "Personal Project",
    title: "Eagle Scout Project",
    summary:
      "Used CAD software to design trail gate schematics and organized a team of 15 volunteers to install gates at two trailheads, improving park accessibility.",
    tags: ["Community Service", "Woodworking", "Leadership"],
    link: "projects/eaglescout.html",
    linkText: "View full write-up",
    placeholder: true,
  }
];

