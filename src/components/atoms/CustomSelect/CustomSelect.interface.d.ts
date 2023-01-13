export type ICustomSelect = {
  label?: string;
  options: string[];
  placeholder: string;
  selectedValue: string;
  onChange: (item: string) => void;
};
