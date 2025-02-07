import { writable } from 'svelte/store';
import type { Station } from './stationlist';
import { stations } from './stationlist';

export const currentStation = writable(stations[0] as Station);
export const currentTheme = writable('dark-theme');
export const isPlaying = writable(false);
