(async () => {
  try {
    await loadTrianglesPreset(tsParticles);

    await tsParticles.load({
      id: "tsparticles",
      options: {
        preset: "triangles",
      },
    });

    console.log("Particles loaded successfully!");
  } catch (error) {
    console.error("Error loading particles:", error);

    await tsParticles.load({
      id: "tsparticles",
      options: {
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "triangle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      },
    });
  }
})();

// Typewriter Effect for Quote
function typeWriter(element, text, speed = 50) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Show the author name after typing is complete
      const author = document.getElementById("quote-author");
      if (author) {
        author.style.transition = "opacity 1s ease-in";
        author.style.opacity = "1";
      }
    }
  }
  type();
}

// Start typewriter effect when page loads
window.addEventListener("load", () => {
  const quoteElement = document.getElementById("typewriter-quote");
  if (quoteElement) {
    const quoteText =
      "\"I'd be lying if I said things are going according to plan... but beggars can't be choosers, right?\"";
    typeWriter(quoteElement, quoteText, 50);
  }
});

// Resume Card Functions
function toggleResumeCard() {
  const card = document.getElementById("resumeCard");
  card.classList.toggle("show");
}

// Force download resume
function downloadResume(event) {
  event.preventDefault();

  fetch("Bullen, Cade - Resume.pdf")
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Bullen_Cade_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    })
    .catch((err) => {
      console.error("Download failed:", err);
      // Fallback: open in new tab
      window.open("Bullen, Cade - Resume.pdf", "_blank");
    });
}

// Close card when clicking outside
document.addEventListener("click", function (event) {
  const card = document.getElementById("resumeCard");
  const button = document.querySelector(".resume-btn");

  if (
    card &&
    button &&
    !button.contains(event.target) &&
    !card.contains(event.target)
  ) {
    card.classList.remove("show");
  }
});
