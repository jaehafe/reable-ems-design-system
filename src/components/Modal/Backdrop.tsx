import React from 'react';

import * as S from './index.styles';

export interface BackdropProps {
  onClose?: () => void;
  children: React.ReactNode;
  backdropClosable?: boolean;
  secondModal?: boolean;
  $secondModal?: boolean;
}

export default function Backdrop({
  children,
  onClose,
  backdropClosable = false,
  secondModal = false,
}: BackdropProps) {
  return (
    <S.BackdropContainer
      onClick={backdropClosable ? onClose : undefined}
      $secondModal={secondModal}
    >
      {children}
    </S.BackdropContainer>
  );
}
