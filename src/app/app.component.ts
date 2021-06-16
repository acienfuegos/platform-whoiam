import { Component } from '@angular/core';

import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook,
  faGithub,
  faSpotify
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Artemio Cienfuegos';
  job = 'IT Engineer';
  description = 'Mountains and more Mountains.';
  smallImage = 'assets/img/Jermoso.jpeg';
  bigImage = 'assets/img/Ski.jpeg';

  // Icons
  rrss = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/artemio-cienfuegos-76882563/' },
    { icon: faGithub, url: 'https://github.com/acienfuegos' },
  ]

  navigateTo(url: string) {
    window.open(url);
  }

}
