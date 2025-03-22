import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">404 - 页面未找到</h1>
      <p className="mt-4 text-muted-foreground">
        抱歉，您要访问的页面不存在。
      </p>
      <Link href="/" className="mt-8">
        <Button>返回首页</Button>
      </Link>
    </div>
  );
} 