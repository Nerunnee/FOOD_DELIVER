import { Category } from "@/lib/types/categories-types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategorySelectorProps = {
  categories: Category[];
  onSelect: (categoryId: number) => void;
  defaultValue?: number;
};

export function CategorySelector(props: CategorySelectorProps) {
  const { categories, onSelect, defaultValue } = props;

  return (
    <Select
      defaultValue={defaultValue ? String(defaultValue) : undefined}
      onValueChange={(value) => onSelect(Number(value))}
    >
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {categories.map((category) => (
            <SelectItem
              key={category.id}
              value={String(category.id)}
              defaultValue={category.id}
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
