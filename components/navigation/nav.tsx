import { auth } from '@/server/auth';
import { Button } from '../ui/button';
import { LogIn } from 'lucide-react';
import UserButton from './user-button';
import Link from 'next/link';

const Nav = async () => {
  const session = await auth();

  return (
    <header className="bg-slate-500 py-4">
      <nav>
        <ul className="flex justify-between">
          <li>Logo</li>
          {!session ? (
            <li>
              <Button asChild>
                <Link href={'/auth/login'} className="flex gap-2">
                  <LogIn size={16} />
                  <span>Login</span>
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton expires={session?.expires} user={session?.user} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
