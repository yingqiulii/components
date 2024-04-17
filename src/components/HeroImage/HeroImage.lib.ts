interface HeroImageLibProps {
  backgroundColor: string | undefined;
  disabled?: boolean;
}

export const shouldDisplayImage = (props: HeroImageLibProps): boolean => {
  return !props.disabled;
};

export const shouldDisplayText = (props: HeroImageLibProps): boolean => {
  return !props.disabled;
};

export const getOverlayOpacity = (props: HeroImageLibProps): number => {
  return props.disabled ? 0.5 : 0;
};

export const getTextOpacity = (props: HeroImageLibProps): number => {
  return props.disabled ? 0.5 : 1;
};

export const getTextColor = (props: HeroImageLibProps): string => {
  return props.disabled ? '#aaa' : 'white';
};

export const getCursorStyle = (props: HeroImageLibProps): string => {
  return props.disabled ? 'not-allowed' : 'pointer';
};

export const getBackgroundColor = (props: HeroImageLibProps): string | undefined => {
  return props.backgroundColor;
};

