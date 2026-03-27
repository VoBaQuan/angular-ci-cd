import { AnimationTriggerMetadata, trigger, transition, style, animate } from '@angular/animations';

// Fade + slide down from slightly above (no viewport overflow → no scrollbar flash)
export const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-12px)' }),
    animate('750ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

// Directional slide when switching questions
export const questionSlide: AnimationTriggerMetadata = trigger('questionSlide', [
  transition('* => *', [
    style({ opacity: 0, transform: 'translateX({{ fromX }})' }),
    animate('280ms cubic-bezier(0.0, 0.0, 0.2, 1)', style({ opacity: 1, transform: 'translateX(0)' })),
  ], { params: { fromX: '48px' } }),
]);
