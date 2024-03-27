export interface IButton {
    text: string, 
    isDisabled: boolean, 
    typeButton: string,
}

export interface IInput {
    title: string;
    placeholderText: string;
    disabled: boolean;
    onChange: (e: any) => void;
}

export interface ITextarea {
    title: string;
    placeholderText: string;
    disabled: boolean;
    onChange: (e: any) => void;
}

export interface IPost {
    id: number;
    image?: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
}

export interface IMenuButton {
    isOpen: boolean;
    onClick: () => void;
}

export interface ISearchBar {
    isOpen: boolean;
    toggleSearch: () => void;
}

export interface IHeader {
    onThemeChange: (selectedTheme: string) => void; 
}

export interface IBackButton {
    text: string, 
    isDisabled: boolean, 
}

export type ITheme = 'light' | 'dark';

export interface IThemeType {
    theme: ITheme;
    toggleTheme: (theme: ITheme) => void;
}