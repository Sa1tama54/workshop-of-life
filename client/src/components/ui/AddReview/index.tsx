import { createPortal } from 'react-dom';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

interface PModalProps extends PropsWithChildren {
  selector: string;
}

const PModal = ({ children, selector }: PModalProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    ref.current = document.querySelector<HTMLElement>(selector);

    return () => {
      setMounted(false);
    };
  }, [selector]);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};

export default PModal;
