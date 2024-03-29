import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {homeStyles} from './styles';
import {localized, msg, str} from '@lit/localize';

import '../shared/optimized-img';
@customElement('nmc-book')
@localized()
export class AppBookElement extends LitElement {
  static override styles = [
    homeStyles,
    css`
      .book-link {
        color: var(--font-color);
        text-decoration: none !important;
      }

      @media (min-width: 1200px) {
        .book-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: center;
          margin: 1rem 0.5rem;
          gap: 1rem;
        }
      }

      @media screen and (max-width: 1199px) {
        figcaption {
          margin-top: 1rem;
        }
      }
    `,
  ];
  override render() {
    return html`
      <h1>${msg(str`Book`)}</h1>
      <figure class="book-container">
        <optimized-img
          src="./images/eni-dpawm-cover.jpg"
          webp="./images/eni-dpawm-cover.webp"
          alt="${msg(str`cover of the book, title in french:`) +
          ' "Développement et Architecture des Applications Web Modernes"' +
          msg(str`, ENI Editions`)}"
          height="200"
          width="165"
        ></optimized-img>
        <figcaption>
          <h2>
            <a
              href="https://www.editions-eni.fr/livre/developpement-et-architecture-des-applications-web-modernes-retrouver-les-fondamentaux-9782409029523"
              target="_blank"
              rel="noopener noreferrer"
              >Développement et Architecture des Applications Web Modernes</a
            >
          </h2>
          <p>
            ${msg(
              str`Seven chapter and more than 600 pages to learn or relearn Web development fundamentals in a new way.`
            )}
          </p>
        </figcaption>
      </figure>
    `;
  }
}
