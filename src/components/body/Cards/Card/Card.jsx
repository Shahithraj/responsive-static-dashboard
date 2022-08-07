import React, { useState } from "react";
import "./Card.css";
import { AnimateSharedLayout } from "framer-motion";
import CompactCard from "./CompactCard";
import ExpandedCard from "./ExpandedCard";

const Card = ({ title, color, barValue, value, png, series }) => {
  const [extended, setExtended] = useState(false);

  return (
    <AnimateSharedLayout>
      {extended ? (
        <ExpandedCard
          title={title}
          color={color}
          barValue={barValue}
          value={value}
          png={png}
          series={series}
          setExtended={setExtended}
        />
      ) : (
        <CompactCard
          title={title}
          color={color}
          barValue={barValue}
          value={value}
          png={png}
          setExtended={setExtended}
        />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
