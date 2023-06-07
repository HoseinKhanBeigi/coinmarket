import { useRef } from 'react';
import '../../styles/input.scss';
import { forwardRef } from 'react';
export const InputText = forwardRef(({ label }, ref) => {
  return (
    <div className="field">
      <input ref={ref} type="number" placeholder={label} />
    </div>
  );
});
