import React from 'react'

import { ModelWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'

import { Container, Spacer } from './styles'
import UniqueOverlay from '../UniqueOverlay'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven'
          ].map(modelName => (
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
        
        <Spacer />
      <UniqueOverlay />
      </ModelWrapper>
    </Container>
  )
}

export default Page