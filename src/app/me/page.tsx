'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    user && (
      <div className="bg-card border p-6 rounded-lg w-full max-w-sm flex flex-col items-center">
        <Image
          src={user.picture ?? `https://ui-avatars.com/api/?name=${user.name}`}
          alt={user.name ?? user.email ?? 'User image'}
          width={100}
          height={100}
          className="rounded-full mb-4"
        />
        <h3 className="text-xl font-bold mb-1">{user.name}</h3>
        <p className="text-muted-foreground mb-4">({user.email})</p>
        <div className="flex gap-2">
          <Link
            href="/api/auth/me"
            target='_blank'
            className={buttonVariants()}
          >
            View Profile
          </Link>
          <Link
            href="/api/auth/logout"
            className={buttonVariants({ variant: 'outline', className: 'w-[111px]' })}
          >
            Sign Out
          </Link>
        </div>
      </div>
    )
  );
}
