import React from 'react';

import cls from './styles.module.scss';

import { Title4, Title5 } from 'shared/ui/typography';
import { Modal } from '../../../shared/ui/modal';
import { Button, ButtonSizes, ButtonTypes } from 'shared/ui/button';

export const ModalCloseChapter = ({
  isOpen,
  setIsOpen,
  title = '',
  handleReject,
  handleAccept,
  cancelText = 'Отмена',
  acceptText = 'Завершить',
}) => {
  return (
    <Modal className={cls.modal} isOpen={isOpen} setIsOpen={setIsOpen}>
      <Title4 className={cls.title}>{title}</Title4>
      <Title5 className={cls.title}>
        Граф станет недоступен для дальнейшего написания, и в текущем виде будет выставлен на голосование
      </Title5>
      <div className={cls.controls}>
        <Button
          size={ButtonSizes.small}
          type={ButtonTypes.outline}
          onClick={handleReject}
          className={[cls.btn].join(' ')}
        >
          {cancelText}
        </Button>
        <Button
          size={ButtonSizes.small}
          type={ButtonTypes.primary}
          onClick={handleAccept}
          className={[cls.btn].join(' ')}
        >
          {acceptText}
        </Button>
      </div>
    </Modal>
  );
};
