// Every enum value, label and colour key used in the UI lives here (CLAUDE.md § Conventions).
import type {
  AcceptsLevel,
  CareLevel,
  Equipment,
  MoveStatus,
  NodeStatus,
  NodeType,
  Priority,
  Profession,
  RequestStatus,
  ResourceCategory,
  SharingLevel,
  Source,
  Stability,
  SyncState,
  TaskStatus,
  TransportNeed,
} from './types';

// ---------------------------------------------------------------------------
// Current user (SPEC.md § 2.3)
export const CURRENT_USER = { name: 'Eva Lind', initials: 'EL', role: 'Operations manager' } as const;
export const SYSTEM_ACTOR = 'System';

// ---------------------------------------------------------------------------
// Navigation (SPEC.md § 2.1)
export interface ModuleDef {
  key: string;
  label: string;
  path: string;
  existing: boolean;
}
export const MODULES: ModuleDef[] = [
  { key: 'patients', label: 'Patients', path: '/patients', existing: true },
  { key: 'activities', label: 'Activities', path: '/activities', existing: true },
  { key: 'planning', label: 'Planning', path: '/planning', existing: true },
  { key: 'employees', label: 'Employees', path: '/employees', existing: true },
  { key: 'reporting', label: 'Reporting', path: '/reporting', existing: true },
  { key: 'command-center', label: 'Command Center', path: '/command-center', existing: false },
  { key: 'incident', label: 'Incident', path: '/incident', existing: false },
  { key: 'evacuation', label: 'Evacuation', path: '/evacuation', existing: false },
  { key: 'resources', label: 'Resources', path: '/resources', existing: false },
  { key: 'network', label: 'Network', path: '/network', existing: false },
];

export const REGION_ID = 'region';
export const REGION_NAME = 'Region Nord';
export const HOME_NODE_ID = 'vikby';
export const DEMO_DATE = 'Friday 4 September 2026';
export const DEMO_DATE_SHORT = 'Friday 4 September';

// ---------------------------------------------------------------------------
// Enum value lists (order matters where the UI shows chains or filters)
export const NODE_TYPES: NodeType[] = ['Hospital', 'Care hub', 'Field hospital', 'Home care'];
export const NODE_STATUSES: NodeStatus[] = ['Operational', 'Degraded', 'Standing up', 'Offline'];
export const SHARING_LEVELS: SharingLevel[] = ['Full', 'Capacity only', 'None'];
export const SOURCES: Source[] = ['EHR', 'HR', 'RIS', 'OR planning', 'Logistics', 'Manual', 'Medoma', 'Mirror'];
export const SYNC_STATES: SyncState[] = ['Synced', 'Delayed', 'Manual', 'Offline'];
export const STABILITIES: Stability[] = ['Stable', 'Monitor', 'Critical'];
export const CARE_LEVELS: CareLevel[] = ['Ward', 'Monitored', 'Intensive'];
export const ACCEPTS_LEVELS: AcceptsLevel[] = ['Ward', 'Monitored', 'Intensive', 'Home'];
export const TRANSPORT_NEEDS: TransportNeed[] = ['Walking', 'Wheelchair', 'Stretcher', 'Ambulance', 'Intensive care transport'];
export const EQUIPMENT: Equipment[] = ['Oxygen', 'IV infusion', 'Monitoring'];
export const MOVE_STATUSES: MoveStatus[] = ['Planned', 'Accepted', 'Transport assigned', 'Departed', 'Arrived', 'Handed over'];
export const PRIORITIES: Priority[] = ['Low', 'Normal', 'High', 'Critical'];
export const REQUEST_STATUSES: RequestStatus[] = ['Requested', 'Accepted', 'Allocated', 'Dispatched', 'Received', 'Rejected'];
export const REQUEST_CHAIN: RequestStatus[] = ['Requested', 'Accepted', 'Allocated', 'Dispatched', 'Received'];
export const TASK_STATUSES: TaskStatus[] = ['Not started', 'In progress', 'Done'];
export const RESOURCE_CATEGORIES: ResourceCategory[] = ['Equipment', 'Transport', 'Team', 'Supply'];
export const PROFESSIONS: Profession[] = ['Doc', 'Nrs', 'AsPr', 'Supp'];

export const STABILITY_TO_CARE_LEVEL: Record<Stability, CareLevel> = {
  Stable: 'Ward',
  Monitor: 'Monitored',
  Critical: 'Intensive',
};

export type SupplyStatus = 'Ok' | 'Low' | 'Critical';
export const SUPPLY_STATUSES: SupplyStatus[] = ['Ok', 'Low', 'Critical'];
export const INVENTORY_STATUS_OUT_OF_SERVICE = 'Out of service';

