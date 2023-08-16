interface ToDo {
  id?: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isInProgress: boolean;
  editedAt: Date;
}

export default ToDo;
