export interface IPost {
    id: number;
    titulo: string;
  }
  
  type Submodulo = SubtitleSubmodulo | ParagraphSubmodulo | HtmlSubmodulo | ListSubmodulo | ImageSubmodulo | ListOrderSubmodulo;
  
  interface SubtitleSubmodulo {
    type: "subtitle";
    content: string;
  }
  
  interface ParagraphSubmodulo {
    type: "paragraph";
    content: string;
  }
  
  interface HtmlSubmodulo {
    type: "html";
    content: string;
  }
  
  interface ListSubmodulo {
    type: "list";
    list: ListItem[];
  }
  
  interface ListOrderSubmodulo {
    type: "listOrder";
    list: ListItem[];
  }
  
  interface ListItem {
    item: string;
  }
  
  interface ImageSubmodulo {
    type: "image";
    src: string;
    alt: string;
    srcset: string;
    sizes: string;
    legend: string;
  }
  