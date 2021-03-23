export class Theme{
    title : string;
    artist : string; 
    anime : string; 
    type : string;
    url : string; 

    constructor(_title : string, _artist : string, _type : string){
        this.title = _title;
        this.artist = _artist;
        this.anime = "";
        this.type = _type;
        this.url = "";
    }
}