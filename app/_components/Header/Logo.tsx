import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 space-x-reverse">
      <span className="text-2xl font-bold text-primary-500">هم‌خدمتی</span>
    </Link>
  );
}
