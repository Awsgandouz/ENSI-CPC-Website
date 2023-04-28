import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
})
export class About {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('about - Character NFT template')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'about - Character NFT template',
      },
    ])
  }
}
