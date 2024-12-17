// Importing the Component decorator from Angular core
import { Component } from '@angular/core';
// Importing the RouterOutlet directive from Angular router
import { RouterOutlet } from '@angular/router';

// Defining the AppComponent with the @Component decorator
@Component({
  // The selector is the custom HTML tag that represents this component
  selector: 'app-root',
  // The imports array specifies the directives used in this component
  imports: [RouterOutlet],
  // The templateUrl points to the HTML template file for this component
  templateUrl: './app.component.html',
  // The styleUrl points to the CSS file for this component
  styleUrl: './app.component.css'
})
// Exporting the AppComponent class
export class AppComponent {
  // Defining a property 'title' with the value 'angular-starter'
  title = 'angular-starter';
}
