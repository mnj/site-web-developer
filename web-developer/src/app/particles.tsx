"use client";

import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import particlesPreset from "./particles-preset.json";

export default function ParticlesComponent(props: { id: string }) {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return <Particles id={props.id} className="tsparticles" init={particlesInit} options={particlesPreset} />
};