// ---------------------------------------------------------------------------
// Chip tones (DESIGN.md § 1 semantic mapping)
export type ChipTone = 'green' | 'warning' | 'red' | 'grey' | 'blue';

const TONES: Record<string, ChipTone> = {
  Operational: 'green',
  Synced: 'green',
  Ok: 'green',
  Done: 'green',
  Stable: 'green',
  Received: 'green',
  'Handed over': 'green',
  Degraded: 'warning',
  Delayed: 'warning',
  Low: 'warning',
  Estimated: 'warning',
  Monitor: 'warning',
  'Standing up': 'warning',
  Suggested: 'warning',
  'What-if, not saved': 'warning',
  'Operating on mirror': 'warning',
  Offline: 'red',
  Critical: 'red',
  'Out of service': 'red',
  Rejected: 'red',
  Unknown: 'grey',
  'Not started': 'grey',
  'Not shared': 'grey',
  Manual: 'grey',
  'In progress': 'blue',
  Planned: 'blue',
  Requested: 'blue',
  Accepted: 'blue',
  Allocated: 'blue',
  Dispatched: 'blue',
  'Transport assigned': 'blue',
  Departed: 'blue',
  Arrived: 'blue',
  Active: 'blue',
  Incident: 'blue',
  Limiting: 'red',
};

export function toneOf(label: string): ChipTone {
  return TONES[label] ?? 'grey';
}

export const PROFESSION_LABELS: Record<Profession, string> = {
  Doc: 'Doctor',
  Nrs: 'Nurse',
  AsPr: 'Assistant nurse',
  Supp: 'Support',
};

// ---------------------------------------------------------------------------
// Transport compatibility (SPEC.md § 6.3)
export const TRANSPORT_COMPATIBILITY: Record<TransportNeed, string[]> = {
  Walking: ['Taxi contract', 'Medical bus', 'Patient transport vehicle', 'Ambulance'],
  Wheelchair: ['Patient transport vehicle', 'Medical bus', 'Ambulance'],
  Stretcher: ['Patient transport vehicle', 'Ambulance'],
  Ambulance: ['Ambulance'],
  'Intensive care transport': ['Ambulance'],
};

export const ACCEPTS_FOR_CARE_LEVEL: Record<CareLevel, AcceptsLevel> = {
  Ward: 'Ward',
  Monitored: 'Monitored',
  Intensive: 'Intensive',
};

// ---------------------------------------------------------------------------
// UI strings shared across modules
export const LABELS = {
  demo: 'Demo',
  simulateEhrOutage: 'Simulate EHR outage',
  resetDemoData: 'Reset demo data',
  demoDataReset: 'Demo data reset',
  demoClock: (hhmm: string) => `Demo clock: ${hhmm}, ${DEMO_DATE}. Advances one minute per action.`,
  comingLater: 'Coming in a later batch',
  stubSentence: 'This module exists in Medoma today and is outside the scope of this prototype.',
  goToCommandCenter: 'Go to Command Center',
  openIncident: 'Open incident',
  closeIncident: 'Close incident',
  incidentBanner: (name: string, at: string, by: string, commander: string) =>
    `Incident mode active: ${name}. Activated ${at} by ${by}. Incident commander: ${commander}.`,
  notShared: 'Not shared',
  notAvailableAtNode: 'Not available at this node',
  estimated: 'Estimated',
  lastConfirmed: (at: string, source: string) => `Last confirmed ${at} (${source})`,
  olderThan30: 'Older than 30 minutes',
  operatingOnMirror: 'Operating on mirror',
  ehrOffline: (since: string) => `EHR offline, operating on mirror since ${since}`,
  showDetail: 'Show detail',
  log: 'Log',
  showLog: 'Show log',
  auditLog: 'Audit log',
  change: 'Change',
  cancel: 'Cancel',
  none: 'None',
} as const;

export const AUDIT = {
  ehrLost: 'EHR connection lost, switched to operational mirror',
  ehrRestored: 'EHR connection restored',
} as const;

export const ICON_TINTS = {
  beds: { icon: 'text-primary', tile: 'bg-indigo-light' },
  intensive: { icon: 'text-red-icon', tile: 'bg-red-light' },
  theatres: { icon: 'text-purple', tile: 'bg-purple-light' },
  imaging: { icon: 'text-indigo', tile: 'bg-indigo-light' },
  ed: { icon: 'text-orange', tile: 'bg-orange-light' },
  staff: { icon: 'text-green', tile: 'bg-green-light' },
  transport: { icon: 'text-teal', tile: 'bg-indigo-light' },
  supplies: { icon: 'text-olive', tile: 'bg-orange-light' },
} as const;
