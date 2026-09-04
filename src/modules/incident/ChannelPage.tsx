import { StubPage } from '@/components/StubPage';
import { LABELS } from '@/data/vocab';

export function ChannelPage() {
  return <StubPage title="Incident" sentence={LABELS.comingLater} linkTo="/incident" linkLabel="Back to incident" />;
}
