// Mykonos Five Days — declarative content.
// 5 days × 2 hotspots = 10 choice videos. No examines, no mid-pivot.
// 4 endings clustered by (close, ask) state after Day 5.
//
// Repurposed BiddingState fields for Mykonos semantics:
//   state.mercy        → "close" score (0-100, accumulated)
//   flags.mercerLocked → "ask"  (Day 5 E1 sets this true)

import type { ActDef, ExamineDef, EndingDef, PivotStillDef, EndingId } from './types';

export const EXAMINES: Record<string, ExamineDef> = {};   // no documents in Mykonos
export const PIVOT_STILLS: PivotStillDef[] = [];          // no mid-pivot

export const ACTS: Record<number, ActDef> = {
  1: {
    id: 1,
    titleCard: {
      primaryKey: 'title.day1.primary',
      secondaryKey: 'title.day1.secondary',
      metaKey: 'title.day1.meta',
    },
    hero: 'hero.png',
    hotspots: [
      {
        id: 'd1_a1',
        top: 50, left: 30, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'down',
        labelKey: 'hot.d1.a1',
        video: 'v_day1_a1_couch.mp4',
        endFrame: 'end_day1_a1_couch.png',
        mutation: { mercy: 0 },
        consequenceKey: 'a1',
      },
      {
        id: 'd1_a2',
        top: 60, left: 65, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'left',
        labelKey: 'hot.d1.a2',
        video: 'v_day1_a2_wine.mp4',
        endFrame: 'end_day1_a2_wine.png',
        mutation: { mercy: +15 },
        consequenceKey: 'a2',
      },
    ],
    examines: [],
  },

  2: {
    id: 2,
    titleCard: {
      primaryKey: 'title.day2.primary',
      secondaryKey: 'title.day2.secondary',
      metaKey: 'title.day2.meta',
    },
    hero: 'hero_day2.png',
    hotspots: [
      {
        id: 'd2_b1',
        top: 60, left: 30, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'down',
        labelKey: 'hot.d2.b1',
        video: 'v_day2_b1_towel.mp4',
        endFrame: 'end_day2_b1_towel.png',
        mutation: { mercy: 0 },
        consequenceKey: 'b1',
      },
      {
        id: 'd2_b2',
        top: 55, left: 65, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'left',
        labelKey: 'hot.d2.b2',
        video: 'v_day2_b2_share.mp4',
        endFrame: 'end_day2_b2_share.png',
        mutation: { mercy: +15 },
        consequenceKey: 'b2',
      },
    ],
    examines: [],
  },

  3: {
    id: 3,
    titleCard: {
      primaryKey: 'title.day3.primary',
      secondaryKey: 'title.day3.secondary',
      metaKey: 'title.day3.meta',
    },
    hero: 'hero_day3.png',
    hotspots: [
      {
        id: 'd3_c1',
        top: 55, left: 35, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'down',
        labelKey: 'hot.d3.c1',
        video: 'v_day3_c1_bite.mp4',
        endFrame: 'end_day3_c1_bite.png',
        mutation: { mercy: +15 },
        consequenceKey: 'c1',
      },
      {
        id: 'd3_c2',
        top: 55, left: 65, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'left',
        labelKey: 'hot.d3.c2',
        video: 'v_day3_c2_fork.mp4',
        endFrame: 'end_day3_c2_fork.png',
        mutation: { mercy: +5 },
        consequenceKey: 'c2',
      },
    ],
    examines: [],
  },

  4: {
    id: 4,
    titleCard: {
      primaryKey: 'title.day4.primary',
      secondaryKey: 'title.day4.secondary',
      metaKey: 'title.day4.meta',
    },
    hero: 'hero_day4.png',
    hotspots: [
      {
        id: 'd4_d1',
        top: 45, left: 35, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'down',
        labelKey: 'hot.d4.d1',
        video: 'v_day4_d1_kiss.mp4',
        endFrame: 'end_day4_d1_kiss.png',
        mutation: { mercy: +25 },
        consequenceKey: 'd1',
      },
      {
        id: 'd4_d2',
        top: 55, left: 65, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'left',
        labelKey: 'hot.d4.d2',
        video: 'v_day4_d2_back.mp4',
        endFrame: 'end_day4_d2_back.png',
        mutation: { mercy: -5 },
        consequenceKey: 'd2',
      },
    ],
    examines: [],
  },

  5: {
    id: 5,
    titleCard: {
      primaryKey: 'title.day5.primary',
      secondaryKey: 'title.day5.secondary',
      metaKey: 'title.day5.meta',
    },
    hero: 'hero_day5.png',
    hotspots: [
      {
        id: 'd5_e1',
        top: 50, left: 35, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'down',
        labelKey: 'hot.d5.e1',
        video: 'v_day5_e1_ny.mp4',
        endFrame: 'end_day5_e1_ny.png',
        mutation: { mercy: +10, mercerLocked: true },  // ask=true
        subtitleKey: 'sub.d5.e1',
        triggersFinalCluster: true,
      },
      {
        id: 'd5_e2',
        top: 55, left: 65, width: 1, height: 1,
        pinX: 50, pinY: 50,
        labelDir: 'left',
        labelKey: 'hot.d5.e2',
        video: 'v_day5_e2_thanks.mp4',
        endFrame: 'end_day5_e2_thanks.png',
        mutation: { mercy: 0 },
        subtitleKey: 'sub.d5.e2',
        triggersFinalCluster: true,
      },
    ],
    examines: [],
  },
};

