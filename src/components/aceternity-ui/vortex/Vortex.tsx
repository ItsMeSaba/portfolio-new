"use client";

import { cn } from "@/components/aceternity-ui/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface VortexProps {
  children?: any;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export function Vortex(props: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const workerRef = useRef<Worker | null>(null);
  const [canvasWidth, setCanvasWidth] = useState<number | null>(null);

  const mouseCoords = useRef<{ x: null | number; y: null | number }>({
    x: null,
    y: null,
  });
  const isMouseDown = useRef(false);

  const setupWorker = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    // Create worker
    workerRef.current = new Worker(new URL("./Worker.js", import.meta.url), {
      type: "module",
    });

    // Initialize worker with canvas and config
    const offscreenCanvas = canvas.transferControlToOffscreen();
    const config = {
      particleCount: props.particleCount || 700,
      rangeY: props.rangeY || 100,
      baseHue: props.baseHue || 200,
      baseSpeed: props.baseSpeed || 0,
      rangeSpeed: props.rangeSpeed || 1,
      baseRadius: props.baseRadius || 1,
      rangeRadius: props.rangeRadius || 2,
      backgroundColor: props.backgroundColor || "#000000",
    };

    workerRef.current.onmessage = (e) => {
      console.log("Worker message:");

      if (e.data.type === "error") {
        console.error("Worker error:", e.data.data);
      }
    };

    console.log("workerRef.current", workerRef.current);

    workerRef.current.postMessage(
      {
        type: "init",
        data: {
          canvas: offscreenCanvas,
          width: window.innerWidth,
          height: 600,
          // width: window.innerWidth,
          // height: window.innerHeight,
          config,
        },
      },
      [offscreenCanvas]
    );
  };

  const handleMouseMove = (e: MouseEvent) => {
    const canvasDimensions = canvasRef.current?.getBoundingClientRect();
    if (!canvasDimensions) return;

    const mouseX = e.clientX - canvasDimensions.left;
    const mouseY = e.clientY - canvasDimensions.top;

    mouseCoords.current = { x: mouseX, y: mouseY };

    if (workerRef.current) {
      workerRef.current.postMessage({
        type: "mouseMove",
        data: { x: mouseX, y: mouseY },
      });
    }
  };

  const handleMouseDown = () => {
    isMouseDown.current = true;
    if (workerRef.current) {
      workerRef.current.postMessage({ type: "mouseDown" });
    }
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
    if (workerRef.current) {
      workerRef.current.postMessage({ type: "mouseUp" });
    }
  };

  const handleResize = () => {
    if (workerRef.current) {
      workerRef.current.postMessage({
        type: "resize",
        data: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      });
    }
  };

  useEffect(() => {
    setCanvasWidth(window?.innerWidth);

    if (!canvasWidth) return;

    setupWorker();

    // Add event listeners
    // window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("mousedown", handleMouseDown);
    // window.addEventListener("mouseup", handleMouseUp);
    // window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      if (workerRef.current) {
        workerRef.current.postMessage({ type: "cleanup" });
        workerRef.current.terminate();
      }

      // window.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("mousedown", handleMouseDown);
      // window.removeEventListener("mouseup", handleMouseUp);
      // window.removeEventListener("resize", handleResize);
    };
  }, [canvasWidth]);

  return (
    <div className={cn("absolute h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        {canvasWidth && (
          <canvas width={canvasWidth} height={600} ref={canvasRef}></canvas>
        )}
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
}
