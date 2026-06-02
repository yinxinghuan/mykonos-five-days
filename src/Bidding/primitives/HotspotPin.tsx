import './HotspotPin.less';

interface Props {
  x: number; y: number;     // 0-100 in the visible-safe range
  label: string;
  visited?: boolean;
  onClick: () => void;
}

// Platform crops 13% of each horizontal edge — remap content.ts coordinates
// from [0, 100] into the central [13, 87] viewport range so pins land in
// the safe area. See feedback_platform_safe_area_13pct.md.
const remapX = (x: number) => 13 + (x * 0.74);

// Small pulsing dot on the scene. Label only shows on hover/focus;
// persistent text affordance lives in the bottom ChoiceList.
export default function HotspotPin({ x, y, label, visited, onClick }: Props) {
  return (
    <button
      className={`bd-pin ${visited ? 'is-visited' : ''}`}
      style={{ left: `${remapX(x)}%`, top: `${y}%` }}
      onPointerDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      aria-label={label}
    >
      <span className="bd-pin__rings" aria-hidden>
        <i /><i />
      </span>
      <span className="bd-pin__dot" aria-hidden />
      <span className="bd-pin__label">{label}</span>
    </button>
  );
}
