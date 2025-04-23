import { IButtonProps } from "@/app/types/IButtonProps";

const Button: React.FC<IButtonProps> = ({
    label,
    onClick,
    disabled,
    variant = 'primary',
  }) => {
    const classes = [
      'inline-flex',
      'items-center',
      'justify-center',
      'px-4',
      'py-2',
      'border',
      'border-transparent',
      'rounded-md',
      'shadow-sm',
      'text-sm',
      'font-medium',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
    ];
  
    switch (variant) {
      case 'primary':
        classes.push('bg-orange-600', 'hover:bg-orange-700', 'text-white');
        break;
      case 'secondary':
        classes.push('bg-gray-200', 'hover:bg-gray-300', 'text-gray-600');
        break;
      case 'danger':
        classes.push('bg-red-600', 'hover:bg-red-700', 'text-white');
        break;
      default:
        throw new Error(`Invalid variant: ${variant}`);
    }
  
    if (disabled) {
      classes.push('opacity-50', 'cursor-not-allowed');
    }
  
    return (
      <button
        className={classes.join(' ')}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  };
  
  export default Button;