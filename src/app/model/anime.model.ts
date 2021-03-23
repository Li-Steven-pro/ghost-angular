export class Anime {
    mal_id : number;
    title : string;
    url : string;
    image_url : string;

    constructor(_mal_id : number){
        this.mal_id = _mal_id
        this.title = "";
        this.url = "";
        this.image_url = "";
    }
}