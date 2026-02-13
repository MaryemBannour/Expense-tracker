// src/constants/theme.ts

export const COLORS = {
  // Main Colors
  primary: "#6C63FF",
  secondary: "#A29BFE",
  accent: "#FF6B6B",
  success: "#51CF66",
  warning: "#FFD93D",
  error: "#FF6B6B",

  // Neutrals
  background: "#F8F9FA",
  card: "#FFFFFF",
  border: "#E8E8E8",
  divider: "#F0F0F0",

  // Text
  text: "#2D3436",
  textSecondary: "#636E72",
  textLight: "#B2BEC3",
  textWhite: "#FFFFFF",

  // Shades
  primaryLight: "#8B83FF",
  primaryDark: "#5952D4",
  secondaryLight: "#C4BFFF",
  secondaryDark: "#7F73E8",

  // Status
  info: "#4F98FD",

  // Overlay
  overlay: "rgba(0, 0, 0, 0.5)",
  overlayLight: "rgba(0, 0, 0, 0.3)",
};

export const CATEGORY_COLORS: Record<string, string> = {
  Food: "#FF6B6B",
  Transport: "#4ECDC4",
  Entertainment: "#FFE66D",
  Health: "#95E1D3",
  Shopping: "#F38181",
  Housing: "#AA96DA",
  Bills: "#FDCB6E",
  Other: "#FCBAD3",
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BORDER_RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  full: 9999,
};

export const FONT_SIZES = {
  xs: 10,
  sm: 12,
  md: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  display: 40,
};

export const FONT_WEIGHTS = {
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
};

export const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: "#6C63FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: "#6C63FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
};
