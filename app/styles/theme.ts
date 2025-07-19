import { keyframes } from '@emotion/react';

// Animations - define once, use everywhere
export const animations = {
  float: keyframes`
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(2deg); }
  `,
  glow: keyframes`
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.7; }
  `,
  fadeInUp: keyframes`
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  shimmer: keyframes`
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  `
};

// Core theme object
export const theme = {
  colors: {
    primary: '#fff5e1',
    accent: '#ffcc80',
    dark: '#402f25',
    darkSecondary: '#382222',
    border: 'rgba(170, 170, 157, 0.8)',
    text: {
      primary: '#fff5e1',
      secondary: '#e0d6c9',
      tertiary: '#c4a484'
    },
    overlay: {
      light: 'rgba(255, 204, 128, 0.1)',
      medium: 'rgba(170, 170, 157, 0.1)',
      dark: 'rgba(64, 47, 37, 0.2)',
      particle: 'rgba(255, 245, 225, 0.02)',
      glass: 'rgba(0, 0, 0, 0.3)',
      glassLight: 'rgba(255, 255, 255, 0.03)',
      glassBorder: 'rgba(255, 255, 255, 0.1)',
      glassHover: 'rgba(255, 204, 128, 0.1)',
      accent: 'rgba(255, 204, 128, 0.2)'
    },
    orb: 'rgba(255, 204, 128, 0.2)',
    shadow: {
      main: 'rgba(0, 0, 0, 0.8)',
      inset: 'rgba(255, 204, 128, 0.1)',
      outer: 'rgba(170, 170, 157, 0.2)',
      card: 'rgba(0, 0, 0, 0.4)',
      hover: 'rgba(255, 204, 128, 0.2)'
    },
    glow: {
      primary: 'rgba(255, 204, 128, 0.3)',
      secondary: 'rgba(170, 170, 157, 0.3)'
    }
  },
  
  spacing: {
    xs: '10px',
    sm: '20px',
    md: '30px',
    lg: '40px',
    xl: '60px',
    xxl: '100px'
  },
  
  borderRadius: {
    sm: '8px',
    md: '15px',
    lg: '17px',
    round: '50%'
  },
  
  shadows: {
    main: `
      0 0 50px rgba(0, 0, 0, 0.8),
      inset 0 0 20px rgba(255, 204, 128, 0.1),
      0 0 100px rgba(170, 170, 157, 0.2)
    `,
    glow: (size = '2px') => `
      0 0 ${size} rgba(255, 204, 128, 0.5),
      0 0 ${parseInt(size) * 2}px rgba(170, 170, 157, 0.3)
    `
  },
  
  gradients: {
    atmospheric: `
      radial-gradient(circle at 20% 20%, rgba(255, 204, 128, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(170, 170, 157, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 70%, rgba(64, 47, 37, 0.2) 0%, transparent 50%)
    `,
    cardBackground: `
      linear-gradient(135deg, 
        rgba(64, 47, 37, 0.95) 0%, 
        rgba(56, 34, 34, 0.95) 50%, 
        rgba(64, 47, 37, 0.95) 100%
      )
    `,
    borderGlow: `
      linear-gradient(45deg, rgba(255, 204, 128, 0.3), rgba(170, 170, 157, 0.3))
    `,
    divider: `
      linear-gradient(90deg, transparent, #ffcc80, transparent)
    `,
    shimmerTitle: `
      linear-gradient(45deg, #fff5e1, #ffcc80, #e0d6c9)
    `,
    underline: `
      linear-gradient(90deg, #ffcc80, #fff5e1)
    `
  },
  
  breakpoints: {
    mobile: '600px',
    tablet: '900px',
    desktop: '1200px'
  },
  
  typography: {
    heading: {
      fontFamily: "'EB Garamond', serif",
      fontSize: '2.5rem',
      letterSpacing: '3px',
      textTransform: 'uppercase' as const
    },
    title: {
      fontFamily: "'EB Garamond', serif",
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 'normal'
    },
    subtitle: {
      fontSize: '1.2rem',
      fontStyle: 'italic' as const,
      opacity: 0.9
    },
    blogEntry: {
      fontFamily: "'EB Garamond', serif",
      fontSize: '1.3rem'
    },
    stat: {
      number: '2rem',
      label: '0.9rem'
    }
  },
  
  effects: {
    backdropBlur: 'blur(10px)',
    particlePattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff5e1' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }
};

// Define theme type first
export type Theme = typeof theme;

// Common mixins
export const mixins = {
  fullViewport: `
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  `,
  
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  
  absoluteOverlay: `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  `,
  
  glassCard: (t: Theme) => `
    border: 3px solid ${t.colors.border};
    border-radius: ${t.borderRadius.md};
    box-shadow: ${t.shadows.main};
    backdrop-filter: ${t.effects.backdropBlur};
    background: ${t.gradients.cardBackground};
    position: relative;
  `,
  
      responsivePadding: (t: Theme) => `
    padding: ${t.spacing.lg} ${t.spacing.xl};
    
    @media (max-width: ${t.breakpoints.tablet}) {
      padding: ${t.spacing.md} ${t.spacing.lg};
    }
    
    @media (max-width: ${t.breakpoints.mobile}) {
      padding: ${t.spacing.sm} ${t.spacing.md};
    }
  `,
  
  animatedTitle: (t: Theme) => `
    font-family: ${t.typography.title.fontFamily};
    font-size: ${t.typography.title.fontSize};
    color: ${t.colors.primary};
    background: ${t.gradients.shimmerTitle};
    background-size: 200px 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${animations.shimmer} 3s ease-in-out infinite;
  `,
  
  glassContainer: (t: Theme) => `
    background: ${t.colors.overlay.glass};
    border-radius: ${t.borderRadius.md};
    box-shadow: 0 8px 32px ${t.colors.shadow.card};
    backdrop-filter: blur(5px);
    border: 1px solid ${t.colors.overlay.glassBorder};
  `,
  
  hoverTransform: `
    transition: all 0.3s ease;
    &:hover {
      transform: translateX(10px);
    }
  `,
  
  underlineEffect: (t: Theme) => `
    position: relative;
    overflow: hidden;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${t.gradients.underline};
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  `
};

// Refactored components using the theme
export const layoutStyles = {
  pageLayout: `
    ${mixins.fullViewport}
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    position: relative;
  `,
  
  mainContent: (t: Theme) => `
    flex: 1;
    ${mixins.fullViewport}
    background-image: url('/back.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${t.colors.primary};
    position: relative;
    padding: ${t.spacing.sm};
    
    &::before {
      content: '';
      ${mixins.absoluteOverlay}
      background: ${t.gradients.atmospheric};
      z-index: 1;
    }
    
    &::after {
      content: '';
      ${mixins.absoluteOverlay}
      background: ${t.effects.particlePattern};
      z-index: 1;
    }
  `,
  
  floatingElements: (t: Theme) => `
    ${mixins.absoluteOverlay}
    z-index: 2;
    
    .floating-orb {
      position: absolute;
      border-radius: ${t.borderRadius.round};
      background: radial-gradient(circle, ${t.colors.orb} 0%, transparent 70%);
      animation: ${animations.float} 8s ease-in-out infinite;
      
      &:nth-child(1) {
        width: 120px;
        height: 120px;
        top: 15%;
        left: 10%;
        animation-delay: 0s;
      }
      
      &:nth-child(2) {
        width: 80px;
        height: 80px;
        top: 70%;
        right: 15%;
        animation-delay: 2s;
      }
      
      &:nth-child(3) {
        width: 60px;
        height: 60px;
        bottom: 20%;
        left: 20%;
        animation-delay: 4s;
      }
    }
  `,
  
  contentSection: (t: Theme) => `
    ${mixins.glassCard(t)}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${mixins.responsivePadding(t)}
    color: ${t.colors.primary};
    z-index: 3;
    margin: 2em auto;
    max-width: 90%;
    min-height: 60vh;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: ${t.gradients.borderGlow};
      border-radius: ${t.borderRadius.lg};
      z-index: -1;
      animation: ${animations.glow} 4s ease-in-out infinite;
    }
    
    h2 {
      font-family: ${t.typography.heading.fontFamily};
      font-size: ${t.typography.heading.fontSize};
      color: ${t.colors.primary};
      text-transform: ${t.typography.heading.textTransform};
      letter-spacing: ${t.typography.heading.letterSpacing};
      margin-bottom: 2rem;
      text-align: center;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: ${t.spacing.xxl};
        height: 2px;
        background: ${t.gradients.divider};
      }
    }
    
    & > * {
      position: relative;
      z-index: 1;
    }
    
    @media (max-width: ${t.breakpoints.tablet}) {
      max-width: 95%;
      min-height: 50vh;
    }
    
    @media (max-width: ${t.breakpoints.mobile}) {
      min-height: 40vh;
    }
  `,
  
  contentWrapper: (t: Theme) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: ${t.breakpoints.desktop};
    margin: 0 auto;
    position: relative;
    z-index: 3;
  `,
  
  // Page-specific layouts
  homeSection: (t: Theme) => `
    ${mixins.glassCard(t)}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${mixins.responsivePadding(t)}
    color: ${t.colors.primary};
    z-index: 3;
    margin: 2em auto;
    max-width: 90%;
    min-height: 60vh;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: ${t.gradients.borderGlow};
      border-radius: ${t.borderRadius.lg};
      z-index: -1;
      animation: ${animations.glow} 4s ease-in-out infinite;
    }
    
    & > * {
      position: relative;
      z-index: 1;
    }
    
    @media (max-width: ${t.breakpoints.tablet}) {
      max-width: 95%;
      min-height: 50vh;
    }
    
    @media (max-width: ${t.breakpoints.mobile}) {
      min-height: 40vh;
    }
    text-align: left;
    animation: ${animations.fadeInUp} 0.8s ease-out;
    
    /* Add the missing animations that were in original */
    text-align: left;
    animation: ${animations.fadeInUp} 0.8s ease-out;
    
    .intro-section {
      margin-bottom: 1rem;
      text-align: center;
      
      .site-title {
        ${mixins.animatedTitle(t)}
        margin-bottom: 1rem;
      }
      
      .site-subtitle {
        font-size: ${t.typography.subtitle.fontSize};
        color: ${t.colors.text.tertiary};
        font-style: ${t.typography.subtitle.fontStyle};
        margin-bottom: 2rem;
        opacity: ${t.typography.subtitle.opacity};
      }
    }
    
    .blogs-section {
      .blogs-title {
        ${t.typography.heading.fontFamily && `font-family: ${t.typography.heading.fontFamily};`}
        font-size: ${t.typography.heading.fontSize};
        color: ${t.colors.text.primary};
        text-transform: ${t.typography.heading.textTransform};
        letter-spacing: ${t.typography.heading.letterSpacing};
        margin-bottom: 2rem;
        text-align: center;
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: ${t.spacing.xxl};
          height: 2px;
          background: ${t.gradients.divider};
        }
      }

      .blog-list {
        display: grid;
        gap: 1rem;
        ${mixins.glassContainer(t)}
        padding: 2rem;
      }

      .blog-entry {
        display: flex;
        align-items: center;
        font-family: ${t.typography.blogEntry.fontFamily};
        font-size: ${t.typography.blogEntry.fontSize};
        color: ${t.colors.text.secondary};
        padding: 1rem;
        background: ${t.colors.overlay.glassLight};
        border-radius: ${t.borderRadius.sm};
        transition: all 0.3s ease;
        border-left: 3px solid transparent;
        
        &:hover {
          background: ${t.colors.overlay.glassHover};
          transform: translateX(10px);
          border-left-color: ${t.colors.accent};
          box-shadow: 0 4px 20px ${t.colors.shadow.hover};
        }
      }

      .index-number {
        font-size: 1.1rem;
        margin-right: 1rem;
        color: ${t.colors.accent};
        font-weight: bold;
        min-width: 2rem;
        text-align: center;
        background: ${t.colors.overlay.accent};
        border-radius: ${t.borderRadius.round};
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${t.typography.blogEntry.fontFamily};
      }

      .blog-link {
        color: ${t.colors.text.secondary};
        text-decoration: none;
        transition: all 0.3s ease;
        flex: 1;
        ${mixins.underlineEffect(t)}

        &:hover {
          color: ${t.colors.text.primary};
        }
      }
    }
    
    .stats-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
      
      .stat-item {
        text-align: center;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        border: 1px solid ${t.colors.overlay.glassBorder};
        
        .stat-number {
          font-size: ${t.typography.stat.number};
          font-weight: bold;
          color: ${t.colors.accent};
          display: block;
        }
        
        .stat-label {
          font-size: ${t.typography.stat.label};
          color: ${t.colors.text.tertiary};
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }
    }
  `
};