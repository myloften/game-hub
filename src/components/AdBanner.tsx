interface AdBannerProps {
  type: 'horizontal' | 'vertical' | 'square';
  className?: string;
}

export default function AdBanner({ type, className = '' }: AdBannerProps) {
  const dimensions = {
    horizontal: 'h-[90px] min-w-[728px]',
    vertical: 'h-[600px] w-[160px]',
    square: 'h-[250px] w-[300px]'
  };

  return (
    <div className={`bg-gray-100 rounded-lg overflow-hidden ${dimensions[type]} ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-sm">Advertisement</p>
          <p className="text-gray-500 text-xs mt-1">
            {type === 'horizontal' && '728 x 90'}
            {type === 'vertical' && '160 x 600'}
            {type === 'square' && '300 x 250'}
          </p>
        </div>
      </div>
    </div>
  );
} 