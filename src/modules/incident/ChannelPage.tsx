import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { useStore } from '@/data/store';
import { INCIDENT } from '@/data/vocab';
import { PageTitle } from '@/components/PageTitle';
import { MessageThread } from '@/components/MessageThread';
import { StubPage } from '@/components/StubPage';

/** SPEC.md § 6.2.3 – channel thread view. */
export function ChannelPage() {
  const { channelId } = useParams();
  const incident = useStore((s) => s.incident);
  const sendChannelMessage = useStore((s) => s.sendChannelMessage);
  const channel = incident?.channels.find((c) => c.id === channelId);

  if (!incident || !channel) {
    return <StubPage title={INCIDENT.title} sentence={INCIDENT.noActive} linkTo="/incident" linkLabel={INCIDENT.backToIncident} />;
  }

  return (
    <div className="space-y-4">
      <Link to="/incident" className="text-primary hover:text-primary-hover hover:underline">
        {INCIDENT.backToIncident}
      </Link>
      <PageTitle title={channel.name} scope={incident.name} />
      <p className="text-small text-text-secondary">{INCIDENT.members(channel.memberRoles)}</p>
      <MessageThread
        messages={channel.messages}
        className="h-[calc(100vh-300px)] min-h-[360px] max-w-[900px]"
        onSend={(text) => {
          sendChannelMessage(channel.id, text);
          toast(INCIDENT.messageSent);
        }}
      />
    </div>
  );
}
