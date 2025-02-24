import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@workspace/design-system/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@workspace/design-system/components/ui/drawer";
import { useIsMobile } from "@workspace/design-system/hooks/use-mobile";

type ResponsiveModalProps = {
  children: React.ReactNode;
  open: boolean;
  title: string;
  onOpenChange: (open: boolean) => void;
};

export const ResponsiveModal = ({
  open,
  title,
  onOpenChange,
  children,
}: ResponsiveModalProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="pb-10">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
