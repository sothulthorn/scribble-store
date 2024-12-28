import { auth } from '@/server/auth';
import { Button } from '../ui/button';
import { LogIn } from 'lucide-react';
import UserButton from './user-button';
import Link from 'next/link';
import Logo from '@/components/navigation/logo';

const Nav = async () => {
  const session = await auth();

  return (
    <header className="py-8">
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href={'/'}>
              <Logo />
              <span>Home</span>
            </Link>
          </li>
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
