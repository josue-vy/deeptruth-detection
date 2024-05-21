import React, { useRef, useEffect } from 'react';

const Stars = ({ vel = 1, radius = 1, stars = 300 }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  const center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      center.x = canvas.width / 2;
      center.y = canvas.height / 2;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const start = () => {
      starsRef.current = [];
      for (let i = 0; i < stars; i++) {
        setTimeout(() => {
          starsRef.current.push(new Star());
        }, i * 500); // Ajusta el intervalo de tiempo aquí (por ejemplo, i * 50)
      }
    };

    const render = () => {
      context.fillStyle = 'rgba(1, 4, 35, 0.8)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = 'white';
      starsRef.current.forEach(star => star.update());
    };

    const Star = function () {
      this.x = center.x;
      this.y = center.y;
      this.init = function () {
        this.radius = Math.random() * radius;
        this.x = center.x;
        this.y = center.y;
        this.lineWidth = 0;
        this.vel = {
          x: Math.random() * 10 - 5,
          y: Math.random() * 10 - 5
        };
      };
      this.update = function () {
        this.vel.x *= 1.05;
        this.vel.y *= 1.05;
        this.lineWidth += 0.035;
        this.x0 = this.x;
        this.y0 = this.y;
        this.x += this.vel.x;
        this.y += this.vel.y;
        this.draw();
        if (this.isDead()) this.init();
      };
      this.draw = function () {
        context.beginPath();
        context.moveTo(this.x0, this.y0);
        context.lineTo(this.x, this.y);
        context.lineWidth = this.lineWidth;
        context.stroke();
      };
      this.isDead = function () {
        return (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        );
      };
      this.init();
      return this;
    };

    resize();
    start();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [radius, stars]);

  return <canvas ref={canvasRef} style={{ background: '#000' }} />;
};

export default Stars;
