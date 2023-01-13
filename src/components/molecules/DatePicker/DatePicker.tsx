import { Input, Icon } from "@app/components/atoms";

export const DatePicker = () => {
  return (
    <div className="date__wrapper">
      <Input
        placeholder="Date"
        label="Date"
        id="date"
        className="date--picker"
      />
      <div className="date--icon">
        <Icon name="calender" />
      </div>
    </div>
  );
};
