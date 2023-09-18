import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  favorites: Post[]=[];


  constructor() {
    if (localStorage.getItem('favorites')) {
      this.favorites = JSON.parse(localStorage.getItem('favorites')!)

    }
  }

  savePost(post: Post) {
    this.favorites.push(post);
    localStorage.setItem("favorites",JSON.stringify(this.favorites))

  }


  removePost(post: Post) {
    this.favorites = this.favorites.filter(p => p.id !== post.id)
    localStorage.setItem("favorites", JSON.stringify(this.favorites))
  }

  toggleFavorite(post:Post){
    if (this.isFavorite(post)) {
      this.removePost(post)

    } else{
      this.savePost(post)
    }


  }
  isFavorite(post: Post):boolean {
    return this.isFavorite.some(p => p.id === post.id)
  }



}

