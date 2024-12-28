import { AlertCircle } from 'lucide-react';

const FormError = ({ message }: { message?: string }) => {
  if (!message) return null;

  return (
    <div className="bg-destructive text-secondary-foreground rounded-md p-3">
      <AlertCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
