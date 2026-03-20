import '../Button.css';
import { Button } from "../Button";

export const createButton = ({
  variant = 'filled',
  size = 'medium',
  disabled,
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = new Button("primary-btn",
    {
      text: label,
      disabled: disabled,
    }
  );

  btn.options.classes.push(variant + '-btn');
  btn.render();//更動option要記得render()

  return btn._elem;
};
