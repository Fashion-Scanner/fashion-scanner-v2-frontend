const breakpoint = {
  desktop: 1440,
  tablet: 960,
  mobile: 768,
};

const device = {
  desktop: `(min-width: ${breakpoint.desktop}px)`,
  tablet: `(max-width: ${breakpoint.tablet}px)`,
  mobile: `(max-width: ${breakpoint.mobile}px)`,
};

const color = {
  white: "#fff",
  black: "#000",
};

export const theme = {
  device,
  color,
};
