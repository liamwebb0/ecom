import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-black text-white'>
      <div className='px-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center header-button font-extrabold text-2xl m-1'
            >
              <Image
                src='/icons/logo.svg'
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
