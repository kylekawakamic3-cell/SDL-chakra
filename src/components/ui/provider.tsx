"use client"

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        /* ── Core Palette: Gray ── */
        gray: {
          white: { value: "#FFFFFF" },
          black: { value: "#000000" },
          5: { value: "#F7F8FA" },
          10: { value: "#EBEDF0" },
          20: { value: "#DFE1E5" },
          30: { value: "#C6C9CF" },
          40: { value: "#AAAEB5" },
          50: { value: "#8C919C" },
          60: { value: "#6C717A" },
          70: { value: "#50545C" },
          80: { value: "#393B40" },
          90: { value: "#27292B" },
          95: { value: "#1C1D1F" },
          100: { value: "#111112" },
        },
        /* ── Core Palette: Gray Alpha (light-theme foreground overlays) ── */
        grayAlpha: {
          5: { value: "rgba(17,17,18,0.04)" },
          10: { value: "rgba(17,17,18,0.10)" },
          20: { value: "rgba(17,17,18,0.20)" },
          30: { value: "rgba(17,17,18,0.30)" },
          40: { value: "rgba(17,17,18,0.40)" },
          50: { value: "rgba(17,17,18,0.50)" },
          60: { value: "rgba(17,17,18,0.60)" },
          65: { value: "rgba(17,17,18,0.65)" },
          70: { value: "rgba(17,17,18,0.70)" },
          80: { value: "rgba(17,17,18,0.80)" },
          90: { value: "rgba(17,17,18,0.90)" },
          95: { value: "rgba(17,17,18,0.95)" },
        },
        /* ── Core Palette: White Alpha (dark-theme foreground overlays) ── */
        whiteAlpha: {
          5: { value: "rgba(255,255,255,0.05)" },
          10: { value: "rgba(255,255,255,0.10)" },
          20: { value: "rgba(255,255,255,0.20)" },
          30: { value: "rgba(255,255,255,0.30)" },
          40: { value: "rgba(255,255,255,0.40)" },
          50: { value: "rgba(255,255,255,0.50)" },
          60: { value: "rgba(255,255,255,0.60)" },
          65: { value: "rgba(255,255,255,0.65)" },
          70: { value: "rgba(255,255,255,0.70)" },
          80: { value: "rgba(255,255,255,0.80)" },
          90: { value: "rgba(255,255,255,0.90)" },
          95: { value: "rgba(255,255,255,0.95)" },
        },
        /* ── Core Palette: Blue ── */
        blue: {
          5: { value: "#F2F7FF" },
          10: { value: "#E8F1FF" },
          20: { value: "#D1E3FF" },
          30: { value: "#ADCBFF" },
          40: { value: "#82B0FF" },
          50: { value: "#4F8DFF" },
          60: { value: "#2266F0" },
          70: { value: "#0E48C4" },
          80: { value: "#103487" },
          90: { value: "#142757" },
          95: { value: "#121B36" },
          100: { value: "#0D121F" },
        },
        /* ── Core Palette: Green ── */
        green: {
          5: { value: "#E6FCF9" },
          10: { value: "#C8F7EF" },
          20: { value: "#A0F0E3" },
          30: { value: "#72DBC8" },
          40: { value: "#49BFA9" },
          50: { value: "#30A18A" },
          60: { value: "#008066" },
          70: { value: "#1C5E50" },
          80: { value: "#164239" },
          90: { value: "#112E27" },
          95: { value: "#0E211D" },
          100: { value: "#0A1714" },
        },
        /* ── Core Palette: Red ── */
        red: {
          5: { value: "#FFF2F5" },
          10: { value: "#FFE5EC" },
          20: { value: "#FFD6E0" },
          30: { value: "#FFB5C5" },
          40: { value: "#FF7893" },
          50: { value: "#FF5271" },
          60: { value: "#DB1C3C" },
          70: { value: "#A80F26" },
          80: { value: "#75121F" },
          90: { value: "#4F131A" },
          95: { value: "#331014" },
          100: { value: "#1F0C0D" },
        },
        /* ── Core Palette: Yellow ── */
        yellow: {
          5: { value: "#FFF6E3" },
          10: { value: "#FFEBC2" },
          20: { value: "#FFDB99" },
          30: { value: "#FFBE4F" },
          40: { value: "#F2950A" },
          50: { value: "#D47C00" },
          60: { value: "#A65E00" },
          70: { value: "#7D4604" },
          80: { value: "#57330A" },
          90: { value: "#3B240C" },
          95: { value: "#26180B" },
          100: { value: "#171008" },
        },
        /* ── Aliases (backward compat) ── */
        primary: {
          50: { value: "#F2F7FF" },
          100: { value: "#E8F1FF" },
          200: { value: "#D1E3FF" },
          300: { value: "#ADCBFF" },
          400: { value: "#82B0FF" },
          500: { value: "#2266F0" },
          600: { value: "#0E48C4" },
          700: { value: "#103487" },
          800: { value: "#142757" },
          900: { value: "#121B36" },
          950: { value: "#0D121F" },
        },
        danger: {
          50: { value: "#FFF2F5" },
          100: { value: "#FFE5EC" },
          200: { value: "#FFD6E0" },
          300: { value: "#FFB5C5" },
          400: { value: "#FF7893" },
          500: { value: "#DB1C3C" },
          600: { value: "#A80F26" },
          700: { value: "#75121F" },
          800: { value: "#4F131A" },
          900: { value: "#331014" },
          950: { value: "#1F0C0D" },
        }
      },
      radii: {
        xs: { value: "2px" },
        sm: { value: "2px" },
        md: { value: "2px" },
        lg: { value: "2px" },
        xl: { value: "2px" },
        "2xl": { value: "2px" },
        "3xl": { value: "2px" },
      }
    },
    semanticTokens: {
      radii: {
        l1: { value: "2px" },
        l2: { value: "2px" },
        l3: { value: "2px" },
      },
      colors: {
        bg: {
          primary: { value: "#FFFFFF" },
          page: { value: "#F7F8FA" },
          selected: { value: "rgba(17, 17, 18, 0.10)" },
        },
        border: {
          weak: { value: "#C6C9CF" },
        },
        fg: {
          primary: { value: "#111112" },
          secondary: { value: "rgba(17, 17, 18, 0.65)" },
          accent: { value: "#2266F0" },
          success: { value: "#008066" },
        },
        primary: {
          contrast: { value: "white" },
          fg: { value: "{colors.primary.700}" },
          subtle: { value: "{colors.primary.100}" },
          muted: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          solid: { value: "{colors.primary.500}" },
          focusRing: { value: "{colors.primary.500}" },
          border: { value: "{colors.primary.500}" },
        },
        danger: {
          contrast: { value: "white" },
          fg: { value: "{colors.danger.500}" },
          subtle: { value: "{colors.danger.100}" },
          muted: { value: "{colors.danger.200}" },
          emphasized: { value: "{colors.danger.300}" },
          solid: { value: "{colors.danger.500}" },
          focusRing: { value: "{colors.primary.500}" },
          border: { value: "{colors.danger.500}" },
        }
      },
      shadows: {
        page: {
          section: {
            value: "0px 1px 2px 0px rgba(17,17,18,0.20), 0px 1px 6px 0px rgba(17,17,18,0.10), 0px 2px 1px 0px rgba(17,17,18,0.04)"
          }
        }
      }
    },
    recipes: {
      button: {
        base: {
          fontWeight: "500",
          fontSize: "14px",
          borderRadius: "2px",
          transition: "all 0.15s ease",
          position: "relative",
          overflow: "hidden",
          _focusVisible: {
            outline: "none",
            boxShadow: "inset 0 0 0 2px white, 0 0 0 1px #2266F0",
          },
          _disabled: {
            opacity: 0.4,
            cursor: "not-allowed",
          },
        },
        variants: {
          size: {
            sm: {
              h: "24px",
              minW: "64px",
              px: "8px",
              gap: "1",
              _icon: { width: "3", height: "3" },
            },
            md: {
              h: "32px",
              minW: "80px",
              px: "12px",
              gap: "1",
              _icon: { width: "3.5", height: "3.5" },
            },
            lg: {
              h: "40px",
              minW: "80px",
              px: "12px",
              gap: "2",
              _icon: { width: "4", height: "4" },
            },
          },
          variant: {
            solid: {
              bg: "#2266F0",
              color: "rgba(255,255,255,0.95)",
              borderColor: "transparent",
              _hover: {
                bg: "#2266F0",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  bg: "rgba(17,17,18,0.04)",
                  borderRadius: "2px",
                },
              },
              _active: {
                bg: "#2266F0",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  bg: "rgba(17,17,18,0.10)",
                  borderRadius: "2px",
                },
              },
            },
            outline: {
              bg: "transparent",
              color: "#2266F0",
              borderWidth: "1px",
              borderColor: "#2266F0",
              _hover: {
                bg: "transparent",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "-1px",
                  bg: "rgba(17,17,18,0.04)",
                  borderRadius: "2px",
                },
              },
              _active: {
                bg: "transparent",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "-1px",
                  bg: "rgba(17,17,18,0.10)",
                  borderRadius: "2px",
                },
              },
            },
            ghost: {
              bg: "transparent",
              color: "#2266F0",
              _hover: {
                bg: "transparent",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  bg: "rgba(17,17,18,0.04)",
                  borderRadius: "2px",
                },
              },
              _active: {
                bg: "transparent",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  bg: "rgba(17,17,18,0.10)",
                  borderRadius: "2px",
                },
              },
            },
            danger: {
              bg: "#DB1C3C",
              color: "rgba(255,255,255,0.95)",
              borderColor: "transparent",
              _hover: {
                bg: "#DB1C3C",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  bg: "rgba(17,17,18,0.04)",
                  borderRadius: "2px",
                },
              },
              _active: {
                bg: "#DB1C3C",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  bg: "rgba(17,17,18,0.10)",
                  borderRadius: "2px",
                },
              },
            },
            dangerOutline: {
              bg: "transparent",
              color: "#DB1C3C",
              borderWidth: "1px",
              borderColor: "#DB1C3C",
              _hover: {
                bg: "transparent",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "-1px",
                  bg: "rgba(17,17,18,0.04)",
                  borderRadius: "2px",
                },
              },
              _active: {
                bg: "transparent",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "-1px",
                  bg: "rgba(17,17,18,0.10)",
                  borderRadius: "2px",
                },
              },
            },
            dangerGhost: {
              bg: "transparent",
              color: "#DB1C3C",
              _hover: {
                bg: "transparent",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  bg: "rgba(17,17,18,0.04)",
                  borderRadius: "2px",
                },
              },
              _active: {
                bg: "transparent",
                _after: {
                  content: '""',
                  position: "absolute",
                  inset: "0",
                  bg: "rgba(17,17,18,0.10)",
                  borderRadius: "2px",
                },
              },
            },
            plain: {
              color: "#393B40",
            },
          },
        },
        defaultVariants: {
          size: "md",
          variant: "solid",
        } as any,
      }
    }
  }
})

export const system = createSystem(defaultConfig, customConfig)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
