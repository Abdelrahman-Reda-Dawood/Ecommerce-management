import React from 'react';
import { SpinnerCircularFixed } from 'spinners-react';

export function LoadingSpinner({ size }) {
  return (
    <SpinnerCircularFixed
      size={size}
      thickness={100}
      speed={140}
      color="#36ad47"
      secondaryColor="rgba(255, 255, 255, 1)"
    />
  );
}
