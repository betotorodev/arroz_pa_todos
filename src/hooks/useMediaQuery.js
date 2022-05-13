import { useEffect, useState } from 'react';

export const Breakpoints = {
    small: '(min-width: 320px)',
    medium: '(min-width: 480px)',
    large: '(max-width: 768px)',
    xLarge: '(min-width: 1024px)',
    xxLarge: '(min-width: 1440px)',
}

export const useMediaQuery = (query) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = (e) => setMatches(e.matches);
        mediaMatch.addEventListener('change', handler);
        return () => mediaMatch.removeEventListener('change', handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return matches;
};

export const useSmallBreakpoint = () => useMediaQuery(Breakpoints.small);
export const useMediumBreakpoint = () => useMediaQuery(Breakpoints.medium);
export const useLargeBreakpoint = () => useMediaQuery(Breakpoints.large);
export const useXLargeBreakpoint = () => useMediaQuery(Breakpoints.xLarge);
export const useXXLargeBreakpoint = () => useMediaQuery(Breakpoints.xxLarge);
