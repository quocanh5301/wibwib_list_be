module.exports = class Manganime{
    constructor(title, category, description, favorite, watched, isManga, releaseYear, author, imageUrl){
        this.title = title;
        this.category = category;
        this.description = description;
        this.favorite = favorite;
        this.watched = watched;
        this.isManga = isManga;
        this.releaseYear = releaseYear;
        this.author = author;
        this.imageUrl = imageUrl;
    }
}