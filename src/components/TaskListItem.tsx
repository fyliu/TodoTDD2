import React from "react";

export type TaskItem = {
  title: string;
  date: Date;
};

type Props = TaskItem;

export const TaskListItem: React.FC<Props> = ({ title, date }) => <></>;
