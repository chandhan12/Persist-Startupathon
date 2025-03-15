import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FireCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, size, color, velocity) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
      }

      update() {
        this.y -= this.velocity.y; // Move upwards
        this.x += (Math.random() - 0.5) * 2; // Slight side movement
        this.alpha -= 0.02; // Fade effect
      }

      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    let particles = [];

    function spawnFire(x, y) {
      for (let i = 0; i < 5; i++) {
        let size = Math.random() * 6 + 2;
        let color = `rgba(255, ${Math.random() * 100 + 50}, 0, 1)`;
        let velocity = { y: Math.random() * 2 + 1 };
        particles.push(new Particle(x, y, size, color, velocity));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      spawnFire(canvas.width / 2, canvas.height - 100);
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[-1]" // Background effect
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </motion.div>
  );
};

export default FireCanvas;
