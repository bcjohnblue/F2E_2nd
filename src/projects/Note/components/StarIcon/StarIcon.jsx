import React from 'react';
import styles from './StarIcon.module.sass';
import clsx from 'clsx';

import { ReactComponent as FillStar } from '../../assets/icon/star-solid.svg';
import { ReactComponent as EmptyStar } from '../../assets/icon/star-regular.svg';

const Star = props => {
  const { isStar, style, className, onClick } = props;

  return isStar ? (
    <FillStar
      className={clsx([styles.star, className])}
      style={style}
      onClick={onClick}
    ></FillStar>
  ) : (
    <EmptyStar
      className={clsx([styles.star, className])}
      style={style}
      onClick={onClick}
    ></EmptyStar>
  );
};

export default Star;
