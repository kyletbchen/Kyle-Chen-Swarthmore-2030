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
 *   link     - URL to a write-up, repo, or demo. Use "#" if you don't have one yet.
 *   linkText - label for the link, e.g. "View on GitHub" or "Read the write-up"
 *   placeholder - true/false. If true, a small note is shown reminding you (or a
 *                 visitor) that this entry is still a draft. Set to false once
 *                 you've filled in the real details.
 */

const PROJECTS = [
  {
    tag: "Personal Project",
    title: "Ultrasonic Scanning Radar",
    summary:
      "A rotating ultrasonic rangefinding rig that sweeps a sensor across a field of view and builds a live map of nearby objects, similar in concept to rotating LIDAR units used in robotics.",
    tags: ["Embedded C", "Ultrasonic Sensing", "Signal Processing", "Motor Control"],
    link: "#",
    linkText: "Add link to repo, photos, or demo video",
    placeholder: true,
  },
  {
    tag: "Personal Project",
    title: "ESP32 Ethylene-Sensing Fruit Ripener",
    summary:
      "An ESP32-based device that monitors ethylene gas concentration to track and accelerate fruit ripening, combining a gas sensor, microcontroller firmware, and an enclosed ripening chamber.",
    tags: ["ESP32", "Gas Sensing", "IoT", "Firmware"],
    link: "#",
    linkText: "Add link to repo, photos, or demo video",
    placeholder: true,
  },
  {
    tag: "Personal Project",
    title: "Plasma-Activated Water Generator",
    summary:
      "A device that runs a plasma discharge through water to produce plasma-activated water, exploring its use for applications like seed germination and sanitation.",
    tags: ["High Voltage", "Plasma Physics", "Electronics", "Experimentation"],
    link: "#",
    linkText: "Add link to repo, photos, or demo video",
    placeholder: true,
  },
];
