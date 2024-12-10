// Tool Section Functionality
function toggleDetails(id) {
  const element = document.getElementById(id);
  const button = element.previousElementSibling;

  element.classList.toggle("hidden");
  button.textContent = element.classList.contains("hidden")
    ? "Expand Details"
    : "Hide Details";
}

// Enhanced Loading Animation
document.addEventListener("DOMContentLoaded", function () {
  const toolSections = document.querySelectorAll(".tool-section");
  toolSections.forEach((section, index) => {
    section.style.animationDelay = `${index * 150}ms`;
  });
});

// Smooth Scroll for Tool Sections
document.querySelectorAll(".tool-section").forEach((section) => {
  section.addEventListener("click", function (e) {
    if (!e.target.classList.contains("expand-button")) {
      this.classList.toggle("active");
    }
  });
});

// Enhanced Search with Highlight
function searchTools() {
  const searchInput = document.getElementById("search-input");
  const filter = searchInput.value.toLowerCase();
  const toolSections = document.querySelectorAll(".tool-section");

  toolSections.forEach((section) => {
    const title = section.querySelector("h2").textContent.toLowerCase();
    const description = section.querySelector("p").textContent.toLowerCase();

    if (title.includes(filter) || description.includes(filter)) {
      section.style.display = "";
      section.style.animation = "fadeIn 0.5s ease forwards";
    } else {
      section.style.display = "none";
    }
  });
}

// Tool Data
const toolData = {
  1: {
    title: "Online P.K.E. Scanner",
    description: "An app that detects paranormal activity using IoT sensors.",
    details:
      "This app scans energy fields remotely and identifies psycho-kinetic levels in real-time, assisting Ghostbusters in tracking invisible entities.",
    features: [
      "Real-time energy field scanning",
      "IoT sensor integration",
      "Mobile app compatibility",
      "Advanced entity tracking",
      "Historical data analysis",
    ],
    techStack: [
      "Quantum Sensors",
      "5G Network",
      "Neural Processing Units",
      "Holographic Display",
      "Bio-electric Amplifiers",
    ],
    buildSteps: [
      "Install quantum sensor array",
      "Configure neural network",
      "Calibrate ectoplasmic detection",
      "Set up real-time monitoring",
      "Deploy mobile interface",
    ],
    requirements: {
      power: "5000W Quantum Core",
      space: "Virtual Cloud Space",
      connectivity: "Ultra-wide Band",
      security: "Quantum Encryption",
    },
    maintenance: [
      "Weekly sensor calibration",
      "Monthly quantum core alignment",
      "Bi-annual software updates",
    ],
    safetyProtocols: [
      "Auto-shutdown on overload",
      "Entity containment backup",
      "Emergency power routing",
    ],
  },
  2: {
    title: "Cloud Ghost Trap",
    description: "A cloud-based storage system for capturing ghosts remotely.",
    details:
      "The Cloud Ghost Trap revolutionizes ghost containment by utilizing quantum cloud storage technology, allowing for secure containment without physical limitations.",
    features: [
      "Quantum containment fields",
      "Remote ghost transfer capability",
      "Multi-ghost storage capacity",
      "Emergency backup systems",
      "Cross-platform accessibility",
    ],
  },
  3: {
    title: "Specter Tracker Wristband",
    description:
      "A wearable device that alerts users of nearby ghost movement.",
    details:
      "This advanced wearable technology combines miniaturized P.K.E. sensors with haptic feedback to provide real-time ghost proximity alerts.",
    features: [
      "360-degree ghost detection",
      "Haptic feedback alerts",
      "Extended battery life",
      "Water-resistant design",
      "Neural activity monitoring",
    ],
  },
  4: {
    title: "Ghost Recon Drones",
    description:
      "Autonomous drones equipped with thermal cameras to scan for ghosts.",
    details:
      "These AI-powered drones utilize multiple spectral imaging technologies to track and monitor ghostly entities in hard-to-reach locations.",
    features: [
      "Multi-spectral imaging",
      "AI path-finding",
      "Silent operation mode",
      "4K ectoplasm recording",
      "Swarm coordination capability",
    ],
  },
  5: {
    title: "Ghost Data Analyzer",
    description:
      "An AI-powered platform for analyzing ghost data and providing insights.",
    details:
      "Using advanced machine learning algorithms, this platform processes vast amounts of paranormal data to identify patterns and predict ghost behavior.",
    features: [
      "Pattern recognition AI",
      "Behavioral prediction",
      "Real-time data processing",
      "Interactive visualizations",
      "Customizable analysis parameters",
    ],
  },
  6: {
    title: "SpecterNet",
    description:
      "A social network for sharing ghost sightings and experiences.",
    details:
      "SpecterNet creates a global community of paranormal investigators, allowing real-time sharing of ghost encounters and collaborative investigation planning.",
    features: [
      "Verified sighting system",
      "Live streaming capability",
      "Evidence rating system",
      "Investigation planning tools",
      "Community challenges",
    ],
  },
  7: {
    title: "Ghost Alert Network",
    description: "A global system for real-time ghost activity alerts.",
    details:
      "This comprehensive alert system monitors paranormal activity worldwide, providing instant notifications to Ghostbusters teams about potential threats.",
    features: [
      "Global activity mapping",
      "Threat level assessment",
      "Automated dispatch system",
      "Cross-team coordination",
      "Custom alert parameters",
    ],
  },
  8: {
    title: "Augmented Ghost Vision",
    description: "AR-powered glasses to visualize ghosts in real time.",
    details:
      "These cutting-edge AR glasses overlay spectral data onto the real world, allowing Ghostbusters to see and track entities that are invisible to the naked eye.",
    features: [
      "Real-time ghost visualization",
      "Threat level indicators",
      "Environmental analysis",
      "Voice-activated controls",
      "Recording capability",
    ],
  },
  9: {
    title: "Virtual Ghost Containment",
    description: "A virtual storage solution for ghost containment.",
    details:
      "This revolutionary system creates secure virtual environments for ghost containment, utilizing quantum computing to maintain stable containment fields.",
    features: [
      "Virtual containment fields",
      "Quantum stabilization",
      "Remote monitoring",
      "Automated maintenance",
      "Scalable storage capacity",
    ],
  },
  10: {
    title: "Digital Particle Thrower",
    description:
      "A web-connected weapon for tackling large-scale ghost threats.",
    details:
      "The Digital Particle Thrower combines traditional proton stream technology with smart targeting and cloud-based power management.",
    features: [
      "Smart targeting system",
      "Cloud power management",
      "Multiple stream modes",
      "Energy efficiency optimization",
      "Remote diagnostics",
    ],
  },
  11: {
    title: "Ghost Translator",
    description:
      "An AI tool for translating ghost languages into human speech.",
    details:
      "Using advanced linguistic AI and spectral frequency analysis, this tool enables real-time communication with ghostly entities.",
    features: [
      "Real-time translation",
      "Multi-spectral voice analysis",
      "Emotion detection",
      "Historical language database",
      "Cultural context adaptation",
    ],
  },
  12: {
    title: "Smart Ghost Command Center",
    description: "An advanced interface for managing missions and tools.",
    details:
      "This comprehensive command center integrates all Ghostbusters tools and data streams into a single, intuitive interface for efficient mission management.",
    features: [
      "Unified tool control",
      "Mission planning AI",
      "Team coordination system",
      "Resource management",
      "Performance analytics",
    ],
  },
};

