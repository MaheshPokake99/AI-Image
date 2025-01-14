import React, { useEffect } from 'react';

function FluidSimulation() {
  useEffect(() => {
    // Initialize the canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Bubble class to represent each moving bubble
    class Bubble {
      constructor(x, y, radius, color, speedX, speedY) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
      }

      // Update bubble position and draw it
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Check for boundaries and reverse direction if needed
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.speedX = -this.speedX;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
          this.speedY = -this.speedY;
        }

        // Draw the bubble with reduced opacity
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }
    }

    const bubbles = [];

    // Function to initialize fluid simulation
    function drawFluid() {
      const width = canvas.width;
      const height = canvas.height;

      // Corrected gradient for fluid effect (black background)
      let gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#000000"); // Black color
      gradient.addColorStop(0.5, "#000000"); // Black color
      gradient.addColorStop(1, "#000000"); // Black color

      // Draw the background
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add random bubbles to simulate fluid dynamics
      if (bubbles.length < 50) {
        for (let i = 0; i < 2; i++) { // Add 2 new bubbles per frame
          const x = Math.random() * width;
          const y = Math.random() * height;
          const radius = Math.random() * 5 + 3; // Smaller radius (3 to 8)
          const color = `rgba(255, 255, 255, ${Math.random() * 0.3})`; // Reduced opacity (0.3 max)
          const speedX = (Math.random() - 0.5) * 2;
          const speedY = (Math.random() - 0.5) * 2;
          bubbles.push(new Bubble(x, y, radius, color, speedX, speedY));
        }
      }

      // Update and draw all bubbles
      for (const bubble of bubbles) {
        bubble.update();
      }

      requestAnimationFrame(drawFluid);
    }

    // Trigger the text animation
    window.onload = () => {
      const textElement = document.getElementById('animated-text');
      textElement.classList.add('transition-in');
      drawFluid();
    };

  }, []);

  return (
    <div>
      <canvas id="canvas"></canvas>
      <h1 id="animated-text">
        <span className="letter-0"></span>
        <span className="letter-1"></span>
        <span className="letter-2"></span>
        <span className="letter-3"></span>
        <span className="letter-4"></span>
        <span className="letter-5"></span>
        <span className="letter-6"></span>
        <span className="letter-7"></span>
        <span className="letter-8"></span>
        <span className="letter-9"></span>
        <span className="letter-10"></span>
        <span className="letter-11"></span>
        <span className="letter-12"></span>
        <span className="letter-13"></span>
        <span className="letter-14"></span>
        <span className="letter-15"></span>
      </h1>
    </div>
  );
}

export default FluidSimulation;
