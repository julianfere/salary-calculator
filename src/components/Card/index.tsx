import { Card as AntCard, Skeleton } from "antd";
import { PropsWithChildren } from "react";

type CardProps = {
  title?: string;
  loading?: boolean;
};

const Card = ({ children, loading, title }: PropsWithChildren<CardProps>) => {
  if (loading) return <Skeleton active />;

  return <AntCard title={title}>{children}</AntCard>;
};

export default Card;
