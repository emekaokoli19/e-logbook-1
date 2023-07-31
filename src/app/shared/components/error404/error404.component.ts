import { Component } from '@angular/core';

@Component({
  selector: 'app-error404',
  template: `
    <div class="error">
      <div class="error_contents">
        <section class="upper">
          <h1>404</h1>
        </section>

        <section class="lower">
          <p class="lower_header-text">
            PAGE NOT FOUND
          </p>

          <p class="lower_description-text">
          We're sorry. The page you are looking for cannot be found.
          </p>
        </section>
      </div>
  </div>
  `,
  styleUrls: ['./error404.component.scss']
})
export class Error404Component {

}
