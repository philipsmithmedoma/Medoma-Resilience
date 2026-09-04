import { useParams } from 'react-router-dom';
import { StubPage } from '@/components/StubPage';
import { useStore } from '@/data/store';
import { LABELS } from '@/data/vocab';

export function NodeDetailPage() {
  const { nodeId } = useParams();
  const node = useStore((s) => s.nodes.find((n) => n.id === nodeId));
  return <StubPage title={node?.name ?? 'Network'} sentence={LABELS.comingLater} linkTo="/network" linkLabel="Back to network" />;
}
