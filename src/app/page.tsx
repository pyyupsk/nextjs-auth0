'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (!user) return (
    <div className="bg-card border p-6 rounded-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <p className="text-muted-foreground mb-4">Click below to sign in</p>
      <Link
        href="/api/auth/login"
        className={buttonVariants()}
      >
        Sign In
      </Link>
    </div>
  );

  return null;
}
