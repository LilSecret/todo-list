import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import { TListItem } from "../types";

type TListItemContext = {
  listItems: TListItem[];
  setListItems: Dispatch<React.SetStateAction<TListItem[]>>;
};

const ListItemContext = createContext<TListItemContext | undefined>(undefined);

export const ListItemProvider = ({ children }: { children: ReactNode }) => {
  const [listItems, setListItems] = useState<TListItem[]>([]);

  return (
    <ListItemContext.Provider value={{ listItems, setListItems }}>
      {children}
    </ListItemContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useListItems = () => {
  const context = useContext(ListItemContext);

  if (!context) {
    throw new Error("List Item Context is not defined");
  }

  return {
    listItems: context.listItems,
    setListItems: context.setListItems,
  };
};
