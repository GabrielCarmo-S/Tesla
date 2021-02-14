import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelWrapper } from "../Model";

import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelWrapper>
        <div>
          <ModelSection
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Order Online for Delivery"
              />
            }
          />
        </div>
      </ModelWrapper>
    </Container>
  );
};

export default Page;
