
export interface ThemesAnime {
    mal_id : number,
    title : Array<string>,
    cover : string,
    year : number,
    season : string,
    themes : Array<Theme>
}
export interface Theme {
    title : string,
    theme_id : string,
    type : string,
    artist : string,
    mirrors : Array<Mirror>,
    notes : string,
    episodes : string,
    category : string
}
export interface Mirror {
    quality : string,
    mirror : string,
    audio : string
}
