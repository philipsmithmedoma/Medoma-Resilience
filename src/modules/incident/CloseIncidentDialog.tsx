import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { LABELS } from '@/data/vocab';

interface CloseIncidentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * SPEC.md § 6.2.5 – close dialog. Batch 1 wires the banner to this dialog; the closing action
 * itself arrives with the Incident module in Batch 3.
 */
export function CloseIncidentDialog({ open, onOpenChange }: CloseIncidentDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Close incident?</DialogTitle>
          <DialogDescription>The incident log is kept under Previous incidents. Open tasks are left as they are.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            {LABELS.cancel}
          </Button>
          <Button disabled>{LABELS.closeIncident}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
