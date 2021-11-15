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

const font = {
  roboto: "'Roboto', sans-serif",
  sansNeo: "'Spoqa Han Sans Neo', sans-serif",
  rhodiumLibre: "'Rhodium Libre', serif",
};

export const theme = {
  device,
  color,
  font,
};
