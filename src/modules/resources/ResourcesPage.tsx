import { StubPage } from '@/components/StubPage';
import { LABELS } from '@/data/vocab';

export type ResourcesTab = 'requests' | 'inventory' | 'from-message';

export function ResourcesPage({ tab }: { tab: ResourcesTab }) {
  return <StubPage title="Resources" sentence={`${LABELS.comingLater} (${tab})`} />;
}
