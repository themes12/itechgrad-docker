import React, { ChangeEventHandler } from "react";
import { useCheckbox, Chip, VisuallyHidden, tv } from "@nextui-org/react";

const checkbox = tv({
  slots: {
    base: "border-default hover:bg-default-200",
    content: "text-default-500"
  },
  variants: {
    isSelected: {
      true: {
        base: "border-primary bg-primary hover:bg-primary-500 hover:border-primary-500",
        content: "text-primary-foreground"
      }
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      }
    }
  }
})

const SelectableChip = ({ text, isSelected, handleSelect }: {text: string; isSelected: boolean; handleSelect: ((isSelected: boolean) => void) | undefined;}) => {
  const {
    isFocusVisible,
    getBaseProps,
    getLabelProps,
    getInputProps,
  } = useCheckbox({
    defaultSelected: false,
    isSelected: isSelected,
    onValueChange: handleSelect
  })

  const styles = checkbox({ isSelected, isFocusVisible })

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="secondary"
        variant="faded"
        {...getLabelProps()}
      >
        {text ? text : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  )
}

export default SelectableChip;
