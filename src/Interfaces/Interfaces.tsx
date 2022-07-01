export interface istatus {
  FirstName: String;
  SecondName: String;
  Email: String;
  PhoneNumber: String;
  Password: String;
}
export interface IuserInfo {
  Status: istatus;
  Setstatus: (value: istatus) => void;
}

export interface IPasswordEntry {
  GoNext: boolean;
  SetGoNext: any;
}

export interface IStepperController {
  GoNext: boolean;
  handleClick(direction: any): void;
  currentStep: number;
  steps: String[];
}
