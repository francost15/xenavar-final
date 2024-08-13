import { useUIDropStore } from '@/store';
import Link from 'next/link';

export const DropdownGender = () => {
  const isDropdownOpen = useUIDropStore((state) => state.isDropDownOpen);
  const toggleDropdown = useUIDropStore((state) => state.toggleDropDown);
  const openDropdown = () => !isDropdownOpen && toggleDropdown();
  const closeDropdown = () => isDropdownOpen && toggleDropdown();

  return (
    <div 
      className="relative z-20 hidden sm:block"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        className="p-2 m-2 transition-all rounded-md hover:text-red-700 hover:bg-gray-100"
      >
        Género
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 w-40 transition-all bg-gray-100 rounded-md shadow-md top-10">
          <Link
            className="hidden p-2 transition-all rounded-md md:block hover:bg-gray-200"
            href="/gender/men"
          >
            Hombres
          </Link>
          <Link
            className="hidden p-2 transition-all rounded-md md:block hover:bg-gray-200"
            href="/gender/women"
          >
            Mujeres
          </Link>
        </div>
      )}
    </div>
  );
};