// Modal Functionality
const modal = document.getElementById("toolModal");
const modalTitle = modal.querySelector(".modal-header h2");
const modalDescription = modal.querySelector(".modal-description");
const modalDetails = modal.querySelector(".modal-details");
const closeModal = modal.querySelector(".close-modal");

function openModal(toolId) {
  const tool = toolData[toolId];
  if (!tool) return;

  modalTitle.textContent = tool.title;
  modalDescription.textContent = tool.description;

  // Create features list with enhanced styling
  const featuresList = tool.features
    .map(
      (feature) =>
        `<div class="feature-item">
          <i class="fas fa-check-circle"></i>
          <span>${feature}</span>
        </div>`
    )
    .join("");

  // Create tech stack list
  const techStackList = tool.techStack
    .map(
      (tech) =>
        `<div class="tech-item">
          <i class="fas fa-microchip"></i>
          <span>${tech}</span>
        </div>`
    )
    .join("");

  // Create build steps list
  const buildStepsList = tool.buildSteps
    .map(
      (step, index) =>
        `<div class="build-step">
          <span class="step-number">${index + 1}</span>
          <span>${step}</span>
        </div>`
    )
    .join("");

  // Create requirements list
  const requirementsList = Object.entries(tool.requirements)
    .map(
      ([key, value]) =>
        `<div class="requirement-item">
          <span class="req-label">${key}:</span>
          <span class="req-value">${value}</span>
        </div>`
    )
    .join("");

  // Create maintenance list
  const maintenanceList = tool.maintenance
    .map(
      (item) =>
        `<div class="maintenance-item">
          <i class="fas fa-tools"></i>
          <span>${item}</span>
        </div>`
    )
    .join("");

  // Create safety protocols list
  const safetyList = tool.safetyProtocols
    .map(
      (protocol) =>
        `<div class="safety-item">
          <i class="fas fa-shield-alt"></i>
          <span>${protocol}</span>
        </div>`
    )
    .join("");

  modalDetails.innerHTML = `
    <div class="modal-body">
      <div class="modal-section">
        <p class="section-details">${tool.details}</p>
      </div>

      <div class="modal-section">
        <h3><i class="fas fa-star"></i> Key Features</h3>
        <div class="features-list">
          ${featuresList}
        </div>
      </div>

      <div class="modal-section">
        <h3><i class="fas fa-microchip"></i> Tech Stack</h3>
        <div class="tech-stack-list">
          ${techStackList}
        </div>
      </div>

      <div class="modal-section">
        <h3><i class="fas fa-tools"></i> Building Steps</h3>
        <div class="build-steps-list">
          ${buildStepsList}
        </div>
      </div>

      <div class="modal-section">
        <h3><i class="fas fa-cog"></i> Requirements</h3>
        <div class="requirements-list">
          ${requirementsList}
        </div>
      </div>

      <div class="modal-section">
        <h3><i class="fas fa-wrench"></i> Maintenance</h3>
        <div class="maintenance-list">
          ${maintenanceList}
        </div>
      </div>

      <div class="modal-section">
        <h3><i class="fas fa-shield-alt"></i> Safety Protocols</h3>
        <div class="safety-list">
          ${safetyList}
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModalHandler() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Event Listeners
document.querySelectorAll(".expand-button").forEach((button) => {
  button.addEventListener("click", () => {
    const toolId = button.getAttribute("data-tool-id");
    openModal(toolId);
  });
});

closeModal.addEventListener("click", closeModalHandler);

// Close modal on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalHandler();
  }
});

// Close modal on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModalHandler();
  }
});