// Ending cluster — read post-Day-5 state and pick one of 4.
//   A. He came: ask=true && close ≥ 50
//   B. The letters: ask=false && close ≥ 40
//   C. The photograph: 15 ≤ close < 40
//   D. The silence: close < 15
export function classifyEnding(close: number, ask: boolean): EndingId {
  if (ask && close >= 50) return 'A';
  if (!ask && close >= 40) return 'B';
  if (close >= 15) return 'C';
  return 'D';
}

export const ENDINGS: Record<string, EndingDef> = {
  A: {
    id: 'A',
    titleKey: 'end.A.title',
    taglineKey: 'end.A.tagline',
    epilogueStills: [
      { src: 'stills/epi_a1_nyc_doorbell.png',   captionKey: 'epi.a1' },
      { src: 'stills/epi_a2_apartment_door.png', captionKey: 'epi.a2' },
      { src: 'stills/epi_a3_nyc_window.png',     captionKey: 'epi.a3' },
    ],
    finalCardKey: 'end.A.final',
  },
  B: {
    id: 'B',
    titleKey: 'end.B.title',
    taglineKey: 'end.B.tagline',
    epilogueStills: [
      { src: 'stills/epi_b1_iphone_dm.png',           captionKey: 'epi.b1' },
      { src: 'stills/epi_b2_sam_lisbon.png',          captionKey: 'epi.b2' },
      { src: 'stills/epi_b3_nyc_desk_year_later.png', captionKey: 'epi.b3' },
    ],
    finalCardKey: 'end.B.final',
  },
  C: {
    id: 'C',
    titleKey: 'end.C.title',
    taglineKey: 'end.C.tagline',
    epilogueStills: [
      { src: 'stills/epi_c1_mailbox.png',         captionKey: 'epi.c1' },
      { src: 'stills/epi_c2_photo_print.png',     captionKey: 'epi.c2' },
      { src: 'stills/epi_c3_desk_with_photo.png', captionKey: 'epi.c3' },
    ],
    finalCardKey: 'end.C.final',
  },
  D: {
    id: 'D',
    titleKey: 'end.D.title',
    taglineKey: 'end.D.tagline',
    epilogueStills: [
      { src: 'stills/epi_d1_quiet_apartment.png', captionKey: 'epi.d1' },
      { src: 'stills/epi_d2_soho_winter.png',     captionKey: 'epi.d2' },
      { src: 'stills/epi_d3_back_in_crowd.png',   captionKey: 'epi.d3' },
    ],
    finalCardKey: 'end.D.final',
  },
};

export const INITIAL_STATE = {
  caution: 0,
  truthAccepted: 0,
  mercy: 0,        // → "close" score
  timeLeft: 100,
};

export const INITIAL_FLAGS = {
  mercerLocked: false,   // → "ask"
  antonescuPath: false,
  yuriPath: false,
  stefanRefused: false,
  pivotTriggered: false,
};
