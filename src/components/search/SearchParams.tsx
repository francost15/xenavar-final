import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative flex items-center">
      <input
        placeholder="Buscar producto"
        className="input shadow-lg focus:border-2 border-blue-500 px-8 py-3 rounded-xl w-60 transition-all focus:w-64 outline-none"
        name="search"
        type="search"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <IoSearchOutline size={24} className="absolute left-2 text-gray-500" />
    </div>
  );
};

export default SearchBar;
