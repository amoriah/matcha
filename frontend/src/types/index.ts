export interface IInputsConfig {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error: string;
  validate: (value: string) => string;
}

export type inputValuesType = Record<string, string>;

export type inputErrorsType = Record<string, string | null> | null;

export type postDataType = Record<string, string>;

export type eventType = React.ChangeEvent<HTMLInputElement>;
