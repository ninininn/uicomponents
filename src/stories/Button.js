import './Components/styles/Button.css';
import { Button } from "./Components/Button";

export const createButton = ({
  variant = 'filled',
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = new Button("primary-btn",
    {
      text: label,
    }
  );

  btn.options.classes.push(variant + '-btn');
  btn.render();//更動option要記得render()

  return btn._elem;
};
