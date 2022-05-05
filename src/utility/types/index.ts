export interface Folder {
  children: Array<Folder | Item>;
  id: string;
  name: string;
  type: string;
}

export interface Item {
  id: string;
  name: string;
  type: string;
}
