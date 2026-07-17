import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="legal-page">
      <div class="container">
        <a routerLink="/" class="legal-back">← Volver al inicio</a>
        <h1>Política de Privacidad y Cookies</h1>
        <p class="legal-updated">Última actualización: julio 2026</p>

        <h2>1. Responsable del tratamiento</h2>
        <ul>
          <li><strong>Titular:</strong> DevDyD</li>
          <li><strong>Domicilio:</strong> Sevilla, España</li>
          <li><strong>Email:</strong> info&#64;devdyd.com</li>
        </ul>

        <h2>2. Datos que recopilamos</h2>
        <p>Al utilizar el formulario de contacto de este sitio, nos facilitas los siguientes datos:</p>
        <ul>
          <li>Nombre o denominación de la empresa</li>
          <li>Dirección de correo electrónico</li>
          <li>El mensaje que nos envías</li>
        </ul>
        <p>Estos datos se transmiten directamente a través de WhatsApp y <strong>no se almacenan en ningún servidor de DevDyD</strong>.</p>

        <h2>3. Finalidad del tratamiento</h2>
        <p>Los datos facilitados se utilizan exclusivamente para atender tu consulta o solicitud de información sobre los servicios de DevDyD.</p>

        <h2>4. Base jurídica</h2>
        <p>La base jurídica para el tratamiento de tus datos es el <strong>consentimiento del interesado</strong> (art. 6.1.a del RGPD), que prestas al rellenar y enviar el formulario de contacto.</p>

        <h2>5. Conservación de los datos</h2>
        <p>Los datos se conservan durante el tiempo necesario para atender la solicitud y, en su caso, durante los plazos legales aplicables. Una vez finalizada la relación, se eliminarán de forma segura.</p>

        <h2>6. Destinatarios</h2>
        <p>DevDyD no cede ni vende tus datos personales a terceros, salvo obligación legal.</p>

        <h2>7. Tus derechos</h2>
        <p>Puedes ejercer en cualquier momento los derechos de <strong>acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad</strong> de tus datos enviando un email a <a href="mailto:info@devdyd.com">info&#64;devdyd.com</a> con el asunto "Protección de datos".</p>
        <p>Si consideras que el tratamiento no es conforme a la normativa, puedes presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (aepd.es).</p>

        <h2>8. Política de Cookies</h2>
        <p>Una cookie es un fichero que se descarga en el dispositivo del usuario al acceder a un sitio web.</p>

        <h3>Cookies que utiliza este sitio</h3>
        <table class="cookie-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>cookie_consent</code></td>
              <td>Técnica / Esencial</td>
              <td>Almacena si el usuario ha aceptado el aviso de cookies</td>
              <td>Persistente (localStorage)</td>
            </tr>
          </tbody>
        </table>

        <p>Este sitio web <strong>no utiliza cookies de análisis, publicidad ni seguimiento</strong> de terceros.</p>

        <h3>Cómo eliminar las cookies</h3>
        <p>Puedes eliminar o bloquear las cookies desde la configuración de tu navegador. Ten en cuenta que bloquear todas las cookies puede afectar a la funcionalidad del sitio.</p>
      </div>
    </div>
  `,
})
export class PrivacidadComponent implements OnInit {
  ngOnInit() { window.scrollTo(0, 0); }
}
