import FadeIn from "../animations/FadeIn";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-secondary-900 flex">
      {/* کل صفحه را به دو بخش مساوی تقسیم می‌کنیم */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md"> {/* افزایش عرض max-w-sm به max-w-md */}
          <FadeIn>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
              <p className="text-gray-400">{subtitle}</p>
            </div>
            {children}
          </FadeIn>
        </div>
      </div>

      {/* بک‌گراند انیمیشنی */}
      <div className="fixed inset-0 -z-10"> {/* تغییر موقعیت بک‌گراند */}
        <div className="absolute inset-0">
          {/* گرادینت پویا */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 via-accent-500/20 to-secondary-900/50 animate-gradient-slow" />
          
          {/* اشکال هندسی متحرک */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full 
              blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-accent-500/20 rounded-full 
              blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-secondary-500/20 rounded-full 
              blur-3xl animate-blob animation-delay-4000" />
          </div>

          {/* پترن شبکه‌ای */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
        </div>
      </div>
    </div>
  );
}
