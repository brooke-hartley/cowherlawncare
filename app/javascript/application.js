// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as bootstrap from "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
import Rails from "@rails/ujs"
Rails.start()

/* Page scrolls to the top on refresh */
document.addEventListener("turbo:load", function() {
    window.scrollTo(0, 0);
  });

