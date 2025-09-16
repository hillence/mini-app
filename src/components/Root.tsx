import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ErrorBoundary } from '@/components/ErrorBoundary.tsx';
import { publicUrl } from '@/helpers/publicUrl.ts';
import HoldMarketHomepage from '@/components/HoldMarket.tsx';

function ErrorBoundaryError({ error }: { error: unknown }) {
  return (
    <div>
      <p>An unhandled error occurred:</p>
      <blockquote>
        <code>
          {error instanceof Error
            ? error.message
            : typeof error === 'string'
              ? error
              : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

export function Root() {
  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <TonConnectUIProvider
        manifestUrl={publicUrl('tonconnect-manifest.json')}
      >
        <HoldMarketHomepage />
      </TonConnectUIProvider>
    </ErrorBoundary>
  );
}