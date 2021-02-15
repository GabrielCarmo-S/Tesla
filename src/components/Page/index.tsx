import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelWrapper } from "../Model";

import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelWrapper>
        <div>
          {[
            "Model ONe",
            "Model Two",
            "Model Three",
            "Model Four",
            "Model Five",
            "Model Six",
            "Model Seven",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelWrapper>
    </Container>
  );
};

export default Page;
