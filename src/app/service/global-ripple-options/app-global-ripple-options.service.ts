import { Injectable } from '@angular/core';
import { RippleGlobalOptions } from '@angular/material/core';

/**
 * Global configuration for ripple on click effect
 */
@Injectable({
  providedIn: 'root'
})
export class AppGlobalRippleOptionsService implements RippleGlobalOptions {
  /** Whether ripples should be disabled globally. */
  disabled = false;
  animation= {
    enterDuration: 100,
    exitDuration: 0
  }
}
