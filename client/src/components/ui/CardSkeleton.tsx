import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from 'components/Products/ProductCard/ProductCard.module.scss';

const CardSkeleton = (props: any) => (
  <ContentLoader
    className={styles.card}
    style={{ background: 'transparent' }}
    speed={2}
    width={280}
    height={337}
    viewBox="0 0 280 337"
    backgroundColor="#d6d6d6"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="0" y="-3" rx="5" ry="5" width="280" height="140" />
    <rect x="0" y="158" rx="5" ry="5" width="280" height="15" />
    <rect x="0" y="193" rx="5" ry="5" width="280" height="15" />
    <rect x="0" y="230" rx="5" ry="5" width="280" height="15" />
    <rect x="0" y="279" rx="0" ry="0" width="280" height="50" />
  </ContentLoader>
);

export default CardSkeleton;
