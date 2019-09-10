import { useEffect } from 'react';

export const useOnClickOutside = (
    ref: React.MutableRefObject<HTMLInputElement>,
    handler: any,
) => {
    useEffect(() => {
        const listener = (event: Event) => {
            const target = event.target as HTMLElement;
            if (!ref.current || ref.current.contains(target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
};
