import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateFormatterFromNow = (date: number | string) => {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
};
