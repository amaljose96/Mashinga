import colors from "../../config/colors";

export const OutsetComponentStyles = `
box-shadow: 5px 5px 13px ${colors.darkShade}E6, 
-5px -5px 10px ${colors.lightShade}E6, 
5px -5px 10px ${colors.darkShade}33, 
-5px 5px 10px ${colors.darkShade}33, 
inset -1px -1px 2px ${colors.darkShade}88, 
inset 1px 1px 2px ${colors.lightShade}4D;
background: linear-gradient(to bottom right, ${colors.lightShade}aa, ${colors.darkShade}aa);
background-color:${colors.background};
border-radius: ${colors.borderRadius};
transition:all 0.3s;
`;

export const OutsetHoverStyles = `
box-shadow: 4px 4px 7px ${colors.darkShade}E6, 
-4px -4px 8px ${colors.lightShade}E6, 
4px -4px 8px ${colors.darkShade}33, 
-4px 4px 8px ${colors.darkShade}33, 
inset -1px -1px 2px ${colors.darkShade}88, 
inset 1px 1px 2px ${colors.lightShade}4D;
`;

export const OutsetActiveStyles = `
box-shadow: 2px 2px 5px ${colors.darkShade}E6, 
-2px -2px 5px ${colors.lightShade}E6, 
2px -2px 5px ${colors.darkShade}33, 
-2px 2px 5px ${colors.darkShade}33, 
inset -1px -1px 2px ${colors.darkShade}88, 
inset 1px 1px 2px ${colors.lightShade}4D;
`;

export const InsetComponentStyles = `
box-shadow: -1px -1px 2px ${colors.darkShade}88, 
1px 1px 2px ${colors.lightShade}4D, 
inset 2px 2px 5px ${colors.darkShade}E6, 
inset -2px -2px 5px ${colors.lightShade}E6, 
inset 2px -2px 5px ${colors.darkShade}33, 
inset -2px 2px 5px ${colors.darkShade}33;
background-color:${colors.background};
border-radius:${colors.borderRadius};
transition:all 0.3s;
`;
export const InsetHoverStyles = `
box-shadow: -1px -1px 2px ${colors.darkShade}88, 
1px 1px 2px ${colors.lightShade}4D, 
inset 4px 4px 8px ${colors.darkShade}E6, 
inset -4px -4px 8px ${colors.lightShade}E6, 
inset 4px -4px 8px ${colors.darkShade}33, 
inset -4px 4px 8px ${colors.darkShade}33;
`;
export const InsetActiveStyles = `
box-shadow: -1px -1px 2px ${colors.darkShade}88, 
1px 1px 2px ${colors.lightShade}4D, 
inset 5px 5px 13px ${colors.darkShade}E6, 
inset -5px -5px 10px ${colors.lightShade}E6, 
inset 5px -5px 10px ${colors.darkShade}33, 
inset -5px 5px 10px ${colors.darkShade}33;
`;
