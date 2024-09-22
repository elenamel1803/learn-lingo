import sprite from '../assets/img/icons.svg';

export const IconSvg = ({ id, width, height, fill, stroke }) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};
