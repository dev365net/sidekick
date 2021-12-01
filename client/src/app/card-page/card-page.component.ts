import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  posts = [
    {
      title: 'title1',
      imageUrl: 'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      username: 'Kenneth',
      content: 'content1'
    },
    {
      title: 'title2',
      imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      username: 'Kenneth',
      content: 'content2'
    },
    {
      title: 'Cinque Terre',
      imageUrl: 'https://images.unsplash.com/photo-1576854042345-96cf17e5835b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80',
      username: 'Kenneth',
      content: 'Rooted in antiquity, Cinque Terres five villages date from the early medieval period. While much of this fetching vernacular architecture remains.'
    },
    {
      title: 'title1',
      imageUrl: 'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      username: 'Kenneth',
      content: 'content1'
    },
    {
      title: 'title2',
      imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      username: 'Kenneth',
      content: 'content2'
    },
    {
      title: 'Cinque Terre',
      imageUrl: 'https://images.unsplash.com/photo-1576854042345-96cf17e5835b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80',
      username: 'Kenneth',
      content: 'Rooted in antiquity, Cinque Terres five villages date from the early medieval period. While much of this fetching vernacular architecture remains.'
    },
    {
      title: 'title1',
      imageUrl: 'https://images.unsplash.com/photo-1477039181047-efb4357d01bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      username: 'Kenneth',
      content: 'content1'
    },
    {
      title: 'title2',
      imageUrl: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      username: 'Kenneth',
      content: 'content2'
    },
    {
      title: 'Cinque Terre',
      imageUrl: 'https://images.unsplash.com/photo-1576854042345-96cf17e5835b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80',
      username: 'Kenneth',
      content: 'Rooted in antiquity, Cinque Terres five villages date from the early medieval period. While much of this fetching vernacular architecture remains.'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
