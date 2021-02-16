import { useTransform } from "framer-motion";
import React, { useCallback, useLayoutEffect, useState } from "react";
import { CarModel } from "../ModelsContext";
import useWrapperScrool from "../useWrapperScroll";

import { Container } from "./styles";

interface Props {
  model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const { scrollY } = useWrapperScrool();

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()));
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [getSectionDimensions]);

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );

  const opacity = useTransform(sectionScrollProgress, [-0.42, -0.05], [0,1])

  return (
    <Container style={{opacity}}>
      <h1>{children}</h1>
    </Container>
  );
};

export default ModelOverlay;
