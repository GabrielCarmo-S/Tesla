import React from 'react';

import { Container } from './styles';

const ModelOverlay: React.FC = ({children}) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

export default ModelOverlay;
